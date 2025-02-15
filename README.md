# Restaurant Management System

A RESTful API for managing restaurant operations, built using Node.js, Express.js, and MongoDB. It provides user authentication, menu management, and order management features.

## Features

### Authentication
- User registration and login using JWT-based authentication

### Menu Management
- Add, update, delete, and fetch menu items

### Order Management
- Place orders and view orders by user

### Validation
- Input validation for required fields
- Error handling for invalid data

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas or local)
- **Authentication**: JWT
- **Schema Management**: Mongoose

## Installation and Setup

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   
   Create a `.env` file in the root directory and configure the following:
   ```
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```
   Replace `your_mongo_connection_string` with your MongoDB connection string and `your_jwt_secret` with a secure key.

4. **Run the Server**
   ```bash
   npm start
   ```
   The server will start on `http://localhost:5000` by default.

## API Endpoints

### Authentication

#### Register a User
```http
POST /api/auth/register
```
**Request Body:**
```json
{
  "username": "test@gmail.com",
  "password": "testpassword"
}
```
**Response:**
```json
{
  "message": "User registered successfully"
}
```

#### Login a User
```http
POST /api/auth/login
```
**Request Body:**
```json
{
  "username": "test@gmail.com",
  "password": "testpassword"
}
```
**Response:**
```json
{
  "token": "your_jwt_token"
}
```

### Menu Management

#### Fetch All Menu Items
```http
GET /api/menu
```
**Response:**
```json
[
  {
    "_id": "menu_item_id",
    "name": "Pizza",
    "category": "Main Course",
    "price": 12.99,
    "availability": true
  }
]
```

#### Add a Menu Item
```http
POST /api/menu/add
```
**Request Body:**
```json
{
  "name": "Pizza",
  "category": "Main Course",
  "price": 12.99,
  "availability": true
}
```
**Response:**
```json
{
  "message": "Menu item added successfully"
}
```

#### Update a Menu Item
```http
PUT /api/menu/update/:id
```
**Request Body:**
```json
{
  "price": 14.99
}
```
**Response:**
```json
{
  "message": "Menu item updated successfully"
}
```

#### Delete a Menu Item
```http
DELETE /api/menu/delete/:id
```
**Response:**
```json
{
  "message": "Menu item deleted successfully"
}
```

### Order Management

#### Place an Order
```http
POST /api/order
```
**Request Body:**
```json
{
  "items": [
    {
      "menuItem": "menu_item_id",
      "quantity": 2
    }
  ]
}
```
**Response:**
```json
{
  "message": "Order placed successfully",
  "order": {
    "_id": "order_id",
    "totalAmount": 25.98
  }
}
```

#### Fetch Orders for Logged-in User
```http
GET /api/orders
```
**Response:**
```json
[
  {
    "_id": "order_id",
    "items": [
      {
        "menuItem": {
          "name": "Pizza",
          "price": 12.99
        },
        "quantity": 2
      }
    ],
    "totalAmount": 25.98
  }
]
```

## Project Structure

```
project/
├── models/
│   ├── User.js        # User model
│   ├── Menu.js        # Menu model
│   └── Order.js       # Order model
├── routes/
│   ├── auth.js        # Authentication routes
│   ├── menu.js        # Menu routes
│   └── order.js       # Order routes
├── controllers/
│   ├── authController.js  # Authentication logic
│   ├── menuController.js  # Menu management logic
│   └── orderController.js # Order management logic
├── app.js             # Main app setup
├── server.js          # Server entry point
├── package.json       # Dependencies and scripts
└── .env               # Environment variables
```

## Validation & Error Handling

### Validation
- Ensure all required fields are present in the request
- Reject invalid data with meaningful error messages

### Error Handling
- Gracefully handle server errors with proper status codes
- Return 404 if requested resources (e.g., menu item, order) are not found

## Future Enhancements

- Add role-based access for admin users to manage the menu
- Include real-time order tracking
- Implement unit and integration tests

## License

This project is licensed under the MIT License.

Feel free to contribute and create pull requests! 🎉
