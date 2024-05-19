# Course Management Application

## Overview
This project is a web application for managing courses, allowing users to view and search through a list of courses, see detailed information about each course, and access a student dashboard to manage their enrolled courses. The application leverages state management with Redux for effective state handling and ensures a responsive design.

## Features
- **Course Listing Page**: Displays a scrollable list of courses with search functionality based on course name and instructor.
- **Course Details Page**: Shows detailed information about a selected course.
- **Student Dashboard**: Displays the list of courses a student is enrolled in, with a progress bar and the ability to mark courses as completed.
- **Real-Time Data Updates**: Reflects real-time updates for the number of likes on courses.
- **Responsive Design**: Ensures that the application is usable and looks good on various devices and screen sizes, from mobile phones to desktop monitors.

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- Git

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/course-management-app.git
    cd course-management-app
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application
1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5173`.

## Screenshots

### Course Listing Page
![image](https://github.com/gyanavardhana/Alemeno-assignment/assets/89439095/ecf72570-98ef-46d4-8029-5f82e635b161)

*The course listing page with search functionality.*

### Course Details Page
![image](https://github.com/gyanavardhana/Alemeno-assignment/assets/89439095/56960d33-96b3-43ca-a8a6-6d0913f211d4)

![image](https://github.com/gyanavardhana/Alemeno-assignment/assets/89439095/e5138fd6-4653-4504-a723-f907cf891534)

*The detailed information about a selected course.*

### Student Dashboard
![image](https://github.com/gyanavardhana/Alemeno-assignment/assets/89439095/13cf07ba-a71e-41a9-bd02-6c89deefeed7)

*The student dashboard displaying enrolled courses.*

## Technologies Used
- **React**: For building the user interface.
- **Redux**: For state management.
- **Redux Thunk**: For asynchronous actions.
- **React Router**: For navigation between pages.
- **Axios**: For data fetching.
- **Express and Mongodb**: For backend and real-time database.
- **Tailwind CSS**: For styling.

## State Management
The application uses Redux for managing the state. The global state includes information about courses, enrolled courses, and user data. Actions and reducers are used to handle state changes in response to user interactions and data fetching.

## Real-Time Data Update
The application uses Firebase to implement real-time updates for the number of likes on the courses. The course listing page subscribes to changes in the backend and updates the UI accordingly without requiring a manual refresh.


## Deployed Application
The application is deployed and can be accessed at the following link:

[Course Management Application](https://peppy-chaja-d2154c.netlify.app/)

---

Please feel free to reach out if you have any questions or need further assistance. Enjoy using the Course Management Application!
