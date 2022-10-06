const subtotal = 17.24
const taxrate = 0.07

function calculatesalestax(subtotal, taxrate) {
    return subtotal * taxrate
}

const taxtotal = calculatesalestax(subtotal, taxrate)

const total = subtotal + taxtotal

console.log('subtotal $', subtotal.toFixed(2))
console.log('tax      $', taxtotal.toFixed(2))
console.log('-----------------')
console.log('total    $', total.toFixed(2))
