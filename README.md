📅 Plan My Activities
A simple and intuitive full-stack application designed to help organize daily activities and keep track of completed tasks.

The project combines a React frontend with a Node.js / Express backend and MongoDB database.

📚 Table of Contents
About the Project
Features
Technologies
Project Structure
Installation
Usage
API
Backend
Responsive Design
Author
💡 About the Project
Plan My Activities is a full-stack activity planner that allows users to create and manage their daily plans in a simple and clean interface.

The application provides basic CRUD functionality:

Create activities
View activities
Edit activities
Delete activities
Mark activities as completed
Completed activities remain visible in the list and are displayed with a strikethrough.

The application also supports keyboard interaction, allowing users to press Enter to create or edit an activity.

✨ Features
➕ Create Activities
Add a new activity by entering a title and clicking Create.

You can also press Enter to create an activity.

📋 View Activities
All activities stored in the database are displayed in the application.

✏️ Edit Activities
Click the edit icon to load an existing activity into the input field.

After making changes, click Edit or press Enter.

☑️ Complete Activities
Use the checkbox to mark an activity as completed.

The activity stays in the list but is displayed with a strikethrough.

🗑️ Delete Activities
Delete an activity using the delete icon.

After deletion, the input field is cleared and the application returns to Create mode.

📱 Responsive Design
The interface is adapted for:

Desktop
Tablet
Mobile devices
Responsive breakpoints are implemented for 800px and 500px.

🛠️ Technologies
Frontend
Technology

Purpose

⚛️ React

Building the user interface

🟨 JavaScript

Application logic

⚡ Vite

Development and build tool

🔗 Axios

Communication with the backend API

🎨 CSS

Styling and responsive design

🖼️ React Icons

Edit and delete icons

Backend
Technology

Purpose

🟢 Node.js

JavaScript runtime

⚡ Express

Backend server and API

🍃 MongoDB

Database

📦 Mongoose

MongoDB object modeling

🌐 CORS

Frontend/backend communication

🔐 dotenv

Environment variables

📁 Project Structure
The project consists of two separate repositories: Frontend and Backend.

🎨 Frontend
PlanMe-frontend/
│
├── public/
│   └── images/
│
├── src/
│   ├── App.jsx
│   ├── MyPlans.jsx
│   ├── index.css
│   └── ...
│
├── package.json
└── README.md
⚙️ Backend
PlanMe-backend/
│
├── server.js
├── PlanController.js
├── PlanModel.js
├── PlanRoutes.js
├── package.json
└── package-lock.json
⚙️ Installation
Frontend
Clone the frontend repository:

git clone  https://github.com/OlgaVetrov/PlanMe-frontend.git
Navigate to the project:

cd PlanMe-frontend
Install dependencies:

npm install
Start the development server:

npm run dev
Backend
Clone the backend repository:

git clone https://github.com/OlgaVetrov/PlanMe-backend.git
Navigate to the backend:

cd PlanMe-backend
Install dependencies:

npm install
Create a .env file and add your MongoDB connection:

MONGODB_LINK=your_mongodb_connection_string
Start the backend:

npm start
The backend runs on:

http://localhost:3000
🚀 Usage
Once both servers are running:

Open the frontend in your browser.
Enter an activity in the input field.
Click Create or press Enter.
Use ✏️ to edit an activity.
Use ☑️ to mark an activity as completed.
Use 🗑️ to delete an activity.
The frontend communicates with the Express backend using Axios, while the backend stores the activities in MongoDB.

🔌 API
The frontend communicates with the backend through the following endpoints:

Get all activities
GET /
Returns all activities from MongoDB.

Create an activity
POST /savePlan
Request body:

{
  "title": "Go for a walk"
}
Edit an activity
POST /editPlan
Request body:

{
  "_id": "activity_id",
  "title": "Go for a long walk"
}
Delete an activity
POST /deletePlan
Request body:

{
  "_id": "activity_id"
}
🔗 Backend
The backend is maintained in a separate GitHub repository.

👉 PlanMe Backend

The backend repository contains:

Express server
MongoDB connection
Mongoose model
API routes
CRUD controllers
🔄 Application Architecture
                 PLAN MY ACTIVITIES
                         │
            ┌────────────┴────────────┐
            │                         │
            ↓                         ↓
       React Frontend           Express Backend
            │                         │
            │        Axios            │
            └────────────────────────→│
                                      │
                                  Mongoose
                                      │
                                      ↓
                                   MongoDB
The frontend is responsible for the user interface and user interactions.

The backend handles API requests and database operations.

MongoDB stores the activities.

📱 Responsive Design
The application uses responsive CSS to provide a comfortable experience on different screen sizes.

🖥️ Desktop
The main planner is displayed in the center of the page with the full interface.

📱 Tablet — up to 800px
The planner and its elements adjust to the available screen width.

📱 Mobile — up to 500px
The layout becomes more compact, with adjusted typography, buttons, images, and activity items.

🎨 Design
The interface was designed to be simple, clean, and easy to use.

The project includes:

A centered planner layout
Decorative images
Activity cards
Custom buttons
Edit and delete icons
Checkbox completion state
Responsive styling
👩‍💻 Author
Created with 💙 by

Olga Vetrov

GitHub:
https://github.com/OlgaVetrov
