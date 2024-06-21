// 1. do something / no parameters

function sayhello() {
 console.log('Hello')
}

sayhello()

// 2. do something / with parameters

function greetperson(name) {
    console.log(`Hello ${name}. Welcome`)
}

greetperson('Gianna')
greetperson('Ed') 

// 3. return something / no parameters

function addtwoplustwo() {
    return 2 + 2
}

console.log(addtwoplustwo)

//or

const answer = addtwoplustwo()
console.log('answer: ', answer)

//4. return something / with parameters

function doubleMynumber(number) {
    return number * 2
}

console.log(doubleMynumber(17))