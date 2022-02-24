const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const subjectEl = document.querySelector('#subject');
const contentEl = document.querySelector('#content');
const err = document.getElementById('err');

const form = document.querySelector('#submitform');
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const number = /^[A-Za-z\s]+$/.test(x)
// const number = /^[A-Za-z\s]+$/;
const number = /^[a-zA-Z]*$/g;

const isEmailValid = (emailEl) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailEl);
}

var p = 0;

$(document).ready(function(){
$('#submitform').submit((e)=> {
    e.preventDefault()

    //  check name is null
    if(nameEl.value == '' ) {
        err.innerHTML ='Name field is required !';
        console.log("null")
        return false;
    }
    //  check email is null
    if(emailEl.value == '' ) {
        err.innerHTML ='E-mail field is required !';
        console.log("null")
        return false;
    }
    //  check subject is null
    if(subjectEl.value == '' ) {
        err.innerHTML ='Subject field is required !';
        console.log("null")
        return false;
    }
    //  check message is null
    if(contentEl.value == '' ) {
        err.innerHTML ='Message field is required !';
        console.log("null")
        return false;
    }

    //-----------------valid-------------------//

    //  check name valid..characters
    if (typeof nameEl.value !== "string" || /[0-9]+/g.test(nameEl.value)) {
        err.innerHTML = "Name should be characters !";
        return false;
    }
    // check email valid
    if ( !isEmailValid(emailEl.value)) {
        err.innerHTML = "E-mail is not valid !";
        return false;
    }

    //--------------length-------------------//

    // check name length
    if(nameEl.value.length <3 || nameEl.value.length >=20) {
        err.innerHTML ='Name should be between 3 and 20 characters.!';
        console.log("null")
        return false;
    }
    // check subject length
    if(subjectEl.value.length <3 || subjectEl.value.length >=20) {
        err.innerHTML ='Subject should be between 3 and 20 characters.!';
        console.log("null")
        return false;
    }
    // check message length
    if(contentEl.value.length <5 || contentEl.value.length >=30) {
        err.innerHTML ='Messages should be between 5 and 30 characters.!';
        console.log("null")
        return false;
    }


    
    if(p==0){

   


    err.innerHTML= ""
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwVE4qvN-SpTcBNpNM-FwcBDmUq0-B6JfBGXmNKuRYRCp6R5F9CKdAs8caGXBsGUQE/exec",
        data: $('#submitform').serialize(),
        type:"POST",
        success:function (response){
            alert("Form submitted successfully")
            console.log("submitted")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    });
    p++;
}

})
});



 // // check name is null
    // if(nameEl.value == '' ) {
    //     err.innerHTML ='name field is required !';
    //     console.log("null")
    //     return false;
    // }
    // else{
    //     err.innerHTML = '';
    //     console.log(" not null")
    // }
    // // check name only characters
    // if(number.test(nameEl)) {
    //     err.innerHTML = "Name should be characters";
    //     console.log("not characters")
    //     return false
    // }
    // else{
    //     err.innerHTML = '';
    //     console.log("characters")
    // }
    //  // check name length
    //  const min = 3, max = 30;
    // if(nameEl.length <= min || nameEl.length >= max ) {
    //     err.innerHTML = "Name must be between 3 and 20 characters.";
    //     return false
    // }

    // // check email is null 
    // if(emailEl.value == '' ) {
    //     err.innerHTML = "E-mail is required !";
    //     return false
    // }
    // // check email is valid
    // if( ! re.test(emailEl)) {
    //     err.innerHTML = "Enter a valid Email";
    //     return false;
    // }
    // // check subject is null
    // if(subjectEl.value == '' ) {
    //     err.innerHTML = "Subject is required !";
    //     return false
    // }
    // // check subject length
    // if(subjectEl.length <= 3 || subjectEl.length >=30 ) {
    //     err.innerHTML = "Subject must be between 3 and 30 characters.";
    //     return false
    // }

    // // check message is null
    // if(contentEl.value == '' ) {
    //     err.innerHTML = "Message is required !";
    //     return false
    // }
    // // check message length
    // if(contentEl.length <= 3 || contentEl.length >=30 ) {
    //     err.innerHTML = "Message must be between 3 and 30 characters.";
    //     return false
    // }
