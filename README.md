
# Overview
   SeasonServe is a web-based platform designed to connect volunteers with seasonal events where interested participants can browse, view details, and sign up for events.
The website streamlines the process of matching volunteers with events that align with their interests, availability, and location.
   Beyond connecting people with meaningful experiences, the platform helps volunteers gain valuable skills in various fields such as event management, hospitality, education, logistics, and customer service. 
Whether they are assisting at large-scale entertainment venues, engaging with children in educational workshops, or working behind the scenes at high-profile events, volunteers can develop practical skills while making a positive impact in their community.




# Goals
   
•	Connect Volunteers: Enable users to find and sign up for volunteer opportunities.
•	Support Events: Assist organizations in managing and promoting their seasonal events.
•	Community Engagement: Foster a sense of community by encouraging participation in local activities.




# Flow Chart
![Image](https://github.com/user-attachments/assets/f75dd1d4-a82b-49a0-86d5-9493a3b2afda)
Figure 1 SeasonServe Flow Chart




# Setup
For the project development, we used GitHub for collaboration and VS Code as our code environment.
We were able to effectively organize our code, monitor changes, and work together as a team through GitHub. 
Using VS Code provided a flexible and powerful development environment with extensions that helped simplify our workflow.  

For the backend of our website, we used Node.js and MongoDB, to guarantee a scalable and efficient system.
The development process involved several steps:

•	Setting Up the Node.js Environment:
   We started by installing Node.js and initializing our project. 
Then we cloned the repository we had already created on GitHub and began integrating the backend. 
We set up necessary dependencies, such as: express, mongoose, dotenv, passport, nodemon, etc.

•	MongoDB Setup 
   For managing our database, we installed MongoDB and created a new project. 
To configure it, we followed these steps: 
- To securely keep our MongoDB connection string, we created a.env file.
- Then we use Mongoose to establish a connection to MongoDB and define models and schemas for our data.
- We used CRUD operations to interact with the database.

•	Folder Structure
   The project is organized into a clear file structure to enhance maintainability:
- public/: Contains all public assets like CSS, JavaScript, and images.
- server/: Houses the server-side logic, including routes, controllers, database models, config (database connection), and middleware.
- views/: Holds the EJS templates used for rendering different web pages. It also includes layouts and partials like header and footer.
- .gitignore: Specifies files and directories that should be ignored by Git.
- README.md: Contains project documentation and setup instructions.
- app.js: The main entry point for the application.
- package.json: Metadata for the Node.js project, including dependencies.




# Technologies
   The project utilizes the following technologies for Frontend:
•	EJS (Embedded JavaScript): For templating and rendering HTML pages.
•	JavaScript: The main programming language for server-side logic.
•	CSS: For styling the website and ensuring a responsive design. 
   Additionally, we made sure the project is completely responsive, offering the best possible user experience on a range of screens and devices.

   Backend Technologies:
•	Node.js: For server-side development.
•	Express.js: A web application framework for Node.js, facilitating the creation of web servers.

   Authentication Implementation:
   For this project, we set up our own authentication system using Passport.js instead of relying on third-party services. We used local authentication, so users can sign up and log in with their email and password. 
This meant handling things like checking if an account already exists, securely storing passwords, and keeping users logged in with sessions. We also made sure to include custom error handling, so users get clear messages if something goes wrong, like using a weak password or trying to register with an email that’s already taken. 
Our authentication system is fully connected to our MongoDB database, making everything run smoothly while keeping user data secure. Doing this ourselves gave us full control over how authentication works, making sure it fits exactly with what we needed for this project.





# Screenshots
## Website 
![Image](https://github.com/user-attachments/assets/862587a6-c73d-4bce-8140-a2f86cd8b539)
![Image](https://github.com/user-attachments/assets/2b7c05d7-8ce3-4ec9-90a9-d71790d517d8)
![Image](https://github.com/user-attachments/assets/b405373d-1c6b-4346-a315-6786d628fde1)
Figure 2 Interactive screen with great responsiveness

![Image](https://github.com/user-attachments/assets/a7c58f91-501f-489f-8554-7cba3fb06703)
![Image](https://github.com/user-attachments/assets/fff06f49-2607-4b54-82a5-16d8725d10d4)
Figure 3 Home page with a features section

![Image](https://github.com/user-attachments/assets/08938c70-905b-49bf-9063-237429b620b4)
Figure 4 About us

![Image](https://github.com/user-attachments/assets/1d879bea-1991-4b0f-bfc7-5a2842f8c3bf)
![Image](https://github.com/user-attachments/assets/ee8f1e8d-6bdb-439f-8018-0cfaa518adf5)
Figure 5 Sign up includes two steps to ensure security and reliability



![Image](https://github.com/user-attachments/assets/2030d3c2-8cdf-4f40-bf3e-e6f199d39e7b)
![Image](https://github.com/user-attachments/assets/c3ff5edd-1562-4225-9aff-b6ff11613382)
![Image](https://github.com/user-attachments/assets/a9eb94fe-42b1-4a3e-b639-136de00c5423)
Figure 6 Some restrictions applied to the sign up


![Image](https://github.com/user-attachments/assets/932f20b1-6627-4868-ad61-addc180de26a)
Figure 7 Log in

![Image](https://github.com/user-attachments/assets/141e7d0d-69df-40ad-a83f-621aba9ccb1a)
Figure 8 Invalid data

![Image](https://github.com/user-attachments/assets/ab518d68-c16a-4075-b484-6159963de4be)
Figure 9 The user dashboard header has been updated, and the username is now displayed

![Image](https://github.com/user-attachments/assets/11cb75e9-0e08-473c-8d40-6fc9715946a2)
Figure 10 Events page


![Image](https://github.com/user-attachments/assets/ba667f7b-5534-4725-b0ba-ccd816e93055)
Figure 11 Users can search for event

![Image](https://github.com/user-attachments/assets/77ca526e-2427-4c95-9b54-b187da9838ad)
Figure 12 It provides particular classifications, like by city.

![Image](https://github.com/user-attachments/assets/7bd2a56a-ecb3-4a87-a9db-8a768a6d3e13)
Figure 13 View event details, including date, location, time, and description

![Image](https://github.com/user-attachments/assets/fe43d3b2-5ba3-4bdd-b31c-350800977c92)
Figure 14 Apply for the event

![Image](https://github.com/user-attachments/assets/e9585b04-2b9a-4b11-b436-d8e7fa7d5b5a)
![Image](https://github.com/user-attachments/assets/1944b861-b11a-4aad-b1ba-6a130250246d)
Figure 15 Display and update Profile page (contains read-only and editable)








## Database

![Image](https://github.com/user-attachments/assets/dc34dfea-645b-4507-9869-b00a9edc4b40)
![Image](https://github.com/user-attachments/assets/62aafea1-173f-42bd-afa4-6c436b488c7e)
![Image](https://github.com/user-attachments/assets/974a7939-a52e-4250-b292-446addad0822)
![Image](https://github.com/user-attachments/assets/063e050b-6042-4e9b-bbe9-cea5a8ff7a20)
Figure 16 Database





## Future Work 
   We planned to accomplish the following for our website's future development:
•	Rewards Page: Highlights users with the highest volunteer hours.
•	Support System: Offers assistance to users. 
•	Password Reset Option: enables users to securely reset their passwords.
•	Notification System: Provides updates and alerts to users. 
•	User Communication System: Allows interaction among users.  




## Resources
[1] https://github.com/RaddyTheBrand/Notes-NodeJs-CRUD-MongoDB.git
[2] https://getbootstrap.com/
[3] https://fontawesome.com/ 
[4] https://www.youtube.com/watch?v=GdrbE-s5DgQ&t=38s



## Team members: 
Noura Assaf Abuthnain 444006599

Norah Mohammad Altwiri 444005353

Felwah Mohammad Almofeez 444006548

Zainah Mohammed Alnoamani 443010399



