# OnlineShop Frontend

A frontend e-commerce web application developed as part of a **JavaScript Project** course. This project provides a user interface for an online shopping system and communicates with the backend through REST APIs.

## Features

* Product listing
* Product details
* Product search
* Category and brand filtering
* Shopping cart
* User authentication
* Session management
* Backend API integration

## Tech Stack

* JavaScript (ES6)
* Node.js
* Express.js
* Axios
* HTML5
* CSS3
* Bootstrap

## Installation

Clone the repository:

```bash
git clone https://github.com/NattiiZ/OnlineShop-frontend_jsProj.git
cd OnlineShop-frontend_jsProj
```

Install dependencies:

```bash
npm install
```

## Environment Configuration

Create a `.env` file in the project root directory.

Example:

```env
HOST_PORT=8000
API_PORT=5000

SECRET_KEY="28062806"
```

### Environment Variables

| Variable   | Description                       | Default |
| ---------- | --------------------------------- | ------- |
| HOST_PORT  | Frontend server port              | 8000    |
| API_PORT   | Backend API port                  | 5000    |
| SECRET_KEY | Secret key for session management | -       |

You can modify these values according to your environment.

## Run Application

Start the frontend server:

```bash
npm start
```

The application will be available at:

```text
http://localhost:8000
```

Make sure the backend API server is running on the configured `API_PORT`.

## Project Structure

```text
├── controllers/
├── routes/
├── views/
├── public/
├── middleware/
├── app.js
├── package.json
└── .env
```

## Purpose

This project was developed for the **JavaScript Project** course to practice frontend development, API integration, user authentication, and building a complete e-commerce web application.

## Author

**Nattawut Prasong**
