document.addEventListener("DOMContentLoaded", function() {
    emailjs.init('@gmail.com'); // Replace with your actual EmailJS user_id

    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const orderButton = document.getElementById('order-now');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            total += item.priceUSD;
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <p>${item.name}</p>
                <span>$${item.priceUSD.toFixed(2)} - ${item.calories} kcal</span>
                <button class="remove-from-cart" data-index="${index}">Remove</button>
            `;
            cartItemDiv.querySelector('.remove-from-cart').addEventListener('click', (e) => {
                removeFromCart(e.target.getAttribute('data-index'));
            });
            cartItemsContainer.appendChild(cartItemDiv);
        });
        cartTotalContainer.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`;
        cartCount.textContent = cart.length;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }

    function orderNow() {
        if (cart.length === 0) {
            alert("Your cart is empty. Add items to the cart before placing an order.");
            return;
        }

        const emailParams = {
            user_email: "amdadujjal@gmail.com", // Replace with the user's email address
            order_details: cart.map(item => `${item.name} - $${item.priceUSD.toFixed(2)}`).join('\n'),
            total_price: cart.reduce((sum, item) => sum + item.priceUSD, 0).toFixed(2)
        };

        emailjs.send('service_number', 'your_template_id', emailParams)
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Order placed successfully! You will receive a confirmation email shortly.");
                localStorage.removeItem('cart');
                cart = [];
                updateCartDisplay();
            }, error => {
                console.log('FAILED...', error);
                alert("Failed to place order. Please try again.");
            });
    }

    orderButton.addEventListener('click', orderNow);
    updateCartDisplay();
});
