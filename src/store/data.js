const courses = [
    {
        "id": 1,
        "name": "Introduction to React Native",
        "instructor": "John Doe",
        "description": "Learn the basics of React Native development and build your first mobile app.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "8 weeks",
        "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
        "location": "Online",
        "prerequisites": [
          "Basic JavaScript knowledge",
          "Familiarity with React"
        ],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to React Native",
            "content": "Overview of React Native, setting up your development environment."
          },
          {
            "week": 2,
            "topic": "Building Your First App",
            "content": "Creating a simple mobile app using React Native components."
          }
        ],
        "likes": 10
      },
      {
        "id": 2,
        "name": "Advanced React Native Development",
        "instructor": "Jane Smith",
        "description": "Take your React Native skills to the next level with advanced topics and real-world projects.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "10 weeks",
        "schedule": "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        "location": "Online",
        "prerequisites": [
          "Proficient in JavaScript",
          "Experience with React Native"
        ],
        "syllabus": [
          {
            "week": 1,
            "topic": "Advanced Component Patterns",
            "content": "Exploring advanced patterns for building reusable components."
          },
          {
            "week": 2,
            "topic": "State Management with Redux",
            "content": "Implementing Redux for state management in React Native applications."
          }
        ],
        "likes": 15
    },
    {
        "id": 3,
        "name": "React Native UI Design Masterclass",
        "instructor": "Emily Johnson",
        "description": "Master the art of designing beautiful user interfaces for React Native apps.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "6 weeks",
        "schedule": "Fridays, 5:00 PM - 7:00 PM",
        "location": "Online",
        "prerequisites": [
          "Basic understanding of React Native",
          "Familiarity with UI design principles"
        ],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to UI Design",
            "content": "Understanding the fundamentals of UI design for mobile applications."
          },
          {
            "week": 2,
            "topic": "Styling with Flexbox",
            "content": "Using Flexbox to create responsive layouts in React Native."
          }
        ],
        "likes": 20
    },
    {
        "id": 4,
        "name": "React Native Firebase Integration",
        "instructor": "Michael Brown",
        "description": "Learn how to integrate Firebase services into your React Native apps for real-time data syncing and authentication.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "6 weeks",
        "schedule": "Saturdays, 10:00 AM - 12:00 PM",
        "location": "Online",
        "prerequisites": [
          "Basic knowledge of React Native",
          "Familiarity with Firebase"
        ],
        "syllabus": [
          {
            "week": 1,
            "topic": "Firebase Fundamentals",
            "content": "Understanding Firebase services and their capabilities."
          },
          {
            "week": 2,
            "topic": "Real-time Database",
            "content": "Implementing Firebase Realtime Database in React Native applications."
          }
        ],
        "likes": 12
    },
    {
        "id": 5,
        "name": "React Native Performance Optimization",
        "instructor": "David Wilson",
        "description": "Optimize the performance of your React Native apps for better user experience and efficiency.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "4 weeks",
        "schedule": "Tuesdays, 6:30 PM - 8:30 PM",
        "location": "Online",
        "prerequisites": [
          "Intermediate React Native skills",
          "Understanding of performance profiling tools"
        ],
        "syllabus": [
          {
            "week": 1,
            "topic": "Identifying Performance Bottlenecks",
            "content": "Using profiling tools to identify areas for optimization."
          },
          {
            "week": 2,
            "topic": "Code Splitting and Lazy Loading",
            "content": "Implementing code splitting and lazy loading techniques."
          }
        ],
        "likes": 18
    },
    {
        "id": 6,
        "name": "React Native Animation Masterclass",
        "instructor": "Sophia Martinez",
        "description": "Unlock the power of animations in React Native to create engaging and dynamic user interfaces.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "8 weeks",
        "schedule": "Thursdays, 7:00 PM - 9:00 PM",
        "location": "Online",
        "prerequisites": [
          "Basic knowledge of React Native",
          "Understanding of CSS animations"
        ],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to React Native Animations",
            "content": "Overview of animation concepts and basic techniques."
          },
          {
            "week": 2,
            "topic": "Animating Components",
            "content": "Animating components using Animated API."
          }
        ],
        "likes": 22
    },
    {
        "id": 7,
        "name": "React Native App Deployment",
        "instructor": "Daniel Clark",
        "description": "Learn how to deploy your React Native applications to various platforms including iOS and Android.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "4 weeks",
        "schedule": "Saturdays, 2:00 PM - 4:00 PM",
        "location": "Online",
        "prerequisites": [
          "Completed React Native project",
          "Basic knowledge of mobile app deployment"
        ],
        "syllabus": [
          {
            "week": 1,
            "topic": "Preparing for Deployment",
            "content": "Setting up necessary configurations and preparing your app for deployment."
          },
          {
            "week": 2,
            "topic": "App Store Submission",
            "content": "Submitting your app to the Apple App Store and Google Play Store."
          }
        ],
        "likes": 14
    },
    {
        "id": 8,
        "name": "React Native Navigation Essentials",
        "instructor": "Emma Davis",
        "description": "Master navigation patterns and techniques in React Native to create intuitive and seamless user experiences.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "6 weeks",
        "schedule": "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
        "location": "Online",
        "prerequisites": [
          "Intermediate React Native skills",
          "Basic understanding of navigation concepts"
        ],
        "syllabus": [
          {
            "week": 1,
            "topic": "Navigation Fundamentals",
            "content": "Understanding navigation components and stack navigation."
          },
          {
            "week": 2,
            "topic": "Tab Navigation",
            "content": "Implementing tab navigation using React Navigation."
          }
        ],
        "likes": 16
    },
    {
        "id": 9,
        "name": "React Native State Management with MobX",
        "instructor": "Christopher Lee",
        "description": "Learn how to manage state in React Native apps using MobX for efficient and scalable state management.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "8 weeks",
        "schedule": "Tuesdays and Thursdays, 5:30 PM - 7:30 PM",
        "location": "Online",
        "prerequisites": [
          "Basic knowledge of React Native",
          "Familiarity with state management concepts"
        ],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to MobX",
            "content": "Understanding MobX principles and basic setup."
          },
          {
            "week": 2,
            "topic": "Observable State",
            "content": "Using observables to manage state in React Native."
          }
        ],
        "likes": 11
    },
    {
        "id": 10,
        "name": "React Native Authentication",
        "instructor": "Sarah Johnson",
        "description": "Learn how to implement authentication in your React Native apps using various methods including OAuth and JWT.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "6 weeks",
        "schedule": "Fridays, 6:00 PM - 8:00 PM",
        "location": "Online",
        "prerequisites": [
          "Basic knowledge of React Native",
          "Understanding of RESTful APIs"
        ],
        "syllabus": [
          {
            "week": 1,
            "topic": "Authentication Fundamentals",
            "content": "Understanding authentication concepts and flow."
          },
          {
            "week": 2,
            "topic": "Implementing OAuth",
            "content": "Integrating OAuth for social media authentication."
          }
        ],
        "likes": 19
    },                                        
]
const enrolled = [
        {
            "id": 1,
            "courseName": "Introduction to React Native",
            "instructorName": "John Doe",
            "thumbnail": "your.image.here",
            "dueDate": "2024-06-30",
            "progress": 50,
            "status": "In Progress"
        },
        {
            "id": 2,
            "courseName": "Course 2",
            "instructorName": "Instructor 2",
            "thumbnail": "your.image.here",
            "dueDate": "2024-10-25",
            "progress": 37,
            "status": "In Progress"
        },
        {
            "id": 3,
            "courseName": "Course 3",
            "instructorName": "Instructor 3",
            "thumbnail": "your.image.here",
            "dueDate": "2024-11-12",
            "progress": 92,
            "status": "In Progress"
        },
        {
            "id": 4,
            "courseName": "Course 4",
            "instructorName": "Instructor 4",
            "thumbnail": "your.image.here",
            "dueDate": "2024-09-18",
            "progress": 100,
            "status": "Completed"
        },
        {
            "id": 5,
            "courseName": "Course 5",
            "instructorName": "Instructor 5",
            "thumbnail": "your.image.here",
            "dueDate": "2024-10-09",
            "progress": 61,
            "status": "In Progress"
        },
        {
            "id": 6,
            "courseName": "Course 6",
            "instructorName": "Instructor 6",
            "thumbnail": "your.image.here",
            "dueDate": "2024-11-07",
            "progress": 84,
            "status": "In Progress"
        },
        {
            "id": 7,
            "courseName": "Course 7",
            "instructorName": "Instructor 7",
            "thumbnail": "your.image.here",
            "dueDate": "2024-10-21",
            "progress": 29,
            "status": "In Progress"
        },
        {
            "id": 8,
            "courseName": "Course 8",
            "instructorName": "Instructor 8",
            "thumbnail": "your.image.here",
            "dueDate": "2024-09-23",
            "progress": 55,
            "status": "In Progress"
        },
        {
            "id": 9,
            "courseName": "Course 9",
            "instructorName": "Instructor 9",
            "thumbnail": "your.image.here",
            "dueDate": "2024-10-15",
            "progress": 98,
            "status": "In Progress"
        },
        {
            "id": 10,
            "courseName": "Course 10",
            "instructorName": "Instructor 10",
            "thumbnail": "your.image.here",
            "dueDate": "2024-11-03",
            "progress": 73,
            "status": "In Progress"
        }
]
export { courses, enrolled }
