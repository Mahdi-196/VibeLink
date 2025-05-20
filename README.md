# VibeLink

**VibeLink** is a dynamic social network API that enables users to share thoughts, react to posts, and manage a friend list with ease. Built on Express.js and MongoDB with Mongoose, it delivers efficient handling of unstructured data and real-time social interactions.

---

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [User Routes](#user-routes)
  - [Friend Routes](#friend-routes)
  - [Thought Routes](#thought-routes)
  - [Reaction Routes](#reaction-routes)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mahdi-196/vibelink.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd vibelink
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Ensure MongoDB is installed and running on your machine.**
   Refer to the MongoDB Installation Guide.

## Usage

1. **Seed the Database:**
   Run the seed script to pre-populate the database with sample users, a thought, and a reaction.
   ```bash
   npm run seed
   ```
   **Seeded Data Output:**
   - mahdi: ID 67de2e1ec71309794fecda8f
   - alice: ID 67de2e1ec71309794fecda90
   - bob: ID 67de2e1ec71309794fecda91
   - mahdi’s Thought: ID 67de3bf608fba0951b25c134
   - Seeded Reaction: ID 67de3bf608fba0951b25c136

2. **Start the Server:**
   ```bash
   npm run dev
   ```
   Verify the terminal output confirms that the server is running on port 3001.

3. **Test the API Endpoints using Insomnia, Postman, or your preferred API testing tool.**

## API Endpoints

### User Routes
- **GET /api/users**  
  Retrieve all users.
- **GET /api/users/:userId**  
  Retrieve a single user by ID (populated with thoughts and friend data).
- **POST /api/users**  
  Create a new user.  
  *Sample JSON:*
  ```json
  {
    "username": "lernantino",
    "email": "lernantino@gmail.com"
  }
  ```
- **PUT /api/users/:userId**  
  Update a user by ID.
- **DELETE /api/users/:userId**  
  Delete a user by ID (and optionally remove associated thoughts).

### Friend Routes
- **POST /api/users/:userId/friends/:friendId**  
  Add a friend to a user's friend list.
- **DELETE /api/users/:userId/friends/:friendId**  
  Remove a friend from a user's friend list.

### Thought Routes
- **GET /api/thoughts**  
  Retrieve all thoughts.
- **GET /api/thoughts/:thoughtId**  
  Retrieve a single thought by ID.
- **POST /api/thoughts**  
  Create a new thought and push its ID to the associated user's thoughts array.  
  *Sample JSON:*
  ```json
  {
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
  }
  ```
- **PUT /api/thoughts/:thoughtId**  
  Update a thought by ID.
- **DELETE /api/thoughts/:thoughtId**  
  Delete a thought by ID.

### Reaction Routes
- **POST /api/thoughts/:thoughtId/reactions**  
  Create a reaction stored in a thought’s reactions array.  
  *Sample JSON:*
  ```json
  {
    "reactionBody": "Awesome thought!",
    "username": "alice"
  }
  ```
- **DELETE /api/thoughts/:thoughtId/reactions/:reactionId**  
  Remove a reaction by its reactionId.

## Walkthrough Video

A full walkthrough video demonstrating the functionality of the VibeLink API is available here:  
[Watch Walkthrough Video](https://drive.google.com/file/d/1vyRsBXkJCnk0YdISoKJdak4xQbgbeeCR/view)

## License

MIT
