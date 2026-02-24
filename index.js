const express = require('express');

const app = express();

const PORT = 3000;

//middleware to parse json bodies
app.use(express.json());

//in-memory Database (Using array)
let foodMenu = [
  {id:1, menu_category:"Popular", menu: "Jollof Rice & Fried Chicken", price:"N3,500"},
  {id:2, menu_category:"Swallow & Soup", menu: "Eba & Egusi Soup (Goat Meat)", price:"N4,500"},
  {id:3, menu_category:"Jollof Rice & Entrees", menu: "Jollof Rice, Smoked Chicken & plantain", price:"N3,800"}
];


// -- APIs --

//1. FOOD/MENU API
// Return list Of Food Items
app.get('/foods',(req, res) => {
  res.status(200).json(foodMenu);
});

//Add Food Items (Admin simulation)
app.post('/foods',(req, res) =>{console.log(req.body);
  const newFoodMenu = {
    id:foodMenu.length +1,
    menu_category:req.body.menu_category,
    menu:req.body.menu,
    price:req.body.price
  };

  foodMenu.push(newFoodMenu);
  res.status(201).json(newFoodMenu);
});


//2. Adding Meal To Cart API
//Add Meal To Cart
app.post('/orders',(req, res) =>{console.log(req.body);
  const newFoodMenu = {
    id:foodMenu.length +1,
    menu_category:req.body.menu_category,
    menu:req.body.menu,
    price:req.body.price
  };

  foodMenu.push(newFoodMenu);
  res.status(201).json(newFoodMenu);
});


//3. CLEAR CART API
app.delete('/clear-cart/:id',(req, res) =>{
  const menuId = parseInt(req.params.id);
  foodMenu = foodMenu.filter(menu=>menu.id !== menuId);
  res.send({message:'successfully cleared cart!'});
});


app.listen(PORT,()=>{
  console.log(`server is running at port ${PORT}`);
});