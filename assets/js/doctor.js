document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector("#table-data");
  const record = JSON.parse(localStorage.getItem("records"));
  record.sort((a, b) => {
    if (
      a.status === "Consult A doctor!!" &&
      b.status !== "Consult A doctor!!"
    ) {
      return -1; // a comes first
    } else {
      return 1; // b comes first
    }
  });
  function showData() {
    if(record.length === 0){
      table.innerHTML = `<tr>
      <td colspan="6" class = "text-center py-5 text-muted">No records found.</td>
      </tr>`;
      return;
    }
    
    
    table.innerHTML = "";
    record.forEach((element,index) => {
      table.innerHTML += `<tr class = "${element.status === "Consult A doctor!!" ? "table-danger" : "table-success"}">
            <td>${element.date}</td>
            <td>${element.heartRate}</td>
            <td>${element.Systolic}</td>
            <td>${element.Diastolic}</td>
            <td><span class="${element.status === "Consult A doctor!!" ? "badge-danger" : "badge-normal"}">
            ${element.status === "Consult A doctor!!" ? "Treatment Needed" : "Healthy"}
            </span></td>
            <td>
                <button class="btn btn-sm btn-secondary rounded-4 del-btn" data-index="${index}">
                    Dismiss
                </button>
            </td>
            </tr>`;
    });
  }
  showData();

  //function to Delete
  const tableBody = document.querySelector("#table-data");
  tableBody.addEventListener('click',(event)=>{
    if(event.target.classList.contains("del-btn")){
        const indexToDelete = event.target.getAttribute("data-index");
        record.splice(indexToDelete,1);
        localStorage.setItem("records", JSON.stringify(record));
        showData();
        console.log("i am working")
    }
  });

});
