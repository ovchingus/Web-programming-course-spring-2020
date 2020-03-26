const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

// Реализуйте функцию isEquivalent

console.log('Task 3')
console.log('expected: true, ' + 'get: ' + isEquivalent(object1, object2)); // true
console.log('expected: true, ' + 'get: ' + isEquivalent(object1, object3)); // false

function isEquivalent(o1, o2) {
	if (typeof o1 === 'object' && typeof o1 === 'object') {
		return JSON.stringify(o1) === JSON.stringify(o2)
	}

	else return null
}