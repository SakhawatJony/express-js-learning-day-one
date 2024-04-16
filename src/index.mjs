import express, { request, response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.status(201).send({ mes: "Day one Express js" });
});

const mockProducts = [
    {
      id: 1,
      name: "Laptop",
      brand: "Apple",
      price: 1500,
      rating: 4.5,
      variants: [
        {
          color: "Silver",
          stock: 10,
        },
        {
          color: "Space Gray",
          stock: 5,
        },
        {
          color: "Gold",
          stock: 3,
        },
      ],
    },
    {
      id: 2,
      name: "Smartphone",
      brand: "Samsung",
      price: 800,
      rating: 4.3,
      variants: [
        {
          color: "Black",
          stock: 20,
        },
        {
          color: "White",
          stock: 15,
        },
        {
          color: "Blue",
          stock: 8,
        },
      ],
    },
    {
      id: 3,
      name: "Headphones",
      brand: "Sony",
      price: 100,
      rating: 4.8,
      variants: [
        {
          color: "Black",
          stock: 30,
        },
        {
          color: "White",
          stock: 25,
        },
        {
          color: "Red",
          stock: 12,
        },
      ],
    },
    {
      id: 4,
      name: "Smartwatch",
      brand: "Fitbit",
      price: 200,
      rating: 4.2,
      variants: [
        {
          color: "Black",
          stock: 18,
        },
        {
          color: "Silver",
          stock: 14,
        },
        {
          color: "Rose Gold",
          stock: 10,
        },
      ],
    },
  ]

app.get("/api/users", (request, response) => {
  response.send([
    {
      id: 1,
      userName: "Sakhwat Hosen",
      userEmail: "sakhwathosen320@gmail.com",
      userPhone: "0130020864136",
      Adress: [
        { permanetAddress: "Lakshmipur" },
        { PresentAddress: "mirpur Dhaka" },
      ],
    },
    {
      id: 1,
      userName: "Kazi Sakib",
      userEmail: "kaziSakib24gmail.com",
      userPhone: "013002033413",
      Adress: [{ permanetAddress: "Feni" }, { PresentAddress: "mirpur Dhaka" }],
    },
    {
      id: 3,
      userName: "Abu Hurain",
      userEmail: "abuhurain@gmail.com",
      userPhone: "0130020864121",
      Adress: [{ permanetAddress: "Feni" }, { PresentAddress: "mirpur Dhaka" }],
    },
  ]);
});



app.get("/api/products", (request, response) => {
  response.send(mockProducts);
});
app.get("/api/products/:id", (request, response) => {
  
console.log(request.params.id);
  const insertId = parseInt(request.params.id);
  if(isNaN(insertId))
  return response.status(400).send({msg:"Bad Request.Invalid ID"});
  const findProduct = mockProducts.find((product)=>product.id===insertId);
  if(!findProduct)return response.sendStatus(404);
  return response.send(findProduct)
});

app.listen(PORT, () => {
  console.log(`runing on port ${PORT}`);
});
