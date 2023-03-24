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