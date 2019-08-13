import "../map/map.scss";
import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

let regions = [
    ["RU-MOW", "Москва"],
    ["RU-CHE", "Челябинская область"],
    ["RU-ORL", "Орловская область"],
    ["RU-OMS", "Омская область"],
    ["RU-LIP", "Липецкая область"],
    ["RU-KRS", "Курская область"],
    ["RU-RYA", "Рязанская область"],
    ["RU-BRY", "Брянская область"],
    ["RU-KIR", "Кировская область"],
    ["RU-ARK", "Архангельская область"],
    ["RU-MUR", "Мурманская область"],
    ["RU-SPE", "Санкт-Петербург"],
    ["RU-YAR", "Ярославская область"],
    ["RU-ULY", "Ульяновская область"],
    ["RU-NVS", "Новосибирская область"],
    ["RU-TYU", "Тюменская область"],
    ["RU-SVE", "Свердловская область"],
    ["RU-NGR", "Новгородская область"],
    ["RU-KGN", "Курганская область"],
    ["RU-KGD", "Калининградская область"],
    ["RU-IVA", "Ивановская область"],
    ["RU-AST", "Астраханская область"],
    ["RU-KHA", "Хабаровский край"],
    ["RU-CE", "Чеченская республика"],
    ["RU-UD", "Удмуртская республика"],
    ["RU-SE", "Республика Северная Осетия"],
    ["RU-MO", "Республика Мордовия"],
    ["RU-KR", "Республика  Карелия"],
    ["RU-KL", "Республика  Калмыкия"],
    ["RU-IN", "Республика  Ингушетия"],
    ["RU-AL", "Республика Алтай"],
    ["RU-BA", "Республика Башкортостан"],
    ["RU-AD", "Республика Адыгея"],
    ["RU-CR", "Республика Крым"],
    ["RU-SEV", "Севастополь"],
    ["RU-KO", "Республика Коми"],
    ["RU-PNZ", "Пензенская область"],
    ["RU-TAM", "Тамбовская область"],
    ["RU-LEN", "Ленинградская область"],
    ["RU-VLG", "Вологодская область"],
    ["RU-KOS", "Костромская область"],
    ["RU-PSK", "Псковская область"],
    ["RU-YAN", "Ямало-Ненецкий АО"],
    ["RU-CHU", "Чукотский АО"],
    ["RU-YEV", "Еврейская автономская область"],
    ["RU-TY", "Республика Тыва"],
    ["RU-SAK", "Сахалинская область"],
    ["RU-AMU", "Амурская область"],
    ["RU-BU", "Республика Бурятия"],
    ["RU-KK", "Республика Хакасия"],
    ["RU-KEM", "Кемеровская область"],
    ["RU-ALT", "Алтайский край"],
    ["RU-DA", "Республика Дагестан"],
    ["RU-KB", "Кабардино-Балкарская республика"],
    ["RU-KC", "Карачаевая-Черкесская республика"],
    ["RU-KDA", "Краснодарский край"],
    ["RU-ROS", "Ростовская область"],
    ["RU-SAM", "Самарская область"],
    ["RU-TA", "Республика Татарстан"],
    ["RU-ME", "Республика Марий Эл"],
    ["RU-CU", "Чувашская республика"],
    ["RU-NIZ", "Нижегородская край"],
    ["RU-VLA", "Владимировская область"],
    ["RU-MOS", "Московская область"],
    ["RU-KLU", "Калужская область"],
    ["RU-BEL", "Белгородская область"],
    ["RU-ZAB", "Забайкальский край"],
    ["RU-PRI", "Приморский край"],
    ["RU-KAM", "Камачатский край"],
    ["RU-MAG", "Магаданская область"],
    ["RU-SA", "Республика Саха"],
    ["RU-KYA", "Красноярский край"],
    ["RU-ORE", "Оренбургская область"],
    ["RU-SAR", "Саратовская область"],
    ["RU-VGG", "Волгоградская область"],
    ["RU-VOR", "Ставропольский край"],
    ["RU-SMO", "Смоленская область"],
    ["RU-TVE", "Тверская область"],
    ["RU-PER", "Пермская область"],
    ["RU-KHM", "Ханты-Мансийский АО"],
    ["RU-KHM", "Ханты-Мансийский АО"],
    ["RU-TOM", "Томская область"],
    ["RU-IRK", "Иркутская область"],
    ["RU-NEN", "Ненецскй АО"],
    ["RU-STA", "Ставропольский край"],
    ["RU-TUL", "Тульская область"]
];
let description = document.querySelector(".description");
let dropdown = document.getElementById("myDropdown");

// как только загрузилось окно 
window.onload = function () {
    mouseFollow(regions);
    fillDropdownReg();
}

function mouseFollow(arr) {
    for (let i = 0; i < arr.length; i++) {
        let area = document.getElementById(arr[i][0]);
        area.addEventListener("mouseover", function () {
            area.addEventListener('mousemove', function (e) {
                let x = e.pageX - description.getBoundingClientRect().width / 2;
                description.style.left = x + "px";
                let y = e.pageY - 70
                description.style.top = y + "px";
            });
            description.classList.add('active');
            description.innerHTML = arr[i][1];
        });
        area.addEventListener("mouseout", function () {
            description.classList.remove("active");
        });
    };
}

document.getElementById("dropbtn").addEventListener("click", myFunction, false);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function fillDropdownReg() {
    dropdown.innerHTML = "";
    for (let i = 0; i < regions.length; i++) {
      dropdown.insertAdjacentHTML('beforeend', `<a href="#">${regions[i][1]}<hr></a>`);
    }
  }