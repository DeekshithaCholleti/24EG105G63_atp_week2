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
// Original list of fruits
let fruits = ["apple", "banana"];

// Using spread operator to copy 'fruits' into 'moreFruits' and adding 'orange'
let moreFruits=[...fruits,"orange"]

// Printing original array (to verify it hasn't changed)
console.log(fruits)

// Printing the new array
console.log(moreFruits)