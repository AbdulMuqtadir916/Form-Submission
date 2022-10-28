const userName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;
$('#error').hide();
$('#success').hide();

userName.addEventListener('blur',()=>{
    console.log('name is blured');
    let regExp = /^[a-zA-Z]([0-9a-zA-Z]){2,9}$/;
    let str = userName.value;
    let test = regExp.test(str);
    if(test){
        console.log('ok');
        userName.classList.remove('is-invalid');
        validName = true;
    }else{
        console.log('not ok');
       userName.classList.add('is-invalid');
       validName = false;
    }
})

email.addEventListener('blur',()=>{
    console.log('email is blured');
    let regExp = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    let test = regExp.test(str);
    if(test){
        console.log('ok');
        email.classList.remove('is-invalid');
        validEmail = true;
    }else{
        console.log('email not ok');
       email.classList.add('is-invalid');
       validEmail = false;
    }
});

phone.addEventListener('blur',()=>{
    console.log('name is blured');
    let regExp = /^([0-9]){10}$/;
    let str = phone.value;
    let test = regExp.test(str);
    if(test){
        console.log('ok');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }else{
        console.log('not ok');
       phone.classList.add('is-invalid');
       validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault()


    console.log('submit is clicked');
    if(validName && validEmail && validPhone){
        console.log('form is been subimitted');
        let success = document.getElementById('success');
        let error = document.getElementById('failure');
        success.classList.add('show');
        // error.classList.remove('show');
        $('#success').show();
        $('#error').hide()
    }else{
        console.log('form is not been subimitted')
        let error = document.getElementById('failure');
        let success = document.getElementById('success');
        error.classList.add('show');
        // succes.classList.remove('show');
        $('#error').show();
        $('#success').hide()
    }
    
 
})