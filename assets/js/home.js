

document.addEventListener("DOMContentLoaded", function () {
  const patientRecords = [];

  const vitalForm = document.querySelector("#vitalForm");
  const inputSystolicPressure = vitalForm.querySelector("#SystolicPressure");
  const inputDiastolicPressure = vitalForm.querySelector("#DiastolicPressure");
  const inputHeartRate = vitalForm.querySelector("#inputHeartRate");

  vitalForm.addEventListener("submit", (event) => {
    const date = new Date().toLocaleString();
    event.preventDefault();
    let inputHeartValue = inputHeartRate.value;
    let inputSystolicValue = inputSystolicPressure.value;
    let inputDiastolicValue = inputDiastolicPressure.value;
    patientRecords.push({
      date: date,
      heartRate: inputHeartValue,
      Systolic: inputSystolicValue,
      Diastolic: inputDiastolicValue,
      status: checkStatus(
        inputSystolicValue,
        inputDiastolicValue,
        inputHeartValue,
      ),
    });
    insertData();
    localStorage.setItem("records", JSON.stringify(patientRecords));
    updateCards();
    inputHeartRate.value = "";
    inputSystolicPressure.value = "";
    inputDiastolicPressure.value = "";
  });

  //function for checking the status
  function checkStatus(
    inputSystolicValue,
    inputDiastolicValue,
    inputHeartValue,
  ) {
    if (
      inputHeartValue >= 60 &&
      inputHeartValue <= 100 &&
      inputSystolicValue <= 120 &&
      inputDiastolicValue <= 80
    ) {
      return "Normal";
    } else {
      return "Consult A doctor!!";
    }
  }

  function insertData() {
    const tableData = document.querySelector("#table-data");

    if(patientRecords.length === 0){
      tableData.innerHTML = `<tr>
      <td colspan="6" class = "text-center py-5 text-muted">No records found. Click "Log Vitals" to start.</td>
      </tr>`;
      return;
    }

    tableData.innerHTML = "";
    patientRecords.forEach((element, index) => {
      tableData.innerHTML += `<tr  style="line-height:2rem";>
            <td >${element.date}</td>
            <td >${element.heartRate}</td>
            <td >${element.Systolic}</td>
            <td >${element.Diastolic}</td>
            <td><span class=" ${element.status === "Consult A doctor!!" ? "badge-danger" : "badge-normal"}">${element.status}</span></td>
            <td>
                <button class="btn btn-sm btn-secondary rounded-4 del-btn" data-index="${index}">
                    Dismiss
                </button>
            </td>
            </tr>`;
    });
  }

  const heartRate = document.querySelector("#heartRate");
  const bloodPressure = document.querySelector("#bloodPressure");
  const status = document.querySelector("#reading");
  //function to Update Cards
  function updateCards() {
    if (patientRecords.length === 0) {
        heartRate.innerHTML = "---";
        bloodPressure.innerHTML = "---";
        status.innerHTML = "0";
        return; 
    }
    
    let latest = patientRecords[patientRecords.length - 1];
    heartRate.innerHTML = latest.heartRate;
    bloodPressure.innerHTML = `${latest.Systolic}/${latest.Diastolic}`;
    status.innerHTML = patientRecords.length;
}
  //function to Delete
  const tableBody = document.querySelector("#table-data");
  tableBody.addEventListener('click',(event)=>{
    if(event.target.classList.contains("del-btn")){
        const indexToDelete = event.target.getAttribute("data-index");
        patientRecords.splice(indexToDelete,1);
        localStorage.setItem("records", JSON.stringify(patientRecords));
        insertData();
        updateCards();
    }
  });

  
  
});
