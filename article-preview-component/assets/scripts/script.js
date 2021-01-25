const button = document.querySelector('[data-social="button"]');
const container = document.querySelector('[data-social="container"]');

function open() {
    container.classList.toggle('active');
}
button.addEventListener('click', open);