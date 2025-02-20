# Kanban Board

 ## Description
  This project is a Kanban board web application with a secure authentication system built using Node.js, TypeScript, Express.js, MongoDB, React, and Vite. Users can log in, manage tasks across different stages (e.g., To Do, In Progress, Done), and log out securely. The authentication is handled with JSON Web Tokens (JWT) to ensure secure communication and access control.

  ## Table of Contents 

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Contributions](#contributions)

  [Questions](#questions)

  ## Installation
  The below frameworks, run time environments, and their respective packages and dependencies are necessary to use the app:

  Technologies Used:
  Frontend: React, Vite, TypeScript
  Backend: Node.js, Express.js, MongoDB
  Authentication: JSON Web Tokens (JWT)

  devDependencies:
  '@types/sequelize'
  'concurrently'
  'nodemon'
  'ts-node'
  'typescript'
  'wait-on'

  Dependencies:
  'pg'
  'pg-hstore'
  'sequelize'

  ## Usage
User Authentication:

    Secure login with username and password.
    JWT-based authentication for secure and stateless sessions.

Error Handling:

    Clear error messages for invalid login attempts.
    Protected Routes:

    Kanban board access restricted to authenticated users.
    Unauthorized users are redirected to the login page.

Session Management:

    JWT stored securely in the client’s local storage after successful login.
    Auto-logout after inactivity to prevent unauthorized access.
    Token invalidation on logout or session expiration.

Task Management:

View and manage tasks in a Kanban-style interface.  
  

# Acceptance Criteria

GIVEN a Kanban board with a secure login page
WHEN I load the login page
THEN I am presented with form inputs for username and password
WHEN I enter my valid credentials
THEN I am authenticated via JWT and redirected to the Kanban board
WHEN I enter invalid credentials
THEN I see an error message indicating the credentials are incorrect
WHEN I successfully log in
THEN a JWT is stored in the client's local storage for authenticated requests
WHEN I log out
THEN the JWT is removed from local storage and I am redirected to the login page
WHEN I try to access the Kanban board without being authenticated
THEN I am redirected to the login page
WHEN I remain inactive for a defined period
THEN my session expires, the JWT is invalidated, and I am redirected to the login page upon my next action

  ## Contributions
  You can contribute to this project by reaching out to me. Once you reach out to me, I can give you the necessary permissions to add to this project any way you see fit.

  ## License 
    
    This repository is covered under the MIT license.

  ## Questions
  [ricardoshade](https://github.com/ricardoshade)

  ricardo.shade@hotmail.com
