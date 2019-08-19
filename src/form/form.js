import "../form/form.scss";
import IMask from 'imask';

document.querySelector(".dropbtn").addEventListener("click", myFunction);

function myFunction() {

    document.querySelector(".dropdown-content").classList.toggle("show");

    let dropdown = document.querySelector('.dropdown-content');
    let arrow = document.querySelector('.arrow');

    if (dropdown.classList.contains('show')) {
        arrow.style.transform = 'rotate(90deg)';
    } else {
        arrow.style.transform = 'rotate(-90deg)';
    }

}

let phoneInput = document.suggestion.phone;
var phoneMaskOptions = {
    mask: '+{7}(000)-000-00-00'
};
var phoneMask = IMask(phoneInput, phoneMaskOptions);

let themeInput = document.suggestion.theme;
let nameInput = document.suggestion.name;
let mailInput = document.suggestion.mail;
let textInput = document.suggestion.text;
let inputs = [[themeInput, notEmpty], [phoneInput, telNumCheck], [nameInput, onlyLetters], [mailInput, emailCheck], [textInput, notEmpty]];

inputs.forEach(item => {
    console.log(item[0], item[1]);
    item[0].addEventListener("keyup", () => {
        customizeFieldValidation(item[0], item[1])
    });
});

function customizeFieldValidation(input, rule) {
    if (rule(input.value)) {
        input.classList.add("validated")
    } else {
        input.classList.remove("validated")
    }
}

function onlyLetters(myString) {
    return /^[[a-zA-ZA-я]+\s?]*$/.test(myString);
}

function notEmpty(myString) {
    return /^[\wА-я.]+(\s+[\wА-я.]+)*$/.test(myString);
}

function emailCheck(myString) {
    return /^([a-z0-9_А-я\.-]+)@([a-z0-9_А-я\.-]+)\.([a-zА-я\.]{2,6})$/.test(myString);
}

function telNumCheck(myString) {
    return /^(\+7\(\d{3}\)\-\d{3}\-\d{2}\-\d{2})$/.test(myString);

}