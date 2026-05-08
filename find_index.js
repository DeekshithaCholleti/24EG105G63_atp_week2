// Array Method: findIndex()
// Purpose: Finds the index of a specific product (Keyboard) in the cart array.
//5. Use findIndex() to find the position of "Keyboard"
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let r=cart.findIndex(stdObj=>stdObj.name==="Keyboard")
console.log(r)