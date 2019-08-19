import "../form/form.scss";
import IMask from 'imask';

document.querySelector(".dropbtn").addEventListener("click", myFunction);

function myFunction() {
    
    document.querySelector(".dropdown-content").classList.toggle("show");

    let dropdown = document.querySelector('.dropdown-content');
    let arrow = document.querySelector('.arrow');

    if(dropdown.classList.contains('show')) {
        arrow.style.transform = 'rotate(90deg)';
    } else {
        arrow.style.transform = 'rotate(-90deg)';
    }

}

var phoneInput = document.querySelector('.phone-input');
var phoneMaskOptions = {
    mask: '+{7} 000 000-00-00'
  };
var phoneMask = IMask(phoneInput, phoneMaskOptions);

//disabling button if checkmark is not chosen
// let checker = document.querySelector('.checkbox-input');
// let sendbtn = document.querySelector('.send-button');
// checker.onchange = function() {
//   sendbtn.disabled = !this.checked;
// };