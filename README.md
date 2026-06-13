# Taste-Hub

Taste-Hub is a full-stack **food delivery** web application built with the MERN stack. It includes a customer-facing food ordering app, a separate admin dashboard, secure authentication, cart management, online payments with Stripe, and order status management for a complete end-to-end delivery workflow.

## Project Overview

This project is designed to deliver a complete food ordering experience where users can browse meals, filter food items, add products to a cart, create an account, log in securely, place orders, and pay online. It also includes an admin panel for managing food items, monitoring orders, and updating delivery status.

The application is divided into three main parts:

- **Frontend User App** for browsing, filtering, adding items to cart, and placing orders.
- **Admin Dashboard** for managing products, orders, and order status updates.
- **Backend Server** for authentication, APIs, database operations, and Stripe payment integration.

## Tech Stack

### Frontend
- React.js
- CSS / Tailwind CSS *(optional, if used in your project)*
- Axios
- React Router DOM
- Context API / Redux *(based on your implementation)*

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js

### Payment Integration
- Stripe Payment Gateway

### Other Tools
- dotenv
- multer *(if image upload is implemented)*
- validator
- cors

## Features

### User App
- User registration and login authentication.
- Secure account creation and login flow using JWT.
- Browse available food items.
- Filter food items by categories.
- View food details including image, name, price, and description.
- Add and remove items from the shopping cart.
- Place food orders through a simple checkout flow.
- Make secure online payments using Stripe.
- Track placed orders and view current order status.

### Admin Dashboard
- Separate admin login/dashboard.
- Add new food products.
- Update existing food items.
- Delete food items.
- View all customer orders.
- Update order statuses such as processing, out for delivery, and delivered.
- Manage application data from a dedicated admin panel.

### Backend Capabilities
- RESTful API architecture.
- Authentication and authorization.
- Cart and order management APIs.
- Payment processing with Stripe.
- MongoDB database integration.
- Centralized server-side business logic.

## Authentication Flow

Taste-Hub includes a complete user authentication system that allows users to create an account and log in to access ordering features. Protected routes help ensure that only authenticated users can place orders, manage carts, and view their personal order details.

## Payment Workflow

Stripe is integrated to support secure online payments during checkout. Once payment is completed successfully, the order is created and stored in the database, allowing both users and administrators to track the order lifecycle.

## Food Ordering Workflow

1. User signs up or logs in.
2. User browses and filters food items.
3. User adds selected food items to the cart.
4. User proceeds to checkout.
5. User pays online using Stripe.
6. Order is placed successfully.
7. Admin receives and manages the order.
8. Admin updates the order status.
9. User can track the latest order progress.

## Folder Structure

```bash
Taste-Hub/
├── client/          # User frontend application
├── admin/           # Admin dashboard frontend
├── server/          # Node.js + Express backend
├── package.json
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/taste-hub.git
cd taste-hub
```

### 2. Install dependencies

For client:

```bash
cd client
npm install
```

For admin panel:

```bash
cd ../admin
npm install
```

For server:

```bash
cd ../server
npm install
```

## Environment Variables

Create a `.env` file inside the server directory and configure the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:3000
ADMIN_URL=http://localhost:3001
```

## Run the Project

### Start backend server

```bash
cd server
npm run server
```

### Start user frontend

```bash
cd client
npm start
```

### Start admin dashboard

```bash
cd admin
npm start
```

## API Modules

The backend can include the following major API modules:

- **Auth API** – user registration, login, token handling.
- **Food API** – add, fetch, update, delete food items.
- **Cart API** – manage cart operations.
- **Order API** – place order, fetch orders, update order status.
- **Payment API** – Stripe checkout and payment confirmation.

## Use Cases

- Customers can order food online from a responsive web interface.
- Admins can manage menu items and customer orders from a separate dashboard.
- The platform supports real-time style order progress handling through status updates.
- The project demonstrates full-stack development with authentication, database integration, API handling, and payment gateway integration.

## Learning Highlights

This project demonstrates practical experience with:

- Building full-stack MERN applications.
- Creating reusable React components.
- Developing REST APIs with Express.js.
- Managing MongoDB collections and schemas.
- Implementing authentication and authorization.
- Integrating Stripe for payment handling.
- Building separate user and admin interfaces.
- Handling complete order lifecycle management.

## Future Enhancements

- Search functionality for food items.
- Coupon and discount support.
- Address management system.
- Order history and invoice downloads.
- Admin analytics dashboard.
- Email notifications for order updates.
- Role-based access control.
- Deployment with Docker and cloud hosting.

## README Customization Tips

You can further improve this README by adding:

- Project screenshots.
- Live demo link.
- Admin login demo credentials.
- API endpoint documentation.
- Deployment links for frontend, admin, and backend.

## Author

**Amol Kanago**  
Full-Stack Developer | MERN Stack Developer
