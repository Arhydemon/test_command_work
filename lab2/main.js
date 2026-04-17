import { findTopStudent } from "./findTopStudent.js"; // Сережа ГОТОВО
import { filterFailed } from "./filterFailed.js"; // Дима Лубченко ГОТОВО
import { countPassed } from "./countPassed.js"; // Костя ГОТОВО
import { getStudentNames } from "./getStudentNames.js"; /// Дима Вологин ГОТОВО

// Общие данные (не менять)
const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// Итоговый вывод

console.log("Лучший студент:", findTopStudent(grades)); // Сережа не вайб кодер ГОТОВО
console.log("Должники:", filterFailed(grades, 60)); // Дима Лубченко ГОТОВО
console.log("Сдавшие:", countPassed(grades, 60)); // Костя ГОТОВО
console.log("Имена:", getStudentNames(grades)); // Дима Вологин ГОТОВО
