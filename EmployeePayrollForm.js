window.addEventListener('DOMContentLoaded',(event)=>{
    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });

    //Apply name to regex field
    const name = document.querySelector('#name');
    const texterror = document.querySelector('.text-error');
    output.textContent=name.value;
    name.addEventListener('input', function () {
        let nameregex = ('^[A-Z]{1}[a-z]{2,}$');
        if (name.value.lemgth==0){
            texterror.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;
            texterror.textContent = "";
        }
        catch(e){
            texterror.textContent = "e";
        }
    });
});
