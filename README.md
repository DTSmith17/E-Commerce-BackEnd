# E-Commerce-BackEnd
This repository contains a functional Express.js API integrated with Sequelize, a powerful ORM for Node.js applications, enabling easy interaction with a MySQL database. With this setup, you can seamlessly perform CRUD operations on your database entities via API endpoints.

## Features
- Database Connectivity: Connect to a MySQL database using Sequelize by configuring environment variables for the database name, MySQL username, and MySQL password.

- Database Initialization: Initialize a development database by executing schema and seed commands. These commands create the necessary tables and seed them with test data, providing a robust starting point for your application.

- Automatic Model Sync: Upon starting the application, Sequelize automatically syncs the defined models with the MySQL database, ensuring that any changes to your data schema are reflected in the database.

- API Endpoints: Access various API endpoints to interact with categories, products, and tags. These endpoints allow you to perform CRUD operations, fetching, creating, updating, and deleting data as needed.

## Getting Started
To get started with this Express.js API:

1. Navigate to the project directory and install dependencies using npm install.
2. Create an environment variable file (e.g., .env) and specify your database name, MySQL username, and MySQL password.
    
   ![.env file config](<img/Screenshot 2024-04-16 200436.png>)

3. Execute schema and seed commands to initialize the database with test data.
4. Start the application by running npm start.
5. Use a tool like Postman or Insomnia Core to access and test the API endpoints for categories, products, and tags.

## Usage
Schema and Seed Commands
- To initialize the development database and seed it with test data, run the following commands:

```bash
npm run schema
npm run seed
```
Starting the Application
- To start the application and sync Sequelize models with the MySQL database, use:

```bash
npm start
```
Testing API Endpoints
You can use Insomnia Core or any other API testing tool to test the API endpoints:

- GET Routes: Access /api/categories, /api/products, or /api/tags to fetch data in formatted JSON.

    ![API get response](<img/Screenshot 2024-04-16 200917.png>)

- POST, PUT, and DELETE Routes: Test /api/categories, /api/products, or /api/tags with appropriate payload for creating, updating, or deleting data in the database.

    ![API post in POSTMAN example](<img/Screenshot 2024-04-16 200803.png>)

For a more detailed walkthrough, visit ![E-Commerce BackEnd walkthrough](https://drive.google.com/file/d/17Vo2qlWuxSQauupQU1tGdTeyASwZbTKc/view)

## Dependencies
Express.js <br>
Sequelize<br>
MySQL2<br>
Dotenv
