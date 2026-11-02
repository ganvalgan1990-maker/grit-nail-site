let total = 0;

// Находим все кнопки на странице
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Находим цену товара (она лежит в блоке .price перед кнопкой)
        const priceElement = this.parentElement.querySelector('.price');
        const priceText = priceElement.innerText;
        
        // Очищаем текст от пробелов и значка рубля, превращаем в число
        const price = parseInt(priceText.replace(/\D/g, ''));
        
        // Добавляем к общей сумме
        total += price;
        
        // Показываем уведомление
        alert('Товар добавлен в корзину!\nИтого: ' + total + ' ₽');
    });
});
