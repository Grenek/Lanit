import "../form/form.scss";
import IMask from 'imask';

// показывать и скрывать "Замечания и предложения по набору данных" + поворот стрелки в зависимости от положения
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

// маска для поля телефона
let phoneInput = document.suggestion.phone;
var phoneMaskOptions = {
    mask: '+{7} 000 000-00-00'
};
var phoneMask = IMask(phoneInput, phoneMaskOptions);


let themeInput = document.suggestion.theme;
let nameInput = document.suggestion.name;
let mailInput = document.suggestion.mail;
let textInput = document.suggestion.text;
let inputs = [[themeInput, notEmpty], [phoneInput, telNumCheck], [nameInput, onlyLetters], [mailInput, emailCheck], [textInput, notEmpty]];

// вызов функции валидации каждого поля и включение/выключение кнопки отправить при keyup
inputs.forEach(item => {
    item[0].addEventListener("keyup", () => {
        fieldValidation(item[0], item[1]);
        enableDisableButton();
    });
});

// включение/выключение кнопки при нажатии галочки
document.querySelector(".checkmark").addEventListener("click", enableDisableButtonOnClick);

// логика валидации
function fieldValidation(input, rule) {
    if (input.value != "") {
        if (!rule(input.value)) {
            input.classList.remove("validated");
            input.classList.add("notValidated");
            toggleInputImg(input, "error", "block");
        }
        if (rule(input.value)) {
            input.classList.remove("notValidated");
            input.classList.add("validated");
            toggleInputImg(input, "approved", "block");
        }
    } else {
        input.classList.remove("validated");
        input.classList.remove("notValidated");
        toggleInputImg(input, "approved", "none");
    }
}

// тоггл изображения
function toggleInputImg(input, image, display) {
    let parent = input.parentNode;
    let img = parent.querySelector("img");
    img.src = `img/${image}.png`;
    img.style.display = display;
}

// включение и выключение кнопки в зависимости от валидации
function enableDisableButton() {
    let button = document.querySelector(".send-button");
    let checkbox = document.querySelector(".checkbox-input");
    if (themeInput.classList.contains("validated") && nameInput.classList.contains("validated") && mailInput.classList.contains("validated") && textInput.classList.contains("validated") && phoneInput.classList.contains("validated") && checkbox.checked) {
        button.disabled = false
    } else {
        button.disabled = true
    }
}

function enableDisableButtonOnClick() {
    let button = document.querySelector(".send-button");
    let checkbox = document.querySelector(".checkbox-input");
    if (themeInput.classList.contains("validated") && nameInput.classList.contains("validated") && mailInput.classList.contains("validated") && textInput.classList.contains("validated") && phoneInput.classList.contains("validated") && !checkbox.checked) {
        button.disabled = false
    } else {
        button.disabled = true
    }
}

// правила проверки полей
function onlyLetters(myString) {
    return /^[[a-zA-ZA-я]+\s?]*$/.test(myString);
}

function notEmpty(myString) {
    return !/^\s*$/.test(myString);
}

function emailCheck(myString) {
    return /^([a-z0-9_А-я\.-]+)@([a-z0-9_А-я\.-]+)\.([a-zА-я\.]{2,6})$/.test(myString);
}

function telNumCheck(myString) {
    return /^(\+7\s\d{3}\s\d{3}\-\d{2}\-\d{2})$/.test(myString);

}