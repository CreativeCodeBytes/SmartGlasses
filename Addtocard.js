// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Sample cart items data
    const cartItems = [
        {
            id: 1,
            name: 'Designer Sunglasses',
            price: 5000,
            discount: 5,
            image: 'designer.jpeg'
        
        },
        {
            id: 2,
            name: 'Blue Light Blocking Glasses',
            price: 2000,
            discount: 5,
            image: 'bluelight.jpeg'
        
        }
    ];

    // Get DOM elements
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const discountElement = document.getElementById('discount');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Function to render cart items
    function renderCartItems() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            const discountedPrice = item.price - (item.price * item.discount / 100);
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">Rs. ${item.price.toFixed(2)}</div>
                    <div class="item-discount">Discount: ${item.discount}% - You save Rs. ${(item.price * item.discount / 100).toFixed(2)}</div>
                </div>
                <div class="item-actions">
                    <button class="action-btn remove-btn" data-id="${item.id}">Remove</button>
                    <button class="action-btn repeat-btn" data-id="${item.id}">Repeat</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
        updateCartSummary();
    }

    // Function to update cart summary
    function updateCartSummary() {
        const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
        const discount = cartItems.reduce((sum, item) => sum + (item.price * item.discount / 100), 0);
        const total = subtotal - discount;

        subtotalElement.textContent = subtotal.toFixed(2);
        discountElement.textContent = discount.toFixed(2);
        totalElement.textContent = total.toFixed(2);
        
    }

    // Function to remove an item from the cart
    function removeItem(id) {
        const index = cartItems.findIndex(item => item.id === id);
        if (index !== -1) {
            cartItems.splice(index, 1);
            renderCartItems();
        }
    }

    // Function to repeat (duplicate) an item in the cart
    function repeatItem(id) {
        const item = cartItems.find(item => item.id === id);
        if (item) {
            cartItems.push({...item, id: Date.now()});
            renderCartItems();
        }
    }

    // Event listener for remove and repeat buttons
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-btn')) {
            removeItem(Number(e.target.dataset.id));
        } else if (e.target.classList.contains('repeat-btn')) {
            repeatItem(Number(e.target.dataset.id));
        }
    });

    // Event listener for checkout button
    checkoutBtn.addEventListener('click', () => {
        //alert('Proceeding to checkout...');
        window.location.href = 'billing.html'; 
        // Add your checkout logic here
        console.log('Checkout clicked. Cart items:', cartItems);
    });

    // Initial render of cart items
    renderCartItems();
});

// Simulate the script running in a browser environment
console.log('Cart functionality initialized. Open the HTML file in a browser to see the full functionality.');