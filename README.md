# E-Commerce Site

A basic e-commerce website built with Express.js backend and vanilla HTML/CSS/JavaScript frontend.

## Features

- **Product Listings**: Browse all available products in a responsive grid layout
- **Product Details**: View detailed information about each product
- **Shopping Cart**: Add, update, and remove items from your cart
- **Order Processing**: Complete checkout with customer information and place orders
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: HTML, CSS, JavaScript (vanilla)
- **Data Storage**: JSON files (products.json, orders.json)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000`

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
ecommerce/
├── server.js              # Main Express server
├── package.json           # Node.js dependencies
├── routes/                # API routes
│   ├── products.js        # Product endpoints
│   ├── cart.js            # Cart validation endpoints
│   └── orders.js          # Order processing endpoints
├── data/                  # Data storage
│   ├── products.json      # Product database
│   └── orders.json        # Order history
└── public/                # Frontend files
    ├── index.html         # Product listings page
    ├── product.html       # Product details page
    ├── cart.html          # Shopping cart page
    ├── styles.css         # Main stylesheet
    ├── script.js          # Product listings logic
    ├── product.js         # Product details logic
    └── cart.js            # Cart and checkout logic
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

### Cart (Validation)
- `POST /api/cart/add` - Validate adding item to cart
- `PUT /api/cart/update` - Validate cart update
- `DELETE /api/cart/remove` - Validate cart item removal

### Orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Get order by ID

## Usage

1. **Browse Products**: View all available products on the home page
2. **View Details**: Click on a product card or "View Details" button to see more information
3. **Add to Cart**: Add products to your cart with desired quantities
4. **Manage Cart**: Update quantities or remove items from the cart page
5. **Checkout**: Fill out the checkout form with your information and place an order
6. **Order Confirmation**: Receive confirmation with your order ID

## Cart Storage

The shopping cart is stored in the browser's localStorage, so it persists across page refreshes but is client-specific.

## Data

- Products are stored in `data/products.json`
- Orders are stored in `data/orders.json`

You can modify `data/products.json` to add, remove, or update products.

## License

ISC

