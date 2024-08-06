Marriage Matchmaking App <br>
Brief Description <br>
The Marriage Matchmaking App is a simple backend application designed to
help users find potential matches based on their profile information. The app
allows users to create, read, update, and delete profiles with details such as
name, age, gender, email, city, and interests. <br>
What is Provided? <br>
This project provides a basic skeleton for a FastAPI-based backend application.
The project can be found at this github repo: https://github.com/abhishekUM/UrbanMatch-PythonTask/tree/master
The provided code includes: <br>
Basic Project Structure:<br>
• main.py : The main application file with basic CRUD operations for user
profiles.<br>
• models.py: SQLAlchemy models defining the User schema.<br>
• database.py: Database configuration and setup.<br>
• schemas.py: Pydantic schemas for data validation and serialization.
Functionality:<br>
• Create User Endpoint: Create a new user profile.<br>
• Read Users Endpoint: Retrieve a list of user profiles.<br>
• Read User by ID Endpoint: Retrieve a user profile by ID.<br>
• SQLite Database: The application uses SQLite as the database to store
user profiles.<br>
What is Required?<br>
Tasks:<br>
1. Add User Update Endpoint: <br>
• Implement an endpoint to update user details by ID in the main.py
file. <br>
2. Add User Deletion Endpoint:<br>
• Implement an endpoint to delete a user profile by ID. <br>
3. Find Matches for a User: <br>
• Implement an endpoint to find potential matches for a user based on
their profile information. <br>
4. Add Email Validation:  <br>
• Add validation to ensure the email field in user profiles contains valid
email addresses.<br>
1
Instructions:<br>
Implement the required endpoints and email validation:<br>
1. Add the necessary code for the update, delete, match and validation endpoints<br>
2. Test Your Implementation:<br>
1. Verify that users can be updated and deleted correctly.<br>
2. Check that matches are correctly retrieved for a given user.<br>
3. Ensure email validation is working as expected.<br>
Submit Your Work:<br>
Provide the updated code files (main.py, models.py, database.py, and
schemas.py). Include a brief report explaining your approach and any
assumptions made. <br>
Prerequisites <br>
• Python 3.7+
• FastAPI
• SQLAlchemy
• SQLite



Node.js Alternative<br>
In the Node.js implementation, we use Express.js for the web framework and Sequelize for ORM (Object-Relational Mapping), along with SQLite for the database. Here’s a comparison and explanation of the project in Node.js: <br>

Comparison Between Python and Node.js Implementations <br>
Feature	Python (FastAPI + SQLAlchemy)	Node.js (Express + Sequelize) <br>
Web Framework	FastAPI	Express<br>
ORM	SQLAlchemy	Sequelize<br>
Data Validation	Pydantic	Joi<br>
Database	SQLite	SQLite<br>
Endpoint Definitions	In main.py	In controllers/userController.js and routes/userRoutes.js<br>
Models Definition	In models.py	In models/user.js<br>
Database Configuration	In database.py	In config/database.js<br>
