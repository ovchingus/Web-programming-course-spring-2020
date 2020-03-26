function createCounter() {
    // Реализуйте функцию, чтобы программа вывела на консоль ожидаемый результат
    let number = 0
    return function print () {
        ++number
        return console.log(number), number
    }
}

console.log('Task 5')
console.log('expected: \n1\n2\n3\n4\n5\n')

const count = createCounter();

console.log('get: ')
count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5