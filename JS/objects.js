const person = {
    name: 'Edgar',
    age: 25,
    address: '1408 sw 47th Fl',

}

// console.log('person is called:', person.name)
// console.log('person is called:', person['name'])

// console.log(`my name is ${person.name} and 

// im this old: ${person.age}`)

//different example, same thing as below

//const name = person.name
//const age = person.age
const {name,age} = person

console.log(`my name is ${person.name} and 

im this old: ${person.age}`)