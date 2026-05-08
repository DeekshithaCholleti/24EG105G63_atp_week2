/*Exercise 1: Copy & Extend an Array

                        Goal: Learn array copying with spread
                        
                        You are given:
                                let fruits = ["apple", "banana"];
                        
                        
                        Tasks
                              -> Create a new array moreFruits
                              
                              -> Copy all fruits from fruits
                              
                              -> Add "orange" at the end using spread
                              
                              -> Print both arrays
                        clear

                        
                        ✅ Expected Output
                              ["apple", "banana"]
                              ["apple", "banana", "orange"]
                        
                        👉 Original array should NOT change.

*/
// Original array of fruits
let fruits = ["apple", "banana"];

// Creating a new array using spread operator and adding a new element
let moreFruits=[...fruits,"orange"]

// Displaying the original array (remains unchanged)
console.log(fruits)

// Displaying the new extended array
console.log(moreFruits)