const accordionList = document.querySelectorAll('[data-accordion="list"] dt');
const icon = document.querySelectorAll('[data-accordion="list"] dt .icon');
const activeClass = "show";
// Primeiro elemento da accordionList já vai estar mostrando assim que carregar a página
accordionList[0].classList.add(activeClass);
accordionList[0].nextElementSibling.classList.add(activeClass);

function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
});

