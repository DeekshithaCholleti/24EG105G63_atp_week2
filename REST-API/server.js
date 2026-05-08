/**
 * REST API Server using Express
 * This server handles CRUD operations for Users and Products.
 * Includes routes for GET, POST, PUT, and DELETE requests.
 */
import exp from "express";
const app=exp();//creates an express application
//use body passer middledware
app.use(exp.json())
//set a port number
const port=3000
//assign port number to HTTP Server
app.listen(port,()=>console.log(`server listening  port ${port} ...`))

//Create API(REST API REpresentational State Transfer) //NOUNS
// app.METHOD(path,request handler)
  // Route tohandle GET req of client(http://localhost:3000/users)
  //test data(stored on RAM)(replace this test data with DB)
  let users=[]
  app.get('/users',(req,res)=>{
     //read all users
     res.json({message:"allusers",payload:users})
  })
  //Route to handle POST req of client
  app.post('/users',(req,res)=>{
    //get users from client 
    const newUser=req.body
    //push user into users
    users.push(newUser)
    //send res
    res.json({message:"user created"})
  }
    )
   //Route to handle PUT req of client
   app.put('/users',(req,res)=>{
    //get modified user from client {}
    let modifiedUser=req.body;
    //get index of existing user in users array
    let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
    if(index==-1){
        return res.json({message:"User not found"})
    }
    //update user in array
    users.splice(index,1,modifiedUser)
    //send res
    res.json({message:"user updated"})

    })

    //Route to handle DELETE req of client
    app.delete('/users/:id',(req,res)=>{//here :/id acts as parameter which gets argument from client request
    //get id of user from url parameter
    let idOfUrl=Number(req.params.id)//{id:'2',is id is parameter}
    //find index of user
    let index=users.findIndex(userObj=>userObj.id===idOfUrl)
    if(index===-1){
        return res.json({message:"user not found in array"})
    }
    // //delete user 
    users.splice(index,1)
    // //send res
    res.json({message:"user deleted"})
    })
    //route
    app.get("/users/:id",(req,res)=>{
        //get id of url
       let idOfUrl=Number(req.params.id)
       //find user
       let user=users.find(userObj=>userObj.id===idOfUrl)
       //if user
       if(user===undefined){
        res.json({message:"user not found"})
       }
       res.json({message:"a user",payload:user})

    })






    //Create product API with below operations
     let products=[]
     app.get('/products',(req,res)=>{
        res.json({meassage:"products",payload:products})
     })
    //Create new product({productId,name,brand,price})
   app.post('/products',(req,res)=>{
    //get pro details by url 
    let pro=req.body
    //push them (create product)
    products.push(pro)
    res.json({message:"product created"})
   })
    //Read all products
    app.get('/products',(req,res)=>{
        res.json({meassage:"products",payload:products})
     })
    //Read all products by brand
    app.get('/products/:proBrand',(req,res)=>{
        //get pro brand using url parameter
        let pB=req.params.proBrand
        //get pro details
        let product=products.filter(objPro=>objPro.proBrand===pB)
        //check if pro exists
        if(product.length===0){
            //not found
            res.json({message:"No product with required"})
        }
        //read product details
        res.json({message:"Product found",payload:product})
    })
    //Update a product
    app.put('/products',(req,res)=>{
        //get product details which needed to be modified
        let prod=req.body;
        //get index of the product which is needed to be modified
        let index=products.findIndex(objPro=>objPro.id===prod.id)
        //check id of that modPro
        if(index===-1){
            //not found
           return  res.json({message:"no pro with that id"})
        }
        //found update
        products.splice(index,1,prod)
        res.json({message:"updated"})

    })
    //Delete a product by id
   app.delete('/products/:id',(req,res)=>{
    //get product id from url parameter to delete
    let deleteProduct=Number(req.params.id);// here Number method helps converting id:'1' to id:1
    //find index of product
    let index=products.findIndex(objPro=>objPro.id===deleteProduct)
      //check wheather the id exists to delete
    if(index===-1){
       return res.json({message:"no product with that id to delete"})
    }
    //delete product
    products.splice(index,1)
    res.json("Product deleted")
   })
   
   