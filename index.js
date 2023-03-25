// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.
const colorElements = document.querySelectorAll('.color');
const priceElement = document.querySelector('#outprice');

colorElements.forEach((colorElement) => {
    colorElement.addEventListener('click', () => {
        document.querySelector('.color.active').classList.remove('active');

        colorElement.classList.add('active');

        const price = colorElement.getAttribute('data-price');
        priceElement.textContent = price;
    });
});

const sizeElements = document.querySelectorAll('.size');

sizeElements.forEach((sizeElement) => {
    sizeElement.addEventListener('click', () => {
        const sizeActive = document.querySelector('.size.active');
        if (sizeActive) {
            sizeActive.classList.remove('active');
        }
        sizeElement.classList.add('active');

        const price = sizeElement.getAttribute('data-price');
        priceElement.textContent = price;
    });
});

const typeElements = document.querySelectorAll('input[name="type"]');

typeElements.forEach((typeElement) => {
    typeElement.addEventListener('change', () => {
        const price = document.querySelector(`input[name="type"]:checked`).getAttribute('data-price');
        priceElement.textContent = price;
    });
});