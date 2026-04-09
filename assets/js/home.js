document.addEventListener("DOMContentLoaded", function () {
    const date = new Date().toLocaleDateString();
    const patientRecords = [];
    
    
    const vitalForm = document.querySelector("#vitalForm");

    const inputBloodPressure  = vitalForm.querySelector("#inputBloodPressure");
    const inputHeartRate  = vitalForm.querySelector("#inputHeartRate");
    
    vitalForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        let inputHeartValue = inputHeartRate.value;
        let inputBloodValue = inputBloodPressure.value;
        patientRecords.push({date: date,heartRate : inputHeartValue,bloodPressure : inputBloodValue,status : "Alive"});
        insertData();
    });

    function insertData(){
        const tableData = document.querySelector("#table-data"); // first
        tableData.innerHTML = ""; 
        patientRecords.forEach(element  => {
            tableData.innerHTML += `<tr>
            <td>${element.date}</td>
            <td>${element.heartRate}</td>
            <td>${element.bloodPressure}</td>
            <td>${element.status}</td>
            </tr>`
        });
        
    }
      

});
