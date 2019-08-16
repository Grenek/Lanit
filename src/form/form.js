import "../form/form.scss";

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