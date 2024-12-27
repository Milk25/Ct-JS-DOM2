// Task 1: Array of products
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Function to display products
function displayProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(product => `
        <div class="product">
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        </div>
    `).join('');
}

// Task 3: Event listener for page load
window.addEventListener('load', displayProducts);
