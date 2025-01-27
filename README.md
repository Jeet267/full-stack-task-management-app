
This is a RESTful API for a restaurant management system built using Node.js, Express.js, and MongoDB. It provides functionality for user authentication, menu management, and order management.

Features
Authentication:
Register users and login with JWT-based authentication.
Menu Management:
Add, update, delete, and fetch menu items.
Order Management:
Place orders and view orders by user.
Validation:
Input validation for required fields and error handling for invalid data.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Atlas or local)
Authentication: JWT
Schema Management: Mongoose
Installation and Setup
Prerequisites
Node.js (v16+ recommended)
MongoDB Atlas account or local MongoDB instance
npm or yarn package manager
Steps
Clone the Repository:

bash
Copy
Edit
git clone https://github.com/your-repo-name.git
cd your-repo-name
Install Dependencies:

bash
Copy
Edit
npm install
Set Up Environment Variables: Create a .env file in the root directory and add the following:

makefile
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
Replace your_mongo_connection_string with your MongoDB Atlas URI or local MongoDB URI, and your_jwt_secret with a secure key.

Run the Server:

bash
Copy
Edit
npm start
The server will start on http://localhost:5000 by default.

API Endpoints
Authentication
Register a User
POST /api/auth/register
Request Body:

json
Copy
Edit
{
  "username": "test@gmail.com",
  "password": "testpassword"
}
Response:

json
Copy
Edit
{ "message": "User registered successfully" }
Login a User
POST /api/auth/login
Request Body:

json
Copy
Edit
{
  "username": "test@gmail.com",
  "password": "testpassword"
}
Response:

json
Copy
Edit
{ "token": "your_jwt_token" }
Menu Management
Fetch All Menu Items
GET /api/menu
Response:

json
Copy
Edit
[
  {
    "_id": "menu_item_id",
    "name": "Pizza",
    "category": "Main Course",
    "price": 12.99,
    "availability": true
  }
]
Add a Menu Item
POST /api/menu/add
Request Body:

json
Copy
Edit
{
  "name": "Pizza",
  "category": "Main Course",
  "price": 12.99,
  "availability": true
}
Response:

json
Copy
Edit
{ "message": "Menu item added successfully" }
Update a Menu Item
PUT /api/menu/update/:id
Request Body:

json
Copy
Edit
{
  "price": 14.99
}
Response:

json
Copy
Edit
{ "message": "Menu item updated successfully" }
Delete a Menu Item
DELETE /api/menu/delete/:id
Response:

json
Copy
Edit
{ "message": "Menu item deleted successfully" }
Order Management
Place an Order
POST /api/order
Request Body:

json
Copy
Edit
{
  "items": [
    { "menuItem": "menu_item_id", "quantity": 2 }
  ]
}
Response:

json
Copy
Edit
{
  "message": "Order placed successfully",
  "order": {
    "_id": "order_id",
    "totalAmount": 25.98
  }
}
Fetch Orders for Logged-in User
GET /api/orders
Response:

json
Copy
Edit
[
  {
    "_id": "order_id",
    "items": [
      { "menuItem": { "name": "Pizza", "price": 12.99 }, "quantity": 2 }
    ],
    "totalAmount": 25.98
  }
]
Project Structure
bash
Copy
Edit
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
Validation & Error Handling
Validation:
Ensure all required fields are present in the request.
Reject invalid data with meaningful error messages.
Error Handling:
Gracefully handle server errors with proper status codes.
Return 404 if requested resources (e.g., menu item, order) are not found.
Future Enhancements
Add role-based access for admin users to manage the menu.
Include real-time order tracking.
Implement unit and integration tests.
License
This project is licensed under the MIT License.

Feel free to contribute and create pull requests! 🎉
