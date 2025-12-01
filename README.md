# SoftUni JS Back-End Exam Preparation Cheat Sheet

## Create Skeleton Project

### 1. Initialize Project
 - [x] Initialize npm project `npm init --yes` `npm init -y` 
 - [x] Change module system
 - [x] Add start file `/src/index.js`
 - [x] Add dev script
 - [x] Config debugger 
 - [x] Add resources 

### 2. Express
 - [x] Install express `npm i express`
 - [x] Init express server
 - [x] Setup static middleware
 - [x] Add body parser
 - [x] Add home controller
 - [x] Add route file
 - [x] Add error controller

### 3. Handlebars
 - [x] Install handlebars `npm i express-handlebars`
 - [x] Config handlebars engine
 - [x] Use handlebars engine
 - [x] Config handlebars file extension
 - [x] Set views folder
 - [x] Add home view
 - [x] Render home view without layout `res.render('home', {layout: false})`
 - [x] Fix asset path
 - [x] Add layout
 - [x] Add partial dir
 - [x] Config handlebars to work with mongoose documents `runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true}`

### 4. Database
 - [x] Install mongoose `npm i mongoose`
 - [x] Connect to database
 - [x] Error handling on connect
 - [x] Add simple user model

### 5. Register
 - [x] Fix navigation links
 - [x] Add user controller
 - [x] Add user controller to routes
 - [x] Create Register view
 - [x] Render register view
 - [x] Modify register form
 - [x] Create post route for register
 - [x] Create user service
 - [x] Redirect after successful register
 - [x] Install bcrypt `npm i bcrypt`
 - [x] Hash passwords before save
 - [x] BONUS: Check if user exists

### 6. Login
 - [x] Fix login navigation link
 - [x] Add login view
 - [x] Create get login action
 - [x] Fix login form
 - [x] Add post login action
 - [x] Add login method in userService
 - [x] Validate if user exists
 - [x] Validate password
 - [x] Install jsonwebtoken `npm i jsonwebtoken`
 - [x] Generate token
 - [x] Call userService from userController
 - [x] Send token as cookie
 - [x] Redirect to home page
 - [x] BONUS: Extract jwt secret to constant or env
 - [x] Auto login on register

### 7. Logout
 - [x] Add logout navigation link
 - [x] Add logout action

### 8. Authentication
 - [x] Install and use cookie-parser `npm i cookie-parser`
 - [x] Create auth middleware
    - [x] Allow if guest (no token)
    - [x] Verify token(cleat session if invalid)
    - [x] Attach decoded token to req.user ( if token is valid)
 - [x] Use auth middleware


### 9. Authorization
 - [x] Create isAuth middleware
 - [x] Create isGuest middleware
 - [x] Add route guards

### 10. Dynamic content
 - [x] Add user data to handlebars context
 - [x] Dynamic navigation
 - [x] Dynamic titles
 - [x] Bonus: Set pageTitle from view
 - [x] Add not found page

### 11. Error handler and validation
 - [x] Add error message in notification
 - [x] Notification conditional rendering
  -[x] Create getErrorMessage util function
 - [x] Add error handling for register
 - [x] Add register form data persistance
 - [x] Check repeat password in service
 - [x] Bonus: check repeatPassword in model
 - [x] Error handling on login

### Bonus
 - [x] Export helpers into separate module
 - [x] Add env variable for debugging
 - [x] Add global error handler
 - [] Add bundler
 - [] Use async jwt
 - [] Refresh token

## Steps to use the skeleton project
 - [x] Install dependencies `npm i`
 - [x] Remove old resources and add new resources `/src/public`
 - [x] Add html files to the views folder
 - [x] Rename database name
 - [x] Replace layout
    - [x] Dynamic title
    - [x] Fix resources routes
    - [x] Error notification
    - [x] Body
    - [x] Dynamic navigation
 - [x] Replace home page
 - [x] Modify navigation links
 - [x] Modify user model
 - [x] Modify login and register controller
 - [x] Modify login and register service
 - [x] Modify token generation `tokenUtils.js`
 - [x] Modify login and register error handling
 - [x] Replace login page
 - [x] Replace register page
 - [x] Replace 404 page

## Solve Mind blog exam prep

### Create Blog page
 - [x] Fix craete blog navigation link
 - [x] Add blog controller
 - [x] Add controller to routes
 - [x] Add create action with render
 - [x] Add blogs folder in views
 - [x] Add create blog view
 - [x] Add blog model
 - [x] Fix create blog form
 - [x] Modify create blog form
 - [x] Create blog post action
 - [x] Create blog service with create method
 - [x] Add owner on blog creation
 - [x] Add error handling

### Blogs Catalog Page
 - [x] Fix navigation link
 - [x] Add catalog view
 - [x] Get catalog action with static blocks
 - [x] Get all blogs service
 - [x] Show dynamic blogs

### Home page blogs
 - [x] Add get latest blogs in blog service
 - [x] Show dynamic latest blogs on home

### Blog details
 - [x] Fix details link in blogs page
 - [x] Fix details link in home page
 - [x] Show static detail page
 - [x] Add getOne method in blog service
 - [x] Show dynamic detail page (without author and followers)
 - [x] Show dynamic author
 - [x] Show edit and delete button if author
 - [x] Show follow and already following buttons if logged
 - [x] Implement follow functionality
   -[x] Add followers in block relation
   -[x] Add follow action
   -[x] Add follow service method
   -[x] Fix follow link
 - [x] Show dynamic followers
 - [x] Show follow button or already following buttons conditionally

### Delete blog
 - [x] Fix navigation link in details
 - [x] Add delete action
 - [x] Add delete method in blog service

### Edit blog
 - [x] Fix navigation link in details
 - [x] Add get edit action
 - [x] Show empty edit page
 - [x] Populate edit form with blog data
 - [x] Add post edit action
 - [x] Add edit method in blog service
 - [x] Add error handling

### BONUS
 - [] Fix sort(_id) problem 

