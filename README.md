# NoSocialNetwork

## Table of Contents
- [Description](#description)
- [User Story and Acceptance Criteria](#user-story-and-acceptance-criteria)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Friends](#friends)
  - [Reactions](#reactions)
- [Walkthrough Video](#Walkthrough-Video)
- [Technologies Used](#technologies-used)
- [Citations](#citations)
- [License](#license)

## Description
NoSocialNetwork is an API for a social network web application. Use insomnia or postman to get, create, and delete users and thoughts. Users can also use post and delete routes to add or remove a friend or reaction to a thought.

## User Story and Acceptance Criteria

### User Story
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

### Acceptance Criteria
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```


## Installation
To install and use this application locally, follow these steps:

1. Clone the repository:
    ```
    git clone https://github.com/yourusername/social-network-api.git
    cd social-network-api
    ```
2. Install the dependencies:
    ```
    npm install
    ```
3. Set up a MongoDB database either locally or using a cloud provider like MongoDB Atlas.
4. Create a .env file in the root of your project and add your MongoDB connection string:
    ```
    MONGODB_URI=mongodb://localhost:27017/socialNetworkDB
    ```
5. Start the server:
    ```
    npm start
    ```
6. Use an API testing tool like Insomnia to interact with the API.

## Usage

Once the server is running, you can test the API by making requests to the defined routes. The base URL is:
```
http://localhost:3001/api
```
You can test the API endpoints using Insomnia or Postman for different operations such as creating users, adding friends, posting thoughts, and more.

## API Endpoints

### Users
* GET `/api/users` - Fetch all users.

* GET `/api/users/:userId` - Fetch a single user by their ID.

* POST `/api/users` - Create a new user.

Example JSON:
``` 
{
  "username": "newuser1",
  "email": "newuser1@example.com"
}
``` 
* PUT /api/users/:userId - Update an existing user by their ID.

* DELETE /api/users/:userId - Delete a user by their ID and remove their associated thoughts.

### Thoughts
* GET `/api/thoughts` - Fetch all thoughts.

* GET `/api/thoughts/:thoughtId` - Fetch a single thought by its ID.

* POST `/api/thoughts` - Create a new thought and associate it with a user.

Example JSON:
```
{
  "thoughtText": "This is a cool concept.",
  "username": "newuser1",
  "userId": "123a456b789c000d"
}
```

* PUT `/api/thoughts/:thoughtId` - Update an existing thought by its ID.

* DELETE `/api/thoughts/:thoughtId` - Delete a thought by its ID.

### Friends
* POST `/api/users/:userId/friends/:friendId` - Add a friend to a user's friend list.

* DELETE `/api/users/:userId/friends/:friendId` - Remove a friend from a user's friend list.

### Reactions
* POST `/api/thoughts/:thoughtId/reactions` - Add a reaction to a specific thought.

Example JSON:
```
{
  "reactionBody": "I haven't thought of that!",
  "username": "user2"
}
```

* DELETE `/api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought by its reactionId.

## Walkthrough Video
For a demonstration of the Social Network API in action, please refer to the walkthrough video below. This video demonstrates how to use the API, including how to:
* Start the server
* Test GET, POST, PUT, and DELETE routes for users, thoughts, reactions, and friends.

Link to Walkthrough Video: ![Link to walkthrough video](./assets/NoSocialNetworkAPIs.gif)

## Technologies Used
* Node.js: Server-side JavaScript runtime.
* Express.js: Web framework for routing and middleware.
* MongoDB: NoSQL database used to store user data, thoughts, and reactions.
* Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
* Insomnia: API testing tool used to interact with the API endpoints.
* JavaScript: Programming language used for server logic.

## Citations

* Mongoose. (n.d.). Finding a subdocument. Retrieved September 15, 2024, from https://mongoosejs.com/docs/subdocs.html#finding-a-subdocument

* Mongoose. (n.d.). Populate. Retrieved September 15, 2024, from https://mongoosejs.com/docs/populate.html

* Mongoose. (n.d.). Virtuals tutorial. Retrieved September 15, 2024, from https://mongoosejs.com/docs/tutorials/virtuals.html

* Mongoose. (n.d.). Aggregate API. Retrieved September 15, 2024, from https://mongoosejs.com/docs/api/aggregate.html#Aggregate()

* Mongoose. (n.d.). Subdocuments. Retrieved September 15, 2024, from https://mongoosejs.com/docs/subdocs.html

* Mongoose. (n.d.). Methods guide. Retrieved September 15, 2024, from https://mongoosejs.com/docs/guide.html#methods

* Mongoose. (n.d.). Queries. Retrieved September 15, 2024, from https://mongoosejs.com/docs/queries.html

* Mongoose. (n.d.). Mongoose guide. Retrieved September 15, 2024, from https://mongoosejs.com/docs/guide.html

* MongoDB. (n.d.). JavaScript cursor method. Retrieved September 15, 2024, from https://www.mongodb.com/docs/manual/reference/method/js-cursor/

* MongoDB. (n.d.). Link related data. Retrieved September 15, 2024, from https://www.mongodb.com/docs/manual/data-modeling/#link-related-data

* MongoDB. (n.d.). CRUD operations. Retrieved September 15, 2024, from https://www.mongodb.com/docs/manual/crud/

* MongoDB. (n.d.). Databases and collections. Retrieved September 15, 2024, from https://www.mongodb.com/docs/manual/core/databases-and-collections/

* MongoDB. (n.d.). Compass. Retrieved September 15, 2024, from https://www.mongodb.com/docs/compass/master/

* Insomnia. (n.d.). Insomnia REST. Retrieved September 15, 2024, from https://insomnia.rest/

* Mozilla Developer Network. (n.d.). Routes in Express.js. Retrieved September 15, 2024, from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

* MongoDB. (n.d.). MongoDB. Retrieved September 15, 2024, from https://www.mongodb.com/

* npm. (n.d.). Nodemon. Retrieved September 15, 2024, from https://www.npmjs.com/package/nodemon

* Node.js. (n.d.). Node.js. Retrieved September 15, 2024, from https://nodejs.org/en

* CloudConvert. (n.d.). MP4 converter. Retrieved September 15, 2024, from https://cloudconvert.com/mp4-converter

## License
MIT License

Copyright (c) 2024 bldambtn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.