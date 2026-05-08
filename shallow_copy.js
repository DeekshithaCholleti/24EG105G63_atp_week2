/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/
// Original user object
const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

// Creating a shallow copy using spread operator
let cpuser={...user}

// Changing a top-level property (only affects the copy)
cpuser.name="roja"     

// Changing a nested property (affects both original and copy)
cpuser.preferences.theme="light"

console.log("Original User:", user)
console.log("Shallow Copied User:", cpuser)

// Note: Top-level properties are copied by value, but nested objects are copied by reference.

