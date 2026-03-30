// Задание 1. Аналог range

function rangeJS(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}
console.log("Задание 1:");
console.log(rangeJS(3, 8)); // [3, 4, 5, 6, 7]

// Задание 2. Трансформация массива
const numbers = [2, 5, 8, 12, 3];
let squares = [];
for (let num of numbers) {
    squares.push(num * num);
}
console.log("Задание 2:");
console.log("Квадраты:", squares); // [4, 25, 64, 144, 9]
let sum = 0;
let i = 0;
while (i < numbers.length) {
    sum += numbers[i];
    i++;
}
console.log("Сумма:", sum); // 30

// Ответ на вопрос
console.log("Метод для добавления элемента в конец массива: push()");


// Задание 3. Жизнь циклов

function drawPyramid(height) {
    for (let i = 1; i <= height; i++) {
        console.log("#".repeat(i));
    }
}
console.log("Задание 3:");
drawPyramid(3);


// Задание 4. Фильтрация
const students = [
    { name: "Макар", role: "teamlead", exp: 5 },
    { name: "Денис", role: "programmer", exp: 4 },
    { name: "Анна", role: "programmer", exp: 2 },
    { name: "Даша", role: "designer", exp: 1 }
];

function getExperienced(studentsList, minExp) {
    let result = [];
    for (let student of studentsList) {
        if (student.exp >= minExp) {
            result.push(student.name);
        }
    }
    return result;
}
console.log("Задание 4:");
console.log(getExperienced(students, 3)); // ["Макар", "Денис"]

// Контрольные вопросы
console.log("\nKoнтpoльныe вопросы:");
console.log("1. let - переменная, значение которой можно менять; const - константа, значение которой нельзя переназначить.");
console.log("2. B JavaScript нельзя писать for i in range(5), потому что это синтаксис Python. B JS используется другой синтаксис цикла: for (let i = 0; i < 5; i++). Если написать Python-синтаксис, будет ошибка.");
console.log("3. Метод массива, который заменяет append в Python: push().");