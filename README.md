1.	Overview

   
SeasonServe is a web-based platform designed to connect volunteers with seasonal events where interested participants can browse, view details, and sign up for events. The website streamlines the process of matching volunteers with events that align with their interests, availability, and location.
Beyond connecting people with meaningful experiences, the platform helps volunteers gain valuable skills in various fields such as event management, hospitality, education, logistics, and customer service. Whether they are assisting at large-scale entertainment venues, engaging with children in educational workshops, or working behind the scenes at high-profile events, volunteers can develop practical skills while making a positive impact in their community.



2.	Goals
   
•	Connect Volunteers: Enable users to find and sign up for volunteer opportunities.
•	Support Events: Assist organizations in managing and promoting their seasonal events.
•	Community Engagement: Foster a sense of community by encouraging participation in local activities.



3.	Flow Chart

   
Figure 1 SeasonServe Flow Chart



4.	Setup

For the project development, we used GitHub for collaboration and VS Code as our code environment. We were able to effectively organize our code, monitor changes, and work together as a team through GitHub. 
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
o	To securely keep our MongoDB connection string, we created a.env file.
o	Then we use Mongoose to establish a connection to MongoDB and define models and schemas for our data.
o	We used CRUD operations to interact with the database.


•	Folder Structure

The project is organized into a clear file structure to enhance maintainability:
o	public/: Contains all public assets like CSS, JavaScript, and images.
o	server/: Houses the server-side logic, including routes, controllers, database models, config (database connection), and middleware.
o	views/: Holds the EJS templates used for rendering different web pages. It also includes layouts and partials like header and footer.
o	.gitignore: Specifies files and directories that should be ignored by Git.
o	README.md: Contains project documentation and setup instructions.
o	app.js: The main entry point for the application.
o	package.json: Metadata for the Node.js project, including dependencies.



5.	Technologies
   
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



6.	Screenshots
   
6.1.	Website 

Figure 2 Interactive screen with great responsiveness


Figure 3 Home page with a features section

Figure 4 About us

Figure 5 Sign up includes two steps to ensure security and reliability

Figure 6 Some restrictions applied to the sign up

Figure 7 Log in

Figure 8 Invalid data

Figure 9 The user dashboard header has been updated, and the username is now displayed

Figure 10 Events page


Figure 11 Users can search for event

Figure 12 It provides particular classifications, like by city.

Figure 13 View event details, including date, location, time, and description

Figure 14 Apply for the event

Figure 15 Display and update Profile page (contains read-only and editable)


6.2.	Database

Figure 16 Database




7.	Future Work
   
   
We planned to accomplish the following for our website's future development:
•	Rewards Page: Highlights users with the highest volunteer hours.
•	Support System: Offers assistance to users. 
•	Password Reset Option: enables users to securely reset their passwords.
•	Notification System: Provides updates and alerts to users. 
•	User Communication System: Allows interaction among users.  





8.	Resources
[1] https://github.com/RaddyTheBrand/Notes-NodeJs-CRUD-MongoDB.git
[2] https://getbootstrap.com/
[3] https://fontawesome.com/ 
[4] https://www.youtube.com/watch?v=GdrbE-s5DgQ&t=38s
