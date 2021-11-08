let gifts = document.getElementById('no_of_gifts');
const generate = document.getElementById('generate');
let showGifts = document.getElementById('show_gifts');
let imageCount = document.getElementById('count');
generate.addEventListener('click', (event) => {
    if (gifts.value == '') {
    } else {
        event.preventDefault();
        generateGifts(gifts.value);
    }
    gifts.value = "";
});

function generateGifts(length) {
    for (i = 0; i < length; i++) {
        var image = new Image(40, 40);
        image.src = "giftbox.webp";
        showGifts.appendChild(image);
    }
}