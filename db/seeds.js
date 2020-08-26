db = connect('localhost:27017/food')

db.dishes.insertMany([
    {name:"sushi" , origin:"japan" , category:"cold", likes: 0 },
    {name:"pizza" , origin:"italy" , category:"warm", likes: 0 },
    {name:"macncheese" , origin:"U.S." , category:"warm", likes: 0 },
    {name:"meatballs" , origin:"sweden" , category:"warm/cold", likes: 0 },
    {name:"hot dog" , origin:"denmark" , category:"warm", likes: 0 }
])
