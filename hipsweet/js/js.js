"use strict";
var key = document.querySelectorAll(".answer__key");
var block = document.querySelectorAll(".answer__block");

block[0].onclick = function() {
    key[0].classList.toggle("answer__key_active");
}
block[1].onclick = function() {
    key[1].classList.toggle("answer__key_active");
}
block[2].onclick = function() {
    key[2].classList.toggle("answer__key_active");
}
block[3].onclick = function() {
    key[3].classList.toggle("answer__key_active");
}


