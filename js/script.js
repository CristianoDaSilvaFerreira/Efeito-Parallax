
function parallax() {
    var layer_1 = document.getElementById('layer_1');
    var layer_2 = document.getElementById('layer_2');
    var layer_3 = document.getElementById('layer_3');
    var layer_4 = document.getElementById('layer_4');

    layer_1.style.top = -(window.pageYOffeset / 3) * 'px';
    layer_2.style.top = -(window.pageYOffeset / 6) * 'px';
    layer_3.style.top = -(window.pageYOffeset / 7) * 'px';
    layer_4.style.top = -(window.pageYOffeset / 7) * 'px';
}

window.addEventListener("scroll", parallax, false);