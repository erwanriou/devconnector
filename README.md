DEVCONNECTOR - Express/MongoDB/React/Redux

## Table of Contents

* [Create your keys.js](#create-keys.js)
* [iniciate the project](#Initiate-the-project)
* [How it Work](#[How-it-Work)
* [Back End](#[Back-end)
* [Middleware](#[Middleware)
* [Front End](#[Front-end)

## Create your keys.js

* clone the repository
* you first need to create a file keys.js that you will put in the config folder
* cd config
* touch keys.js
* then add the folowing content

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

* npm install
* npm i --save concurrently
* cd client
* npm install
* Launch both servers with 'npm run dev' on repository root
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
* Middleware is managed by Redux. it is taking care of the main property as users, profiles and post. Its ensure each actions made that impact these property are dispatched and updating the cycle. Fetching each element properly from the backend.

## Front End
* The frontend is made with React and component organization. We devide theses component in various categories
* layout component are the ones displayed on start. On most, you can considere them as statical component and they are public
* common component aren't displaying any UI but are helping other component to generate other UI component easelsy.
* Auth component regroup all component that are needed about authentification
* Dashboard component regroup all component about the dashboard profile of each users
