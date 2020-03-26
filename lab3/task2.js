// Реализуйте функцию sum

console.log('Task 2')
console.log('expected: 45')
console.log('get: ' + sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));


function sum() {
    if (Array.isArray(this)) {
        return this.reduce((acc, i) => acc + i, 0)
    }

    return null
}