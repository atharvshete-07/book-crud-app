# Book CRUD App

A modern full-stack **Book Management System** built to provide a simple, efficient, and user-friendly platform for managing book records.

The application connects a **React.js frontend** with a **Node.js + Express.js backend** and **MongoDB database**, providing a complete CRUD-based workflow for book management.

---

##  Features

-  Add new books
-  View available books
-  Update existing book details
-  Delete books
-  Store book information in MongoDB
-  REST API integration
-  Fast and responsive React interface
-  Navigation using React Router
-  Modern and responsive UI
-  Responsive design
-  API communication using Axios
-  Organized frontend and backend structure
-  MongoDB database integration

---

##  Tech Stack

### Frontend

- React.js
- React Router
- Axios
- Tailwind CSS
- React Icons
- Vite

### Backend

- Node.js
- Express.js
- REST API
- Mongoose

### Database

- MongoDB

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman

---

##  Project Architecture

```text
Book CRUD App
│
├── client/                         # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── component/
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── AddBook.jsx
│   │   │   └── About.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── axiosInstance.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                         # Node.js Backend
│   ├── controller/
│   │   └── book.controller.js
│   │
│   ├── model/
│   │   └── book.model.js
│   │
│   ├── routes/
│   │   └── book.routes.js
│   │
│   ├── app.js
│   ├── database.js
│   └── package.json
│
├── project-images/                 # Project Screenshots
│
├── .gitignore
└── README.md
