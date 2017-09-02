window.onload = function(){
    var buttons = document.querySelectorAll(".gallery__btn");
    var photos = document.querySelectorAll(".gallery__img");
    var i = 0;
    buttons[0].onclick = function(){
        photos[i].classList.toggle("gallery__img_active");
        i--;
        if (i < 0) {
            i = photos.length - 1;
        }
        photos[i].classList.toggle("gallery__img_active");
    };
    var x = 0;
    buttons[1].onclick = function(){
        photos[i].classList.toggle("gallery__img_active");
        i++;
        if (i > photos.length - 1) {
            i = 0;
        }
        photos[i].classList.toggle("gallery__img_active");
    }

};



