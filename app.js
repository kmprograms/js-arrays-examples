// ------------------------------------------------------------------------------------
// ZNAJDOWANIE POZYCJI NAJWIEKSZEGO ELEMENTU W TABLICY LICZB
// ------------------------------------------------------------------------------------
const numbers = [12, 43, 55, 12];
const idx = numbers.indexOf(Math.max(...numbers));
console.log(idx);

// ------------------------------------------------------------------------------------
// ZNAJDOWANIE POZYCJI NAJWIEKSZEGO ELEMENTU W TABLICY OBIEKTOW
// ------------------------------------------------------------------------------------
const people = [
    { name: 'ANDY', age: 10 },
    { name: 'JOHN', age: 15 },
    { name: 'SAM', age: 22 },
    { name: 'JIM', age: 11 }
];

// ZNAJDZ W TABLICY POZYCJE NAJSTARSZEJ OSOBY

// sposob 1
const maxAgeIndex = people.reduce(
    (maxIdx, person, idx, original_people) =>
        person.age > original_people[maxIdx].age ? idx : maxIdx, 0);
console.log(`MAX AGE INDEX = ${maxAgeIndex}`);

// sposob 2
const maxEntry = people
    .map((person, index) => [index, person])
    .sort((entry1, entry2) => {
        if (entry1[1].age > entry2[1].age) {
            return -1;
        } else if (entry1[1].age < entry2[1].age) {
            return 1;
        }
        return 0;
    })[0];
console.log(maxEntry);

// ------------------------------------------------------------------------------------
// KILKA INNYCH PRZYKLADOW OPERACJI NA TABLICACH
// ------------------------------------------------------------------------------------

// a. konwersja tablicy napisow do tablicy liczb
const numbersAsString = ['11', '22', '33'];
console.log(numbersAsString.map(Number).reduce((x, y) => x + y, 0));
console.log(numbersAsString.map(x => +x).reduce((x, y) => x + y, 0));

// b. range
// console.log([... Array(6 - 2 + 1).keys()]);
const range = (min, max) => [... Array(max - min + 1).keys()].map(i => i + min);
console.log(range(-2, 2));
console.log(range(2, 6));

// c. partycjonowanie
// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
const partition = (arr, condition) =>
    arr.reduce((acc, i) => (acc[condition(i) ? 0 : 1].push(i), acc), [[], []]);
const condition = x => x > 5;
const partitions = partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], condition);
console.log(partitions);
