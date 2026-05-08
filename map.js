// Array Method: map()
// Purpose: Creates a new array with product names and their total prices.
//  2. Use map() to create a new array with:  { name, totalPrice }
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
let a=[]
let r=cart.map(cartObj=>{
    return [cartObj.name,cartObj.price*cartObj.quantity]
})
console.log(r)