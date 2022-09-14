# 18-NoSQL-Social-Network-API

## Description

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## User Setup:

To use this at home, in your terminal run the following commands to invoke the application: `npm i` to install packages,`npm run seed` seeds the mongoDB, then `npm run start` starts the live server.

## User story:

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Screenshots:

![image](./assets/images/)

## Links:

- GitHub: https://github.com/NessJade96/18-NoSQL-Social-Network-API
- Walkthrough video:

## planning notes:

1. Read through the assignment instructions and create the MVC folder structure.
   - set up package json and user setup instructions on starting application.
   - following the online guide provided to set up and link models (Users, Thoughts, Reactions) and API routes (GET, POST, PUT, DELETE).
   - check out the bonus questions and impliment if given time
   - ensure all criteria is complete before filming the walkthrough video.

## Commit notes:

1. Read through all planning documentation, set up file structure and begin planning notes. Created User model, with some links to userController established.

2. Thoughts and User models, routes and controllers created.

3. Reactions schema(model) created

4. Added the reaciton api requests to the thought controllers. Additionally I pushed the thought id to the user when a user creates a thought.

5. Created the add and remove friends from the user controller, removed seed data that isnt required. api/users and api/thoughts base routes are working in insomnia

\*\* okay so you need to check you have met each requirement + bonuses, then go through and seed the DB in insomnia with api calls.
Then once all checks are thorough - record walkthrough video.

THOUGHT (and REACTION schema) contorller add: Use a getter method to format the timestamp on query (createdAt) AND -
THOUGHT Schema Settings:
User controller: finish function(getSingleUser) !! still broken
