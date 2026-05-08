# Week 2 - Advanced JavaScript & REST APIs

This week covers ES6+ features, advanced array methods, and building backend services with Express.

## Topics Covered

- **Array & Object Operations**: Using the spread operator for copying and extending data.
- **Deep vs Shallow Copy**: Understanding memory references and how to safely clone objects.
- **Array Methods**: Practical use of `map`, `filter`, `reduce`, `find`, and `findIndex`.
- **Classes**: Creating reusable blueprints with properties and methods.
- **Backend Development**: Setting up a Node.js server with Express and building RESTful endpoints.

## File Overview

### JavaScript Basics & ES6
- `Copy.js` & `Copy & Extend an Array.js`: Examples of using spread `...` to copy arrays.
- `Shallow Copy.js`: demonstrating how nested objects behave during a shallow copy.
- `Deep Copy.js`: using `structuredClone` for complete object isolation.
- `Update User Object.js`: updating object properties while keeping the original intact.
- `Create a Book.js`: A simple Class example to manage library books.

### Array Methods
- `map.js`: Transforming data into a new format.
- `filter.js`: Extracting specific items based on a condition.
- `reduce.js`: Combining array elements into a single value (total price).
- `find.js`: Locating a specific item in an array.
- `findIndex.js`: Getting the position of an item.

### REST API (in /REST-API)
- `server.js`: The main Express server handling User and Product data.
- `11backend.js`: Notes and steps for setting up a backend from scratch.
- `req.http`: Test file for checking API endpoints using the REST Client.

## How to run the API
1. Navigate to the `REST-API` folder.
2. Run `npm install` to get dependencies.
3. Run `node server.js` to start the server.
4. Use `req.http` to test the routes.
