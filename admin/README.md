# Taste-Hub Admin Dashboard

Taste-Hub Admin Dashboard is the management interface of the Taste-Hub food delivery platform. It allows administrators to upload dish images, add new dishes, manage menu items, monitor customer orders, and update order statuses from a separate admin application.

## Overview

The admin dashboard is built to simplify operational control of the food delivery system. It gives administrators a dedicated panel to maintain the food catalog and manage the complete order workflow without affecting the customer-facing application.

This dashboard is intended for admin users who need to:

- Upload and add new dishes.
- Manage menu items.
- Update or delete existing dishes.
- View customer orders.
- Change order statuses.
- Monitor platform activity from a separate panel.

## Tech Stack

- React.js
- React Router DOM
- Axios
- CSS / Tailwind CSS *(if used)*
- Context API / Redux *(based on implementation)*

## Core Features

### Dish Management
- Upload dish images.
- Add new dishes with name, price, category, description, and image.
- Edit existing dish details.
- Delete dishes from the menu.
- Maintain the food catalog from a central dashboard.

### Order Management
- View all customer orders.
- Access order details including items, total amount, and user information.
- Update order status such as processing, out for delivery, and delivered.
- Keep the customer app synced with the latest order progress.

### Admin Operations
- Separate admin login flow.
- Protected dashboard routes.
- API-connected forms for product and order management.
- Dedicated interface for operational tasks.

## Admin Workflow

1. Admin logs in to the dashboard.
2. Admin uploads a dish image.
3. Admin enters dish details such as name, category, price, and description.
4. Admin saves the new dish.
5. The backend stores the dish data in MongoDB.
6. The new dish becomes available in the user app.
7. Admin can later update or remove dishes.
8. Admin monitors incoming orders and updates their status.

## Dashboard Responsibilities

The admin app handles:

- Rendering admin-specific pages.
- Upload form handling for new dishes.
- Validation of admin-side input.
- Calling backend APIs for food and order management.
- Displaying order lists and status controls.
- Separating operational workflows from the customer app.

## Suggested Folder Structure

```bash
admin/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── App.js
│   └── main.js / index.js
├── package.json
└── README.md
```

## Key Pages

- Admin login page
- Dashboard home
- Add dish page
- Food list management page
- Order management page

## Installation

```bash
cd admin
npm install
```

## Run the Admin Dashboard

```bash
npm start
```

## Environment Variables

Create a `.env` file in the admin folder if required:

```env
REACT_APP_API_URL=http://localhost:5000
```

## API Integration

The admin dashboard communicates with backend APIs for:

- Admin authentication
- Dish creation
- Image upload
- Food list management
- Order retrieval
- Order status updates

## Admin Highlights

- Separate operational dashboard.
- Dedicated form for uploading and adding new dishes.
- Clear menu management workflow.
- Integrated order monitoring and status updates.
- Supports day-to-day food delivery platform administration.

## Future Improvements

- Bulk dish upload.
- Category management.
- Inventory tracking.
- Dashboard analytics.
- Role-based admin permissions.
- Image preview and optimization.

## Author

**Amol Kanago**  
Full-Stack Developer | MERN Stack Developer
