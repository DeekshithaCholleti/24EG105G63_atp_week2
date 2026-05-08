// Array Method: reduce()
// Purpose: Calculates the total value of all items in the cart.
//  3. Use reduce() to calculate grand total cart value
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let som=cart.reduce((acc,stdobj)=>{
    return stdobj.price*stdobj.quantity
},0)
console.log(som)