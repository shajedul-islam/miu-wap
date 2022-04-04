function sum(aarray) {
    const filteredArray = aarray.reduce(function (sum, elem) {
        return elem > 20 ? sum + elem : sum + 0;

    }, 0);
    return filteredArray;
}

console.log(sum([1, 2, 3, 4, 5])); // Prints 0
console.log(sum([6, 7, 8, 9, 10, 11, 12, 13, 14])); // Prints 179
const getNewArray = function (array) {
    const newArray = array.filter(function (elem) {
        return elem.length >= 5 && elem.includes('a') ? elem : undefined;
    });
    return newArray;
};

console.log(getNewArray(["Hello", "isn't", "it", "a", "wonderful", "day!"])); // Prints Slim Shaddy
console.log(getNewArray(["Hello", "isn't", "it", "a", "wonderful", "day!"])); // Prints Empty List