// File: 11backend.js
// Purpose: Notes and step-by-step guide for setting up a Node.js/Express backend.
// steps to create backend
/*1)Generate package.json file
npm init -y
(description,main,type changed)
2) create http server
      -Install  Express module
      npm install express
      -  Import express module




      {
    //send res to client
    res.json({message:"This res for get users req"})
  }
      
      
      
      
      
    POST,PUT request contains body but GET,delete doesn't have body but in url we mention id to specify which user to access
   POST,PUT WILL SEND THE REQUEST AS BODY OF THE OBJ
   GET,DELETE DON'T SUPPORT OBJ OF REQUEST OBJ
   SO THAT THIS 2 REQUESTS END DATA THROUGH ENDPOINT 
   no space b/w url and content-type in req.http
   when client pass any parameter in url then it takes it as string
   app.get('/users',(req,res)=>{
     //read all users
     res.json({message:"allusers",payload:users})
  })
     
  
  
    "proId":2,
    "proName":"Shampoo",
    "proBrand":"SS",
    "price":150
  
  
    "proId":1,
    "proName":"Face WASH",
    "proBrand":"CC",
    "price":150
  
  
  
  
  */