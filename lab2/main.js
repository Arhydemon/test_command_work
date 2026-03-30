import { calculateAverage } from "./calculateAverage.js";
import { findTopStudent } from "./findTopStudent.js";
import { filterFailed } from "./filterFailed.js"; // готово
import { addLetterGrade } from "./addLetterGrade.js";
import { getTotalScore } from "./getTotalScore.js";
import { countPassed } from "./countPassed.js";
import { getStudentNames } from "./getStudentNames.js"; // готово
import { sortByScore } from "./sortByScore.js";
import { findByName } from "./findByName.js";
import { getAverageByGrade } from "./getAverageByGrade.js"; // готово

// Общие данные (не менять)
const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// Итоговый вывод

console.log("Средний балл:", calculateAverage(grades)); // Денис Сундуков
console.log("Лучший студент:", findTopStudent(grades)); // Сережа не вайб кодер
console.log("Должники:", filterFailed(grades, 60)); // Дима Лубченко
console.log("С оценками:", addLetterGrade(grades)); // Никита
console.log("Сумма баллов:", getTotalScore(grades)); // Кирилл
console.log("Сдавшие:", countPassed(grades, 60)); // Костя
console.log("Имена:", getStudentNames(grades)); // Дима Вологин
console.log("Сортировка:", sortByScore(grades)); // Артур
console.log("Поиск:", findByName(grades, "Макар")); // Денис Г
console.log("Средний балл по оценкам:", getAverageByGrade(addLetterGrade(grades))); // Дима Кудинов