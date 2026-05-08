// Array Method: filter()
// Purpose: Filters an array of products to find those that are in stock.
//  1. Use filter() to get only inStock products
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let r=cart.filter(el=>el.inStock===true)
console.log(r)
