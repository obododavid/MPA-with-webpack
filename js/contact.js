const form = document.forms[0];
const button = document.querySelector('.button-contactForm');
const errMessage_Name = document.querySelector('#name + h6');
const errMessage_Email = document.querySelector('#email + h6');
const errMessage_Subject = document.querySelector('#subject + h6');
const errMessage_Message = document.querySelector('#message + h6');
const input_Name = document.querySelector('#name');
const input_Email = document.querySelector('#email');
const input_Subject = document.querySelector('#subject');
const input_Message = document.querySelector('#message');

const loader = document.querySelector('.loader-backdrop');
const successMessage = document.querySelector('.form-submission-success');
const errorMessage = document.querySelector('.form-submission-error');



const handleRequestSuccess = (data) => {
    successMessage.classList.add('show');
    loader.classList.remove('show-loader')
}

const handleRequestError = (err) => {
    errorMessage.classList.add('show');
    loader.classList.remove('show-loader')
}

const handleOnValidate = e => {
    const { name, value } = e.target;

    if (name === 'name') {
        if (value.length < 2) {
            errMessage_Name.classList.add('err')
        } else {
            errMessage_Name.classList.remove('err')
        }
    }

    if (name === 'email') {
        const isValid = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value)
        if (!isValid) {
            errMessage_Email.classList.add('err')
        } else {
            errMessage_Email.classList.remove('err')
        }
    }

    if (name === 'subject') {
        if (value.length < 4) {
            errMessage_Subject.classList.add('err')
        } else {
            errMessage_Subject.classList.remove('err')
        }
    }

    if (name === 'message') {
        if (value.length < 20) {
            errMessage_Message.classList.add('err')
        } else {
            errMessage_Message.classList.remove('err')
        }
    }

    if (input_Name.value.length > 2 &&
        new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(input_Email.value) &&
        input_Subject.value.length > 4 &&
        input_Message.value.length > 20) {
        button.classList.remove('btn-disabled')
    }

}

const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
        input_Name.value.length < 2 ||
        !new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(input_Email.value) ||
        input_Subject.value.length < 4 ||
        input_Message.value.length < 20
    ) return;

    loader.classList.add('show-loader')

    const data = {
        fullName: input_Name.value,
        email: input_Email.value,
        subject: input_Subject.value,
        message: input_Message.value,
    }


    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })

    console.log(data)

    const request = new Request(form.action, {
        method: form.method,
        mode: 'no-cors',
        headers: headers,
        body: JSON.stringify(data)
    })

    // fetch(request)
    //     .then(res => res.json())
    //     .then(data => handleRequestSuccess(data))
    //     .catch(error => handleRequestError(error))

    async function makeRequest() {
        try {
            console.log('here')
            let response = await fetch(request);
            console.log('response')
            let data = await response.json();
            if (data.error) return handleRequestError(data)
            return handleRequestSuccess(data)

        }
        catch (err) {
            handleRequestError(err)
        }
    }

    makeRequest();

}

if (button) {
    button.classList.add('btn-disabled')
    button.addEventListener('click', handleOnSubmit)
}
if (form) {
    form.addEventListener('keyup', handleOnValidate)
}
