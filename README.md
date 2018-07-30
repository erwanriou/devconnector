DEVCONNECTOR - Express/MongoDB/React/Redux

## Table of Contents

* [Create your keys.js](#create-keys.js)
* [iniciate the project](#Initiate-the-project)
* [How it Work](#[How-it-Work)
* [Back End](#[Back-end)
* [Middleware](#[Middleware)
* [Front End](#[Front-end)

## Create your keys.js

* you first need to create a file keys.js that you will put in the config folder
* in the config folder root - touch keys.js
* then add the folowing

```

const keys = {
  user : '<user>',
  password : ''<password>',
  secret: ''<secret>',
  url : function() {
    return `mongodb://${this.user}:${this.password}@<yourmongodburl>`
  },
  options : {
    useNewUrlParser: true,
  },
}

exports.keys = keys

```
* You will have to ensure that you have a mongoDB mlab account. Then create there a db and define a user.
* Copy the url MongoDB URI and replace it on the previous code with the correct yourmongodburl field (just the end of it).
* do the same with the user and password field that you should get when creating a user for this database
* save the file

## Initiate the project

* Download the application
* run the command npm install at the root of the project
* Launch both servers with 'npm run dev'
* You are now running the application

## How it Work

* This project have been realized for learning purpose. Its a social network for developers.
* Register your profile and start customize it. Add experience and education.
* Link your profile with github and chat with other developers
* I hope you enjoy the application!

## Back End

* The backend of this project have been realized with express and mongoDB. Mongo is a no-sql technologie that is extremly versatile.
* We create this API in order to connect with our react front-end application. Each route have a validator that check if the content is correct before sending it to the database.
* we use several middleware as bodyParser and passport to create private route and manage auth.

## Middleware
* This section is coming soon!

## Front End
* This section is coming soon!
