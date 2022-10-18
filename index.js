// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

function filterOutOdds() {
    return [...arguments].filter( num => num % 2 === 0)
}

const findMin = function() {
    return [...arguments].reduce( (prev, curr) => (curr < prev) ? curr : prev )
}

const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2}
}

const doubleAndReturnArgs = function(arr, ...args) {
    return [...arr, ...args.map(num => num * 2)]
}

const removeRandom = (items) => {
    const rand = Math.floor(Math.random() * items.length);
    return [...items.slice(0, rand), ...items.slice(rand + 1)]
}

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => {
    const newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

const removeKey = function (obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
}

const combine = function(obj1, obj2) {
    return { ...obj1, ...obj2}
}

const update = function(obj, key, val) {
    const newObj = { ...obj};
    newObj[key] = val;
    return newObj;
}