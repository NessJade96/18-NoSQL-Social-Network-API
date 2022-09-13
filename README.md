# 18-NoSQL-Social-Network-API

## Description

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## User Setup:

To use this at home, in your terminal run the following commands to invoke the application: `npm i` to install packages,`npm run seed` seeds the mongoDB, then `npm run start` starts the live server.

## User story:

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria (delete before submitting!!)

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Screenshots:

![image](./assets/images/)

## Links:

-   GitHub: https://github.com/NessJade96/18-NoSQL-Social-Network-API
-   Walkthrough video:

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

4. Added the reaciton api requests to the thought controllers.
