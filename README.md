# 📅 Plan My Activities

## 📌 Project Description
Plan My Activities is a full-stack web application designed to help users organize their daily activities and keep track of their plans.
The application allows users to create, edit, complete, and delete activities in a simple and intuitive interface.
The project consists of a React frontend and a Node.js / Express backend connected to a MongoDB database.
I created this project to practice building a full-stack application, working with React components and state, making API requests with Axios, creating an Express server, and connecting an application to MongoDB using Mongoose.


## 📚 Table of Contents:
- 📌 Project Description
- ⚙️ Installation
- 🚀 Usage
- 🛠️ Technologies
- ✨ Features
- 📁 Project Structure
- 🔌 API
- 🔗 Backend
- 🔄 How It Works
- 📱 Responsive Design
- 🎨 Customization
- 🌐 Live Demo
- 👩‍💻 Credits


## ⚙️ Installation

🎨 Frontend

Clone the frontend repository:

git clone https://github.com/OlgaVetrov/PlanMe-frontend.git

Navigate to the project folder:

cd PlanMe-frontend

Install the required dependencies:

npm install

Start the development server:

npm run dev

After starting the development server, Vite will provide a local URL where the application can be opened in the browser.

⚙️ Backend

The backend is stored in a separate repository.

Clone the backend repository:

git clone https://github.com/OlgaVetrov/PlanMe-backend.git

Navigate to the backend folder:

cd PlanMe-backend

Install the dependencies:

npm install

Create a .env file in the backend root folder and add your MongoDB connection string:

MONGODB_LINK=your_mongodb_connection_string

Start the backend server:

npm start

The backend server runs on:

http://localhost:3000

Both the frontend and backend need to be running for the application to work correctly.


## 🚀 Usage

Plan My Activities allows users to easily manage their daily activities.

➕ Create an Activity
Enter the activity name into the input field and click Create.

You can also press Enter to create the activity.

✏️ Edit an Activity
Click the edit icon next to an activity.

The selected activity will appear in the input field, where it can be edited.

Click Edit or press Enter to save the changes.

☑️ Complete an Activity
Use the checkbox next to an activity to mark it as completed.

The completed activity remains visible in the list and is displayed with a strikethrough.

🗑️ Delete an Activity
Click the delete icon to remove an activity.

After an activity is deleted, the input field is cleared.


## 🛠️ Technologies:

🎨 Frontend:
- ⚛️ React
- 🟨 JavaScript
- ⚡ Vite
- 🔗 Axios
- 🎨 CSS
- 🖼️ React Icons

  
  ⚙️ Backend:
- 🟢 Node.js
- ⚡ Express
- 🍃 MongoDB
- 📦 Mongoose
- 🌐 CORS
- 🔐 dotenv

  
 ## ✨ Features:
 
 ➕ Create
Users can create new activities by entering a title and submitting it with the Create button.
The activity is sent to the backend and stored in MongoDB.

📋 Read
When the application loads, the frontend requests the existing activities from the backend and displays them in the activity list.

✏️ Update
Users can edit an existing activity.

The selected activity is placed into the input field, allowing the user to modify its title and save the changes.

☑️ Complete
Activities can be marked as completed using a checkbox.

Completed activities are not removed from the list. Instead, they remain visible with a strikethrough.

🗑️ Delete
Users can delete activities using the delete icon.

After deletion, the activity list is updated and the input field is cleared.

⌨️ Keyboard Support
The application supports the Enter key.

Pressing Enter while entering an activity creates it.

Pressing Enter while editing an activity saves the changes.

📱 Responsive Layout
The interface is adapted for different screen sizes, including desktop, tablet, and mobile devices.


## 📁 Project Structure

The project consists of two separate repositories: Frontend and Backend.

### 🎨 Frontend — PlanMe-frontend

```text
PlanMe-frontend/
├── public/
├── images/
├── src/
│ ├── App.jsx
│ ├── MyPlans.jsx
│ └── index.css
├── FetchPlans.jsx
├── package.json
└── README.md
```

### Frontend Files

- **`src/App.jsx`**
The main React component responsible for the application structure and user interface.

- **`src/MyPlans.jsx`**
Responsible for displaying and managing the user's activities.

- **`src/index.css`**
Contains the main styling for the application.

- **`FetchPlans.jsx`**
Responsible for fetching activities from the backend API and providing the retrieved data to the frontend.

### ⚙️ Backend — PlanMe-backend

```text
PlanMe-backend/
├── server.js
├── PlanController.js
├── PlanModel.js
├── PlanRoutes.js
├── package.json
└── package-lock.json
```

### Backend Files

- **`server.js`**
The main backend file responsible for creating the Express server, configuring middleware, connecting to MongoDB, loading the routes, and starting the server.

- **`PlanRoutes.js`**
Defines the API routes used to handle plan-related requests.

- **`PlanController.js`**
Contains the functions responsible for retrieving, creating, editing, and deleting plans.

- **`PlanModel.js`**
Defines the Mongoose schema and model used to store plans in MongoDB.


## 🔌 API
The frontend communicates with the backend using Axios.

📋 Get All Activities
GET /

Returns all activities stored in the database.

➕ Create an Activity
POST /savePlan

Request body:

{ "title": "Go for a walk" }

✏️ Edit an Activity
POST /editPlan

Request body:

{ "_id": "activity_id", "title": "Go for a long walk" }

🗑️ Delete an Activity
POST /deletePlan

Request body:

{ "_id": "activity_id" }


## 🔗 Backend
The backend for Plan My Activities is maintained in a separate GitHub repository.

👉 PlanMe Backend

The backend is responsible for:

- 🔗 Handling API requests
- 🍃 Communicating with MongoDB
- ➕ Creating activities
- 📋 Retrieving activities
- ✏️ Updating activities
- 🗑️ Deleting activities

  
The React frontend communicates with the Express backend using Axios.

## 🔄 How It Works

The application uses a simple client-server architecture.

React Frontend → Axios → Express Backend → Mongoose → MongoDB

The frontend is responsible for the user interface and user interactions.

The backend handles API requests and database operations.

MongoDB stores the activities.

After an activity is created, edited, or deleted, the frontend requests the updated list from the backend.


## 📱 Responsive Design
The application is designed to provide a comfortable experience on different devices.

🖥️ Desktop
The main planner is displayed in the center of the page with the activity list and controls.

📱 Tablet
The layout adjusts for screens up to 800px.

The container, images, text, buttons, and activity list adapt to the available width.

📱 Mobile
For screens up to 500px, the interface becomes more compact.

Input fields, buttons, activity items, icons, and images are resized to fit smaller screens.


## 🎨 Customization
The visual design of the application is controlled through CSS.

The project includes:

- 🌈 Background styling
- 📋 Planner container
- 🖼️ Decorative images
- 📝 Activity items
- 🔘 Create and Edit buttons
- ✏️ Edit and delete icons
- ☑️ Completed activity styling
- 📱 Responsive layouts
###

The main styling is located in:

src/index.css

Images used in the interface are stored in:

public/images/


## 🌐 Live Demo

You can view the project here:

https://planmebyolga.netlify.app/


## 👩‍💻 Credits
Created with 💙 by

Olga Vetrov

GitHub:

https://github.com/OlgaVetrov

Backend:

https://github.com/OlgaVetrov/PlanMe-backend
