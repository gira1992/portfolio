const form = document.querySelector('form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const textarea = document.querySelector('#message')
const errorMessage = document.querySelector('.message')

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function emailValidation(input) {
    if (input.value.match(validRegex)) {
        console.log('valid email address')
        return true
    } else {
        console.log('Please enter a valid email address')
        return false
    }
}

form.addEventListener('submit', (e) => {
    let message = []

    if (emailValidation(email) === false && email.value !== '') {
        message.push('Please enter a valid email address')
    }

    if (name.value === '' || name.value === null) {
        message.push('Please Enter your Name')
    }

    if (email.value === '' || email.value === null) {
        message.push('Please Enter your email address')
    }

    if (textarea.value === '' || textarea.value === null) {
        message.push('Please enter your message')
    }

    console.log(email.innerHTML)

    if (message.length > 0) {
        e.preventDefault() //prevent page from submitting
        errorMessage.innerHTML = message.join(', ')
    }

    e.preventDefault()


})

function validEmail() {
    nameLabel.style.top = '25px'
}