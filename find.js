// Array Method: find()
// Purpose: Finds a specific product (Mouse) in the cart array.
//  4. Use find() to get details of "Mouse"
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let r=cart.find(el=>el.name==="Mouse")
console.log(r)