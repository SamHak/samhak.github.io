window.onload = function(){
    var buttonHeader = document.querySelector('.header__menu');
    var dropdownHeader = document.querySelector('.header__menu_list');

    buttonHeader.onclick = function(){
        dropdownHeader.classList.toggle("header__menu_list-active");
    };
};