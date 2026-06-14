# EduShare

EduShare is a full-stack web application for discovering and sharing educational resources. It provides account-based access, lets authenticated users publish useful links, and presents community submissions in a clean, responsive interface.

The project supports the spirit of **UN Sustainable Development Goal 4: Quality Education** by making learning material easier to share.

## Features

- Register and log in with a username and password
- JWT-based authentication
- Password hashing with bcrypt
- Share resources with a title, description, and URL
- Browse resources ordered from newest to oldest
- See the username of each resource contributor
- Responsive dark interface built with Tailwind CSS
- Interactive WebGL background powered by OGL

## Tech Stack

**Frontend**

- React 18
- Vite
- Tailwind CSS
- OGL

**Backend**

- Node.js
- Express
- MongoDB and Mongoose
- JSON Web Tokens
- bcrypt.js

## Project Structure

```text
EduShare/
|-- backend/
|   |-- controllers/
|   |-- middleware/
|   |-- models/
|   |-- routes/
|   |-- server.js
|   `-- package.json
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |-- App.jsx
|   |   `-- main.jsx
|   |-- vite.config.js
|   `-- package.json
`-- Readme.md
```

## Prerequisites

Install the following before running the project:

- [Node.js](https://nodejs.org/) 18 or later
- npm
- A local MongoDB server or a [MongoDB Atlas](https://www.mongodb.com/atlas) connection string

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DeepakSingh-0405/EduShare.git
cd EduShare
```

### 2. Configure the backend

Create `backend/.env`:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/edushare
JWT_SECRET=replace_with_a_long_random_secret
PORT=5000
```

`MONGODB_URI` is required. `PORT` defaults to `5000`, which is also the API address currently used by the frontend.

Install the backend dependencies:

```bash
cd backend
npm install
```

### 3. Configure the frontend

In a second terminal, install the frontend dependencies:

```bash
cd frontend
npm install
```

### 4. Start the application

Run the backend:

```bash
cd backend
npm run dev
```

Run the frontend in another terminal:

```bash
cd frontend
npm run dev
```

Open the URL printed by Vite, normally [http://localhost:5173](http://localhost:5173).

## Available Scripts

### Backend

| Command | Description |
| --- | --- |
| `npm run dev` | Start the API with Nodemon |
| `npm start` | Start the API with Node.js |

### Frontend

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |

## API Endpoints

The API base URL is `http://localhost:5000/api`.

| Method | Endpoint | Authentication | Description |
| --- | --- | --- | --- |
| `POST` | `/auth/register` | No | Create an account |
| `POST` | `/auth/login` | No | Log in and receive a JWT |
| `GET` | `/resources` | No | Retrieve all resources |
| `POST` | `/resources` | Bearer token | Create a resource |

Example resource request:

```json
{
  "title": "Introduction to React",
  "description": "A beginner-friendly guide to React fundamentals.",
  "url": "https://react.dev/learn"
}
```

For protected requests, send the token in the authorization header:

```http
Authorization: Bearer <token>
```

## Production Notes

- Replace `JWT_SECRET` with a strong secret and never commit it.
- Restrict the backend CORS policy before deploying publicly.
- Update the frontend API URLs when the backend is hosted somewhere other than `localhost:5000`.
- Validate and sanitize submitted resource URLs for a production deployment.
