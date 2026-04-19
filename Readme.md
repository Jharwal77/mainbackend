# 🚀 Backend – Social Media Platform (YouTube + Twitter Clone)

This is the backend API for a full-stack social media platform inspired by YouTube and Twitter. It handles authentication, video management, tweets, likes, subscriptions, and user interactions.

Built using Node.js, Express, and MongoDB, the backend follows a clean and scalable MVC architecture.

---

## 🚀 Features

* 🔐 JWT Authentication (Access + Refresh Tokens)
* 👤 User Management (Register, Login, Profile)
* 🎥 Video APIs (Upload, Watch, Manage)
* 🐦 Tweet APIs (Create, Fetch, Delete)
* ❤️ Like System
* 📺 Subscription System
* 📝 Comment System
* ☁️ Cloudinary Integration (Media Uploads)
* ⚙️ Centralized Error Handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication)
* Cloudinary (Media Storage)

---

## 📁 Project Structure

```id="r8kq3k"
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

## 🔗 API Overview

### Auth

* `POST /api/v1/users/register`
* `POST /api/v1/users/login`

### Videos

* `GET /api/v1/videos`
* `POST /api/v1/videos`

### Tweets

* `GET /api/v1/tweets`
* `POST /api/v1/tweets`

### Likes / Comments / Subscriptions

* REST APIs for interaction features

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```id="t0c5w4"
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

## ⚙️ Setup Instructions

### 1. Clone repository

```id="d7jwdx"
git clone https://github.com/your-username/your-backend-repo.git
cd your-backend-repo
```

### 2. Install dependencies

```id="u7u4j6"
npm install
```

### 3. Run server

```id="r7m7mk"
npm run dev
```

Server runs on:

```id="7zcfzq"
http://localhost:8000
```

---

## 🔐 Authentication Flow

* Access Token → short-lived
* Refresh Token → long-lived
* Stored in cookies or headers

---

## 🌐 Deployment

* Backend: Render
* Database: MongoDB Atlas
* Media: Cloudinary

---

## 📌 Notes

* Add MongoDB Atlas IP: `0.0.0.0/0`
* Do not commit `.env`
* Ensure proper CORS setup for frontend

---

## 🚀 Future Improvements

* 🔔 Notifications system
* 📊 Analytics dashboard
* 🔍 Advanced search
* 🧠 Recommendation engine

---

## 👨‍💻 Author

Rahul Jharwal
Full Stack Developer (MERN)

---

## ⭐ Contributing

Pull requests are welcome. For major changes, open an issue first.

---

## 📜 License

This project is licensed under the MIT License.
# 🚀 Backend – Social Media Platform (YouTube + Twitter Clone)

This is the backend API for a full-stack social media platform inspired by YouTube and Twitter. It handles authentication, video management, tweets, likes, subscriptions, and user interactions.

Built using Node.js, Express, and MongoDB, the backend follows a clean and scalable MVC architecture.

---

## 🚀 Features

* 🔐 JWT Authentication (Access + Refresh Tokens)
* 👤 User Management (Register, Login, Profile)
* 🎥 Video APIs (Upload, Watch, Manage)
* 🐦 Tweet APIs (Create, Fetch, Delete)
* ❤️ Like System
* 📺 Subscription System
* 📝 Comment System
* ☁️ Cloudinary Integration (Media Uploads)
* ⚙️ Centralized Error Handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication)
* Cloudinary (Media Storage)

---

## 📁 Project Structure

```id="r8kq3k"
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

## 🔗 API Overview

### Auth

* `POST /api/v1/users/register`
* `POST /api/v1/users/login`

### Videos

* `GET /api/v1/videos`
* `POST /api/v1/videos`

### Tweets

* `GET /api/v1/tweets`
* `POST /api/v1/tweets`

### Likes / Comments / Subscriptions

* REST APIs for interaction features

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```id="t0c5w4"
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

## ⚙️ Setup Instructions

### 1. Clone repository

```id="d7jwdx"
git clone https://github.com/your-username/your-backend-repo.git
cd your-backend-repo
```

### 2. Install dependencies

```id="u7u4j6"
npm install
```

### 3. Run server

```id="r7m7mk"
npm run dev
```

Server runs on:

```id="7zcfzq"
http://localhost:8000
```

---

## 🔐 Authentication Flow

* Access Token → short-lived
* Refresh Token → long-lived
* Stored in cookies or headers

---

## 🌐 Deployment

* Backend: Render
* Database: MongoDB Atlas
* Media: Cloudinary

---

## 📌 Notes

* Add MongoDB Atlas IP: `0.0.0.0/0`
* Do not commit `.env`
* Ensure proper CORS setup for frontend

---

## 🚀 Future Improvements

* 🔔 Notifications system
* 📊 Analytics dashboard
* 🔍 Advanced search
* 🧠 Recommendation engine

---

## 👨‍💻 Author

Rahul Jharwal
Full Stack Developer (MERN)

---

## ⭐ Contributing

Pull requests are welcome. For major changes, open an issue first.

---

## 📜 License

This project is licensed under the MIT License.
