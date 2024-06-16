// <!-- 1.Imagine you have two arrays, the first is a shopping list =
// [ ‘eggs’, ‘milk’, ‘wine’, ‘bread’, ‘crackers’ ]
// The second list is what you actually have in your shopping cart =
// [‘’chips, ’candy’, ’milk’, ’crackers’]
// Create a new array that contains all items in shopping list that are not in cart -->

const shoppingList = ["eggs","wine","beer","water"]
const cartList = ["wine","water"]

function hybrid(list,cart) {
    let newList = []
    for(let i = 0; i < list.length; i++) {
        if(!cart.includes(list[i])) {
            newList.push(list[i])
        }
    }
    return newList
}