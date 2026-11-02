let total = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const priceElement = this.parentElement.querySelector('.price');
        const priceText = priceElement.innerText;
        const price = parseInt(priceText.replace(/\D/g, ''));
        
        total += price;
        
        alert('Товар добавлен в корзину!\nИтого: ' + total + ' ₽');
    });
});
