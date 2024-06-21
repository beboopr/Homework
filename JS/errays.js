
// console.log('My fruits are:', fruits)
// console.log('the first fruits is:', fruits[0])
// console.log('the second fruits is:', fruits[1])

// return the fruit at position i from the erray
// function getFruit(index) {
//     return fruits[index]
// }
// console.log(`I have ${fruits.length} fruits in my list`)
// console.log(getFruit(2))
// console.log(getFruit(3))
// console.log(getFruit(4))
// console.log(getFruit(1))

let playersNumbers = [12,21,34,45,56]
//console.log(playersNumbers[0] + playersNumbers[2])

let Students = [
    {
        name:'bob',
        age: '25',
    },
    {
        name: 'Ed',
        age:'20',
    },
];

// const firstStudents = Students[0]

// console.log(firstStudents)
// console.log(Students[1])

// const {name,age} = Students[0]
// console.log(`first students name is: ${name} and they are ${age} years old`)

// const sentence = 'Helllo Boca Code'
// console.log(sentence.length)
// const arrayofwords = sentence.split(' ')
// console.log(arrayofwords)
// console.log(`there are ${arrayofwords.length} number of words`)

let fruits = ['bananas','berry','apple','kiwi','grape',];
console.log(fruits)
fruits.push('grape')
console.log(fruits)
const oldfruits = fruits.pop() // removes from the end (right)
console.log(oldfruits)
console.log(fruits)

const oldfruits2 = fruits.shift() // removes from the front (first, or left)
 console.log(fruits)

fruits.unshift('kiwi')
// fruits.unshift('fig')
// console.log(fruits)

// fruits = ['tomatos',...fruits,'dragon fruits'] // spread operator allows to add at the ends
// console.log(fruits)

// console.log(fruits.indexOf('bananas'))

console.log(`my fruits are ${fruits.join(', ')}`)