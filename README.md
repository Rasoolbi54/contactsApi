# Contacts API

This is a Node.js-based REST API for managing contacts. It allows users to create, read, update, and delete contact information. The API uses MongoDB as the database and includes authentication and authorization features.

---

## Features

- **Create Contact**: Add a new contact to the database.
- **Get All Contacts**: Retrieve a list of all contacts.
- **Get Single Contact**: Retrieve a specific contact by ID.
- **Update Contact**: Update details of an existing contact.
- **Delete Contact**: Remove a contact from the database.
- **User Authentication**: Secure routes using JWT-based authentication.

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing contact data.
- **Mongoose**: ODM library for MongoDB.
- **JWT**: JSON Web Token for authentication.
- **bcrypt**: For password hashing.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/contacts-api.git
   cd contacts-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   CONNECTION_STRING=your_mongodb_connection_string
   ACCESS_TOKEN_SECRET=your_jwt_secret_key
   ```

4. Start the server:
   ```bash
   npm start
   ```

The API will run on `http://localhost:5000` by default.

---

## API Endpoints

### **Authentication**

#### Register User
- **POST** `/api/users/register`
- Request Body:
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- Response:
  ```json
  {
    "_id": "string",
    "email": "string"
  }
  ```

#### Login User
- **POST** `/api/users/login`
- Request Body:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- Response:
  ```json
  {
    "token": "string"
  }
  ```

### **Contacts**

#### Get All Contacts
- **GET** `/api/contacts`
- Headers:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- Response:
  ```json
  [
    {
      "_id": "string",
      "name": "string",
      "email": "string",
      "phone": "string"
    }
  ]
  ```

#### Get Single Contact
- **GET** `/api/contacts/:id`
- Headers:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- Response:
  ```json
  {
    "_id": "string",
    "name": "string",
    "email": "string",
    "phone": "string"
  }
  ```

#### Create Contact
- **POST** `/api/contacts`
- Headers:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- Request Body:
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string"
  }
  ```
- Response:
  ```json
  {
    "_id": "string",
    "name": "string",
    "email": "string",
    "phone": "string"
  }
  ```

#### Update Contact
- **PUT** `/api/contacts/:id`
- Headers:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- Request Body:
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string"
  }
  ```
- Response:
  ```json
  {
    "_id": "string",
    "name": "string",
    "email": "string",
    "phone": "string"
  }
  ```

#### Delete Contact
- **DELETE** `/api/contacts/:id`
- Headers:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- Response:
  ```json
  {
    "message": "Contact deleted successfully"
  }
  ```

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
