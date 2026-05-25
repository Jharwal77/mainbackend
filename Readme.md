# 🚀 Backend – Social Media Platform (YouTube + Twitter Clone)

A production-style backend API for a full-stack social media platform inspired by platforms like YouTube and Twitter.

The system handles authentication, media uploads, video management, tweets, likes, subscriptions, comments, and scalable user interactions using REST APIs.

Built using Node.js, Express.js, MongoDB, and Cloudinary, the backend follows a clean MVC architecture with reusable utilities, middleware abstraction, centralized error handling, and JWT-based authentication.

---

## 🌐 Live Frontend

### Frontend Application

[https://viewtube-six.vercel.app/](https://viewtube-six.vercel.app/)

### GitHub Repository

[https://github.com/Jharwal77/mainbackend](https://github.com/Jharwal77/mainbackend)

---

# ✨ Features

## 🔐 Authentication & Authorization

* JWT Authentication
* Access Token + Refresh Token Flow
* Secure Login & Registration
* Protected Routes Middleware
* Cookie/Header Token Support

## 👤 User Management

* User Registration
* User Login
* User Profile APIs
* Avatar & Cover Image Uploads
* Channel Information

## 🎥 Video Management System

* Upload Videos
* Fetch Videos
* Watch Video API
* Delete Videos
* Video Metadata Management
* Thumbnail Upload Support

## 🐦 Tweet System

* Create Tweets
* Fetch Tweets
* Delete Tweets
* User Tweet Feed

## ❤️ Social Interaction Features

* Like System
* Comment System
* Subscription System
* User Interaction APIs

## ☁️ Media Upload Handling

* Cloudinary Integration
* Image Upload Support
* Video Upload Support
* Multer Middleware

## ⚙️ Backend Engineering Features

* Centralized Error Handling
* Async Error Wrapper
* Reusable API Response Structure
* Modular MVC Architecture
* Environment-Based Configuration

---

# 🛠️ Tech Stack

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication

* JWT (JSON Web Tokens)

## Media Storage

* Cloudinary

## File Upload Handling

* Multer

---

# 📁 Project Structure

```bash
src/
│
├── controllers/          # Business logic
│   ├── user.controller.js
│   ├── video.controller.js
│   ├── tweet.controller.js
│   └── ...
│
├── models/               # Mongoose schemas
│   ├── user.models.js
│   ├── video.models.js
│   └── ...
│
├── routes/               # API routes
│   ├── user.routes.js
│   ├── video.routes.js
│   └── ...
│
├── middlewares/          # Custom middlewares
│   ├── auth.middleware.js
│   ├── multer.middleware.js
│
├── db/                   # Database connection
│   └── index.js
│
├── utils/                # Utility functions
│   ├── ApiError.js
│   ├── ApiResponse.js
│   ├── asyncHandler.js
│   └── cloudinary.js
│
├── app.js                # Express app setup
├── index.js              # Server entry point
└── constants.js
```

---

# 🔗 API Overview

## Authentication APIs

| Method | Route                         | Description          |
| ------ | ----------------------------- | -------------------- |
| POST   | `/api/v1/users/register`      | Register new user    |
| POST   | `/api/v1/users/login`         | User login           |
| POST   | `/api/v1/users/logout`        | Logout user          |
| POST   | `/api/v1/users/refresh-token` | Refresh access token |

---

## Video APIs

| Method | Route                | Description      |
| ------ | -------------------- | ---------------- |
| GET    | `/api/v1/videos`     | Fetch all videos |
| POST   | `/api/v1/videos`     | Upload new video |
| GET    | `/api/v1/videos/:id` | Get single video |
| DELETE | `/api/v1/videos/:id` | Delete video     |

---

## Tweet APIs

| Method | Route                | Description  |
| ------ | -------------------- | ------------ |
| GET    | `/api/v1/tweets`     | Fetch tweets |
| POST   | `/api/v1/tweets`     | Create tweet |
| DELETE | `/api/v1/tweets/:id` | Delete tweet |

---

## Social Interaction APIs

* Likes APIs
* Comments APIs
* Subscription APIs
* Channel APIs
* User Feed APIs

---

# 🔐 Authentication Flow

The application uses JWT-based authentication.

## Access Token

* Short-lived token
* Used for protected API requests

## Refresh Token

* Long-lived token
* Used to regenerate access tokens

## Security Features

* Token verification middleware
* Protected routes
* Cookie/header support
* Secure environment variable management

---

# ☁️ Cloudinary Media Upload Flow

## Upload Process

1. User uploads media
2. Multer handles multipart form data
3. File uploaded to Cloudinary
4. Media URL stored in MongoDB
5. Response returned to frontend

Supported uploads:

* Video files
* Images
* Thumbnails
* Avatars

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=8000
CORS_ORIGIN=http://localhost:5173

MONGODB_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_secret
REFRESH_TOKEN_EXPIRY=7d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

# 🚀 Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/Jharwal77/mainbackend
cd mainbackend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Environment Variables

Create a `.env` file and add all required environment variables.

---

## 4. Start Development Server

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:8000
```

---

# 🗄️ Database Design

## Main Collections

| Collection    | Purpose                |
| ------------- | ---------------------- |
| Users         | Stores user data       |
| Videos        | Stores uploaded videos |
| Tweets        | Stores tweets/posts    |
| Comments      | Stores comments        |
| Likes         | Stores likes data      |
| Subscriptions | Stores subscriptions   |

---

# ⚡ Backend Architecture Highlights

## MVC Architecture

The project follows a clean MVC architecture for scalability and maintainability.

## Middleware-Based Design

Reusable middlewares for:

* authentication
* file uploads
* error handling
* async request handling

## Scalable API Structure

* modular routes
* reusable utilities
* centralized response handling
* organized folder structure

---

# 🌍 Deployment

## Frontend

* Vercel

## Backend

* Render

## Database

* MongoDB Atlas

## Media Storage

* Cloudinary

---

# 📌 Important Notes

* Do not commit `.env` files
* Configure proper CORS settings
* Add MongoDB Atlas IP whitelist (`0.0.0.0/0` for development)
* Store secrets securely

---

# 🚀 Future Improvements

Potential future enhancements:

* 🔔 Notifications System
* 📊 Analytics Dashboard
* 🔍 Advanced Search
* 🧠 Recommendation Engine
* 💬 Real-Time Chat
* 📡 WebSocket Integration
* 🧾 Watch History Tracking
* 🎯 Video Recommendation Algorithm
* 🛡️ Rate Limiting & Security Hardening

---

# 👨‍💻 Author

Rahul Meena
Full Stack Developer (MERN)

---

# ⭐ Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss proposed updates.


