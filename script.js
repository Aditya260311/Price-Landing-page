const orderButtons = document.querySelectorAll('.pricing-option button');
const cart = document.getElementById('cart');

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const flavor = button.parentElement.querySelector('h3').textContent;
        const price = button.parentElement.querySelector('.price').textContent;

        const cartItem = document.createElement('p');
        cartItem.textContent = `${flavor} - ${price}`;
        cart.appendChild(cartItem);

    });
});
