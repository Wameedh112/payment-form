//console.log("loaded my file");

function onChangeEmailField(e) {
//    console.log(e.target.value);
    
    const $field = e.target;
//    console.log($field);
    const value = $field.value;
//    console.log(value);
    const isValid = value.includes('@');
//    console.log({isValid});
    const $parent = $field.parentElement;
//    console.log({$parent});
    const error = $parent.querySelector('.error');
//    console.log(error);
    if (isValid) {
       $parent.classList.remove('invalid');
    } else{
        $parent.classList.add('invalid');
        error.innerHTML = 'Email address is not valid.';
    }
}
document.querySelector("#email-field").addEventListener('change', onChangeEmailField);