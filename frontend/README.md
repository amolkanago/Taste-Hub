# Taste-Hub Frontend

Taste-Hub Frontend is the customer-facing application of the Taste-Hub food delivery platform. It allows users to explore food items, filter menus, manage carts, authenticate securely, place orders, and complete payments through a smooth and responsive ordering experience.

## Overview

The frontend is built to deliver a simple and user-friendly food ordering journey. It focuses on product discovery, category-based filtering, cart operations, user authentication, checkout, and order tracking.

This application is intended for end users who want to:

- Create an account and log in.
- Browse food items.
- Filter menu items by category.
- Add products to the cart.
- Place food orders.
- Make online payments.
- Track order status.

## Tech Stack

- React.js
- React Router DOM
- Fetch API
- Context API / Redux *(based on implementation)*
- CSS / Tailwind CSS *(if used)*
- Stripe integration for checkout

## Core Features

### Authentication
- User signup and login.
- Secure authentication flow with token-based access.
- Protected routes for order-related actions.

### Food Browsing
- Display all available food items.
- Category-based food filtering.
- Product cards with image, name, price, and description.

### Cart Management
- Add items to cart.
- Remove items from cart.
- Update cart quantities.
- View total order amount before checkout.

### Order Placement
- Checkout flow for confirming orders.
- Integration with Stripe payment gateway.
- Order submission after successful payment.

### Order Tracking
- View placed orders.
- Check current order status.
- Get updates based on admin order handling.

## User Flow

1. User signs up or logs in.
2. User browses the available food menu.
3. User filters items based on preference.
4. User adds selected items to the cart.
5. User reviews cart details.
6. User proceeds to checkout.
7. User completes payment using Stripe.
8. User places the order successfully.
9. User tracks order status from the application.

## Frontend Responsibilities

The frontend handles:

- Rendering the customer UI.
- Managing route navigation.
- Calling backend APIs.
- Handling authentication state.
- Managing cart state.
- Triggering checkout and payment flow.
- Displaying order and status information.

## Suggested Folder Structure

```bash
client/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── context/            # or redux/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   └── main.js / index.js
├── package.json
└── README.md
```

## Key Pages

- Home page
- Menu / Food listing page
- Cart page
- Login page
- Register page
- Checkout page
- My Orders page

## Installation

```bash
cd client
npm install
```

## Run the Frontend

```bash
npm start
```

## Environment Variables

Create a `.env` file in the client folder if needed:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## API Integration

The frontend communicates with backend APIs for:

- Authentication
- Food item listing
- Cart operations
- Order placement
- Payment processing
- Order history and status tracking

## Frontend Highlights

- Responsive food ordering interface.
- Clean user journey from browsing to payment.
- Reusable React component architecture.
- API-driven dynamic data rendering.
- Separate experience focused only on customers.

## Future Improvements

- Search and sort functionality.
- Wishlist or favorites.
- Address management.
- Coupon code support.
- Better order tracking UI.
- Notification support.

## Author

**Amol Kanago**  
Full-Stack Developer | MERN Stack Developer
