var shoppingList = [
    {
        id: 1,
        name: "Milk",
        price: 2
    },
    {
        id: 2,
        name: "eggs",
        price: 1.50
    },
    {
        id: 3,
        name: "pizza rolls",
        price: 10
    },
    {
        id: 4,
        name: "beef",
        price: 4
    },
    {
        id: 5,
        name: "strawberries",
        price: 2
    },
    {
        id: 6,
        name: "buns",
        price: 9
    },
    {
        id: 7,
        name: "condiments",
        price: 3
    }
];

//console.log(shoppingList)

// const addToShoppingList = (foodObject) => {
//     const lastIndex = shoppingList.length - 1
//     const currentLastFood = shoppingList[lastIndex]
//     const maxId = currentLastFood.id
//     const idForNewFood = maxId + 1

//     foodObject.id = idForNewFood
//     shoppingList.push(foodObject)
// }

// const newFood = {
//     name: "potato",
//     price: 3
// }

// addToShoppingList(newFood)
// console.log(shoppingList)



for (const expensive of shoppingList) {
    if (expensive.price > 8) {
        console.log(expensive)
    }
}

// After you wrote the initial, high-priority list of items you need to buy at the supermarket, you realize that there are lower-priority ones, and then there downright "wants".

// You realize that the list might get very long, and you don't want to keep track of the primary key for each object that gets added to your shopping list.

// Write a function named addToShoppingList that will add a new grocery item to your array. The function should add an id property to the grocery object that you provide as an argument when the function is invoked.

// Also add a dateCreated property to the object whose value will be the current date and time.

// Use your function to add 5 new items to your shopping list with a variety of prices ranging from $4 to $16.


//add grocery object to shopping list array using push method
//create parameter to add id property
//use dot notation to add dateCreated property