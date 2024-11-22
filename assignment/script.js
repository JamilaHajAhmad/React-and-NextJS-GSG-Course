// Task 2
let arrOfNums = [1,2,3,4,5,6,7,8,9,10];

const sum = arrOfNums.reduce((accumulator, current) => accumulator + current, 0);

console.log(`Sum of the array elements: ${sum}`);

const average = sum/arrOfNums.length;

console.log(`Average of the array elements: ${average}`);

// Task 3
let arrOfStrs = ['Apple', 'Orange', 'Apple', 'Grape', 'Orange', 'Banana'];

const result = (arrOfStrs) => {
    return new Set(arrOfStrs);
}

console.log(`Unique elements in the array: ${Array.from(result(arrOfStrs))}`);