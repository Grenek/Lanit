import "./scss/checkbox.scss";
import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

document.getElementById ("dropbtn").addEventListener ("click", myFunction, false);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

    let dropdown = document.querySelector('.dropdown-content');
    let arrow = document.querySelector('.arrow');

    if(dropdown.classList.contains('show')) {
        arrow.style.transform = 'rotate(90deg)';
    } else {
        arrow.style.transform = 'rotate(-90deg)';
    }

}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        let arrow = document.querySelector('.arrow');
        arrow.style.transform = 'rotate(-90deg)';
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}