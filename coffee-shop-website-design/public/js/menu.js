document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const menuContainer = document.getElementById('menu-container');
    const cartCount = document.getElementById('cart-count');

    const menuItems = [
        { category: 'Fruit Tea', name: 'Passion', priceUSD: 5.99, calories: 129 },
        { category: 'Fruit Tea', name: 'Passion Lychee', priceUSD: 6.24, calories: 149 },
        { category: 'Fruit Tea', name: 'Passion Mango', priceUSD: 6.24, calories: 161 },
        { category: 'Fruit Tea', name: 'Mango Lychee', priceUSD: 6.24, calories: 154 },
        { category: 'Fruit Tea', name: 'Mango', priceUSD: 5.99, calories: 176 },
        { category: 'Fruit Tea', name: 'Kiwi Mango', priceUSD: 6.24, calories: 154 },
        { category: 'Fruit Tea', name: 'Peach Mango', priceUSD: 6.24, calories: 159 },
        { category: 'Fruit Tea', name: 'Peach', priceUSD: 5.99, calories: 144 },
        { category: 'Fruit Tea', name: 'Peach Lychee', priceUSD: 6.24, calories: 192 },
        { category: 'Fruit Tea', name: 'Green Apple', priceUSD: 5.99, calories: 116 },
        { category: 'Fruit Tea', name: 'Green Apple Pineapple', priceUSD: 6.24, calories: 149 },
        { category: 'Fruit Tea', name: 'Pineapple', priceUSD: 5.99, calories: 176 },
        { category: 'Fruit Tea', name: 'Lychee Black', priceUSD: 5.99, calories: 133 },
        { category: 'Fruit Tea', name: 'Lychee Green', priceUSD: 5.99, calories: 124 },
        { category: 'Fruit Tea', name: 'Lemon', priceUSD: 5.99, calories: 111 },
        { category: 'Fruit Tea', name: 'Peach Lemon', priceUSD: 5.99, calories: 143 },
        { category: 'Fruit Tea', name: 'Strawberry Lychee', priceUSD: 5.99, calories: 197 },
        { category: 'Fruit Tea', name: 'Strawberry', priceUSD: 5.99, calories: 204 },
        { category: 'Fruit Tea', name: 'Watermelon', priceUSD: 5.99, calories: 117 },
        { category: 'Fruit Tea', name: 'Lemon Mint', priceUSD: 6.24, calories: 139 },
        { category: 'Milk Tea', name: 'Pearl Classic', priceUSD: 6.11, calories: 223 },
        { category: 'Milk Tea', name: 'Jasmine Milk', priceUSD: 6.11, calories: 212 },
        { category: 'Milk Tea', name: 'Caramel', priceUSD: 6.11, calories: 309 },
        { category: 'Milk Tea', name: 'Mango Milk', priceUSD: 6.11, calories: 241 },
        { category: 'Milk Tea', name: 'Chocolate Milk', priceUSD: 6.11, calories: 206 },
        { category: 'Milk Tea', name: 'Chocolate Mint Milk', priceUSD: 6.11, calories: 209 },
        { category: 'Milk Tea', name: 'Chocolate Caramel', priceUSD: 6.11, calories: 301 },
        { category: 'Milk Tea', name: 'Honeydew Milk', priceUSD: 6.11, calories: 254 },
        { category: 'Milk Tea', name: 'Coconut Milk', priceUSD: 6.11, calories: 249 },
        { category: 'Milk Tea', name: 'Matcha Milk', priceUSD: 6.24, calories: 214 },
        { category: 'Milk Tea', name: 'Peach Milk', priceUSD: 6.11, calories: 217 },
        { category: 'Milk Tea', name: 'Strawberry Milk', priceUSD: 6.11, calories: 257 },
        { category: 'Milk Tea', name: 'Taro', priceUSD: 5.99, calories: 234 },
        { category: 'Milk Tea', name: 'Thai Milk', priceUSD: 5.99, calories: 257 },
        { category: 'Milk Tea', name: 'Vanilla Green', priceUSD: 6.11, calories: 226 },
        { category: 'Milk Tea', name: 'Vanilla Black', priceUSD: 6.11, calories: 210 },
        { category: 'Milk Tea', name: 'Mint Milk', priceUSD: 6.11, calories: 233 },
        { category: 'Milk Tea', name: 'Hazelnut Milk', priceUSD: 6.24, calories: 271 },
        { category: 'Signature Special', name: 'Crumbled Oreo Slush', priceUSD: 7.24, calories: 472 },
        { category: 'Signature Special', name: 'Brown Sugar Pearl Tea', priceUSD: 7.24, calories: 294 },
        { category: 'Signature Special', name: 'Mocha', priceUSD: 7.11, calories: 266 },
        { category: 'Signature Special', name: 'Oreo Milk Tea', priceUSD: 7.11, calories: 307 },
        { category: 'Signature Special', name: 'Chocolate Oreo', priceUSD: 7.24, calories: 421 },
        { category: 'Signature Special', name: 'Strawberry Oreo', priceUSD: 7.24, calories: 284 },
        { category: 'Signature Special', name: 'Lotus Milk', priceUSD: 7.11, calories: 251 },
        { category: 'Mocktails', name: 'Watermelon Martini', priceUSD: 7.36, calories: 239 },
        { category: 'Mocktails', name: 'Strawberry Mojito', priceUSD: 7.36, calories: 244 },
        { category: 'Mocktails', name: 'Tropical Punch', priceUSD: 7.24, calories: 207 },
        { category: 'Mocktails', name: 'Pina Colada', priceUSD: 7.24, calories: 199 },
        { category: 'Mocktails', name: 'Kiwi Colada', priceUSD: 7.24, calories: 236 },
        { category: 'Frappé', name: 'Hazelnut Frappé', priceUSD: 7.49, calories: 350 },
        { category: 'Frappé', name: 'Caramel Frappé', priceUSD: 7.44, calories: 353 },
        { category: 'Frappé', name: 'Vanilla Frappé', priceUSD: 7.49, calories: 333 },
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function filterMenu(category) {
        menuContainer.innerHTML = '';
        const filteredItems = menuItems.filter(item => item.category === category);
        filteredItems.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');
            menuItemDiv.innerHTML = `
                <p>${item.name}</p>
                <span>$${item.priceUSD.toFixed(2)} - ${item.calories} kcal</span>
                <button class="add-to-cart">Add to Cart</button>
            `;
            menuItemDiv.querySelector('.add-to-cart').addEventListener('click', () => {
                addToCart(item);
            });
            menuContainer.appendChild(menuItemDiv);
        });
    }

    function addToCart(item) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        cartCount.textContent = cart.length;
        alert(`${item.name} has been added to the cart!`);
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterMenu(this.getAttribute('data-category'));
        });
    });

    // Initialize with the first category
    filterMenu('Fruit Tea');
    document.querySelector('.tab-button').classList.add('active');
    cartCount.textContent = cart.length;
});
