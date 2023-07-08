const salary=document.querySelector("#salary");
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function()
{
    output.textContent=salary.value;
});

//Apply name to regex field
const text=document.querySelector('#text');
const texterror=document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameregex=('^[A-Z]{1}[a-z]{2,}$');
    if(nameregex.test(text.value)) texterror.textContent="";
    else texterror.textContent="Name is Incorrect";
})
