const usernameE1 = document.querySelector('#username');
const emailE1 = document.querySelector('#email');
const passwordE1 = document.querySelector('#password');
const confirmPasswordE1 = document.querySelector('#confirm-password');
const form = document.querySelector('#signup')

form.addEventListener('submit', function(e){
    e.preventDefault() //prevent the form from performing any other event than submit.

    //validate feilds
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();
    let isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
    //submit to the server if the form is valid
    if(isFormValid){
    }
});

const checkUsername = () => {
    let valid = false;
    const min = 3,
    max = 25;
    const username = usernameE1.value.trim();
    if(!isRequired(username)){
        showError(usernameE1, 'Username cannot be blank');
    }else if(!isBetween(username.length, min, max)){
        showError(usernameE1, `Username must be between ${min} and ${max} characters.`)
    }else{
        showSuccess(usernameE1);
        valid = true;
    }
    return valid;
};
const isRequired = value => value === '' ? false: true;
const isBetween = (length, min, max) => length < min || length > max ? false: true;

const showError = (input, message) => {
    //get the form feild element
    const formFeild = input.parentElement;
    //add the error class
    formFeild.classList.remove('success');
    formFeild.classList.add('error');
    //show the error message
    const error = formFeild.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formFeild = input.parentElement;
    formFeild.classList.remove('error');
    formFeild.classList.add('success');
    // formFeild.classList.remove('error');
    // formFeild.classList.add('success');
    const success = formFeild.querySelector('small');
    success.textContent = '';
};

const checkEmail = () => {
    let valid = false;
    const email = emailE1.value.trim();
    if(!isRequired(email)){
        showError(emailE1, 'Email cannot be blank');
    }else if(!isEmailValid(email)){
        showError(emailE1, 'Email is not valid')
    }else{
        showSuccess(emailE1);
        valid = true;
    }
    return valid;
};
const isEmailValid = (email) => {
    const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    return re.test(email)
};

const checkPassword = () => {
    let valid = false;
    const password = passwordE1.value.trim();

    if(!isRequired(password)){
        showError(passwordE1, 'Password cannot be blank.');
    } else if(!isPasswordSecure(password)){
        showError(passwordE1, 'Password must have at least 8 characters that include at least 1 lowercase character, 1 uppercase characte, 1 number, and 1 special character.');
    } else{
        showSuccess(passwordE1)
        valid = true;
    }
    return valid;
};
const isPasswordSecure = (password) => {
    const re = new
    RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPasswordE1.value.trim();

    if(!isRequired(confirmPassword)){
        showError(confirmPasswordE1, 'confirm password cannot be empty');
    } else if(!passwordEqual(confirmPassword)){
        showError(confirmPasswordE1, 'Password should match')
    }else{
        showSuccess(confirmPasswordE1)
        valid = true;
    }
    return valid;
}
const passwordEqual = (confirmPassword) => {
    // password === confirmPassword
    const re = new
    RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(confirmPassword)
}






