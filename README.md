E-Commerce Back End
Overview
As a manager at an internet retail company, having a robust and efficient back end for your e-commerce website is crucial to compete with other players in the market. This project aims to provide a functional Express.js API using the latest technologies, including MySQL, Sequelize, and dotenv.

Acceptance Criteria
Database Connection
Connect to Database:
Add your database name, MySQL username, and MySQL password to the .env file.
Use Sequelize to connect to the database.
Database Initialization
Database Initialization:
Run schema and seed commands to create a development database and seed it with test data.
bash
Copy code
npm run migrate
npm run seed
Server Startup
Server Startup:
Invoke the application to start the server and sync Sequelize models with the MySQL database.
bash
Copy code
npm start
API Routes
API Routes in Insomnia:

Test API GET routes for categories, products, and tags in Insomnia Core.
Verify that data for each route is displayed in formatted JSON.
API POST, PUT, DELETE Routes:

Test API POST, PUT, and DELETE routes in Insomnia Core.
Successfully create, update, and delete data in the database.
Mock-Up
For a visual representation of the application's functionality, refer to the provided animations in the documentation.

Getting Started
Dependencies
MySQL2 and Sequelize:

Use MySQL2 and Sequelize packages to connect Express.js API to a MySQL database.
bash
Copy code
npm install mysql2 sequelize
Dotenv:

Use dotenv to store sensitive data in environment variables.
bash
Copy code
npm install dotenv
Database Setup
Database Initialization:

Use the schema.sql file in the db folder to create your database using MySQL shell commands.
Environment Variables:

Create a .env file with your MySQL username, password, and database name.
Database Models
Category
id: Integer, primary key, auto increment.
category_name: String, doesn't allow null values.
Product
id: Integer, primary key, auto increment.
product_name: String, doesn't allow null values.
price: Decimal, doesn't allow null values, validates as a decimal.
stock: Integer, doesn't allow null values, default value of 10, validates as numeric.
category_id: Integer, references the category model's id.
Tag
id: Integer, primary key, auto increment.
tag_name: String, doesn't allow null values.
ProductTag
id: Integer, primary key, auto increment.
product_id: Integer, references the product model's id.
tag_id: Integer, references the tag model's id.
Associations
Execute association methods on Sequelize models to create the following relationships:

Product belongs to Category.
Category has many Product models.
Product belongs to many Tag models through ProductTag.
Tag belongs to many Product models through ProductTag.
Contributing
If you would like to contribute to the project, please follow the Contributor Covenant.

License
This project is licensed under the MIT License.

# E-commerce
