# MERN Auth Backend 🔐

This is the **backend** for a MERN stack authentication system, built with **Node.js**, **Express**, and **MongoDB**. It handles user registration, login, email verification (OTP-based), and protected routes.

---

## 📂 Project Structure
server_backend/
├── config/
│   ├── emailTemplates.js      # Email templates for communication
│   ├── mongodb.js             # MongoDB connection setup
│   └── nodeMailer.js          # NodeMailer configuration
│
├── controllers/
│   ├── authController.js      # Handles authentication logic
│   └── userController.js      # Handles user-related operations
│
├── middleware/
│   └── userAuthMiddleware.js  # Middleware for user authentication
│
├── models/
│   └── userModel.js           # Mongoose schema for User
│
├── routes/
│   ├── authRoutes.js          # Authentication-related routes
│   └── userRoutes.js          # User-related routes
│
├── .env                       # Environment variables
├── .gitignore                 # Files/folders to ignore in Git
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Dependency lock file
├── server.js                  # Entry point of the backend server
└── README.md                  # Project documentation


---

## 🚀 Features

- ✅ User registration & login
- ✅ OTP email verification
- ✅ JWT-based authentication
- ✅ Protected routes
- ✅ Error handling & validations
- ✅ MongoDB database integration

---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **JWT**
- **Nodemailer** (for email OTP)
- **dotenv**
- **bcryptjs**

---

## 🔧 Setup & Run Locally

1. **Clone the repo**
```bash
git clone https://github.com/your-username/mern-auth-backend.git
cd mern-auth-backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_key

# Start the server
npm start

