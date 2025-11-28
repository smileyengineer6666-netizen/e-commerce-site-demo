const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static('public'));

// Import routes
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const ordersRouter = require('./routes/orders');

// API routes
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', ordersRouter);

// Default route - serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
    // Create data directory if it doesn't exist
    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Initialize products.json if it doesn't exist
    const productsPath = path.join(dataDir, 'products.json');
    if (!fs.existsSync(productsPath)) {
        const sampleProducts = [
            {
                id: 1,
                name: "Wireless Headphones",
                price: 79.99,
                description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
            },
            {
                id: 2,
                name: "Smart Watch",
                price: 199.99,
                description: "Feature-rich smartwatch with heart rate monitoring, GPS, and fitness tracking. Compatible with iOS and Android.",
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
            },
            {
                id: 3,
                name: "Laptop Backpack",
                price: 49.99,
                description: "Durable laptop backpack with padded compartment, multiple pockets, and ergonomic design. Fits laptops up to 15.6 inches.",
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
            },
            {
                id: 4,
                name: "Wireless Mouse",
                price: 29.99,
                description: "Ergonomic wireless mouse with precision tracking and long battery life. Perfect for both office and gaming.",
                image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"
            },
            {
                id: 5,
                name: "USB-C Cable",
                price: 12.99,
                description: "Fast charging USB-C cable with data transfer speeds up to 480Mbps. 6 feet long with durable braided design.",
                image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500"
            },
            {
                id: 6,
                name: "Mechanical Keyboard",
                price: 89.99,
                description: "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for typing and gaming with customizable lighting.",
                image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500"
            }
        ];
        fs.writeFileSync(productsPath, JSON.stringify(sampleProducts, null, 2));
    }
    
    // Initialize orders.json if it doesn't exist
    const ordersPath = path.join(dataDir, 'orders.json');
    if (!fs.existsSync(ordersPath)) {
        fs.writeFileSync(ordersPath, JSON.stringify([], null, 2));
    }
});

