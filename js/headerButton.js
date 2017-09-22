window.onload = function(){
    var buttonHeader = document.querySelector('.header__menu');
    var dropdownHeader = document.querySelector('.header__menu_list');

    buttonHeader.onclick = function(){
        dropdownHeader.classList.toggle("header__menu_list-active");
    };
    var buttonNext = document.querySelector(".undo");
    var buttonUndo = document.querySelector(".next");
    var galleryArray = document.querySelectorAll(".gallery__img");

    var i = 0;

    buttonNext.onclick = function(){
        galleryArray[i].classList.toggle("gallery__active");
        ++i;
        if(i > galleryArray.length - 1){
            i = 0;
        }
        galleryArray[i].classList.toggle("gallery__active");
    };
    buttonUndo.onclick = function(){
        galleryArray[i].classList.toggle("gallery__active");
        --i;
        if(i < 0){
            i = galleryArray.length - 1;
        }
        galleryArray[i].classList.toggle("gallery__active");
    };
};