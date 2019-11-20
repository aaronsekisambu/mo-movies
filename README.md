
# Mo.Movies
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/56b784ed-b2e1-4d98-88f4-eeae4f79f958/deploy-status)](https://app.netlify.com/sites/mo-movies/deploys)

A simple responsive UI/UX challenge
> Simple but powerfully made .

> # Instructions
 [Login only. Use any of the following uses to login.]()
 ```sh
 email: grace@gmail.com
 password: grace
 ```
```sh
Email: aaron@gmail.com 
password: aaron
```
```sh
Email: peter@gmail.com 
password: simon
```

Note: The front end is developed as prototype, in that case, make sure you have data in the database tables i.e [user, movies, watchedMovies](), if your running both servers locally otherwise the login will also fail 


> Evaluation Criteria:
The system must have:
Home page
- Login
- Record
- Catalog with 3 products
User Dashboard
- Profile Page
- Support for different user levels such as admin and seller page
Multiple language support
Purchase page will be available to users only

As for the backend, any technology that simulates or creates one can be used, it will not be taken into account

The recommendation is to use firebase or a simple API made in some language like php or node.

## Features
- User can login.
- Users can view movies watched.
- Users can navigate the app.
- User can view profile

## Tools
Tools used for development of this API are;
- Database: [PostgreSQL](https://www.postgresql.org)
- Framework: [ExpressJS](http://expressjs.com/)
- Code Editor/IDE: [VSCode](https://code.visualstudio.com)
- Programming language: [JavaScript(ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
- API Testing environment: [Postman](https://www.getpostman.com)


## Getting Started
1. After cloning the repository from [here](https://github.com/aaronsekisambu/mo.movies), install requirements by running this command in the root of the repo folder
```sh
    $ npm install
```

2. Create a PostgreSQL database and take note of the database configurations.

3. Make a copy of `.env.sample` and rename it to `.env`. Edit the file replacing the respective configuration values.

4. Run the following command to start the API server:
```sh
    $ npm start
```

## Running the tests

To run tests, use the following commands in your terminal to apply migrations, seed the database and then run tests
```sh
   npm test 
 ``` 


### Key Contributors
- [Aaron Sekisambu](https://github.com/aaronsekisambu)