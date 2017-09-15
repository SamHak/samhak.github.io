var buttonNext = document.querySelector(".next");
var galleryArray = document.querySelectorAll(".gallery__img");

var i = 0;

buttonNext.onclick = function(){
    galleryArray[i].classList.toggle("gallery__active");
    i++;
    galleryArray[i].classList.toggle("gallery__active");
    if(i > galleryArray.length){
        i = 0;
    }
};