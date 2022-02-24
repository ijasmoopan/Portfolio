const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const subjectEl = document.querySelector('#subject');
const contentEl = document.querySelector('#content');
const err = document.getElementById('err');

const form = document.querySelector('#submitform');




console.log(nameEl.value);

getComputedStyle
const checkName = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'Name cannot be blank.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameEl, `Name must be between ${min} and ${max} characters.`)
    
    } else if (!isNaN(name)) {
        showError(nameEl, `Name must be Alphabets.`)

    } else {
        showSuccess(nameEl);
        valid = true;
        console.log("name is valid")
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
        console.log("email is valid")
    }
    return valid;
};

const checkSubject = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const subject = subjectEl.value.trim();

    if (!isRequired(subject)) {
        showError(subjectEl, 'Subject cannot be blank.');
    } else if (!isBetween(subject.length, min, max)) {
        showError(subjectEl, `Subject must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(subjectEl);
        valid = true;
        console.log("subject is valid")
    }
    return valid;
};

const checkContent = () => {

    let valid = false;

    const min = 3,
        max = 25;

    const content = contentEl.value.trim();

    if (!isRequired(content)) {
        showError(contentEl, 'Message cannot be blank.');
    } else if (!isBetween(content.length, min, max)) {
        showError(contentEl, `Message must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(contentEl);
        valid = true;
        console.log("content is valid")
    }
    return valid;
};

// const checkPassword = () => {
//     let valid = false;


//     const password = passwordEl.value.trim();

//     if (!isRequired(password)) {
//         showError(passwordEl, 'Password cannot be blank.');
//     } else if (!isPasswordSecure(password)) {
//         showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
//     } else {
//         showSuccess(passwordEl);
//         valid = true;
//     }

//     return valid;
// };

// const checkConfirmPassword = () => {
//     let valid = false;
//     // check confirm password
//     const confirmPassword = confirmPasswordEl.value.trim();
//     const password = passwordEl.value.trim();

//     if (!isRequired(confirmPassword)) {
//         showError(confirmPasswordEl, 'Please enter the password again');
//     } else if (password !== confirmPassword) {
//         showError(confirmPasswordEl, 'The password does not match');
//     } else {
//         showSuccess(confirmPasswordEl);
//         valid = true;
//     }

//     return valid;
// };

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

// const isPasswordSecure = (password) => {
//     const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//     return re.test(password);
// };

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');
    console.log("error")

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
    console.log("error msg")
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
    console.log("success")

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isNameValid = checkName(),
        isEmailValid = checkEmail(),
        isSubjectValid = checkSubject(),
        isContentValid = checkContent();

    let isFormValid = isNameValid &&
        isEmailValid &&
        isSubjectValid &&
        isContentValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        console.log("form is valid 1")

        // $("#submitform").submit((e)=>{
        //     e.preventDefault();
        //     alert('submittedstack');
        //   });

        jQuery(document).ready(function () {

        // $(function(){
        // var contactform = $('#submitform');
        console.log("form is valid contactform")
        $('#submitform').submit((e)=> {
           


        // contactform.on('click',function(e) {

            console.log("form is valid 2")
            e.preventDefault()
            console.log("form is valid 3")
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
            return false;
        })

        })
    }
});


// const debounce = (fn, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//         // cancel the previous timer
//         if (timeoutId) {
//             clearTimeout(timeoutId);
//         }
//         // setup a new timer
//         timeoutId = setTimeout(() => {
//             fn.apply(null, args)
//         }, delay);
//     };
// };

// debounce()

// form.addEventListener('input', function (e) {
//     console.log("button 1")
//     switch (e.target.id) {
//         case 'name':
//             checkName();
//             break;
//         case 'email':
//             checkEmail();
//             break;
//         case 'subject':
//             checkSubject();
//             break;
//         case 'content':
//             checkContent();
//             break;
//     }
// });






// to send to gmail

// $("#submitform").submit((e)=>{
//     e.preventDefault()
//     $.ajax({
//         url:"https://script.google.com/macros/s/AKfycbwVE4qvN-SpTcBNpNM-FwcBDmUq0-B6JfBGXmNKuRYRCp6R5F9CKdAs8caGXBsGUQE/exec",
//         data:$("#submitform").serialize(),
//         method:"post",
//         success:function (response){
//             alert("Form submitted successfully")
//             window.location.reload()
//             //window.location.href="https://google.com"
//         },
//         error:function (err){
//             alert("Something Error")

//         }
//     })
// })