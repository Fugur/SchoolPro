var elementWidth = document.querySelector(".imagesLi").clientWidth;
var width = elementWidth;
var list = document.querySelector(".images");
var pictures = document.querySelectorAll(".imagesLi");  
var position = 0;  
document.querySelector(".prev").onclick = function() {
    position += width; // вычисляем положение картинки
    // рассчитываем положение последней картинки
    position = Math.min(position, 0)
    list.style.marginLeft = position + "px";
};
document.querySelector(".next").onclick = function() {
    position -= width; // вычисляем положение картинки
    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент 
    position = Math.max(position, -width * (pictures.length - 1));
    list.style.marginLeft = position + "px";
};