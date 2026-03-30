import { calculateAverage } from "./functions/calculateAverage.js";
import { findTopStudent } from "./functions/findTopStudent.js";
import { filterFailed } from "./functions/filterFailed.js";
import { addLetterGrade } from "./functions/addLetterGrade.js";
import { getTotalScore } from "./functions/getTotalScore.js";
import { countPassed } from "./functions/countPassed.js";
import { getStudentNames } from "./functions/getStudentNames.js";
import { sortByScore } from "./functions/sortByScore.js";
import { findByName } from "./functions/findByName.js";

// Общие данные (не менять)
const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

// Итоговый вывод (собирает Макар)

console.log("Средний балл:", calculateAverage(grades)); // Денис
console.log("Лучший студент:", findTopStudent(grades)); // Сережа
console.log("Должники:", filterFailed(grades, 60)); // Дима Л
console.log("С оценками:", addLetterGrade(grades)); // Никита
console.log("Сумма баллов:", getTotalScore(grades)); // Кирилл
console.log("Сдавшие:", countPassed(grades, 60)); // Костя
console.log("Имена:", getStudentNames(grades)); // Дима В
console.log("Сортировка:", sortByScore(grades)); // Артур
console.log("Поиск:", findByName(grades, "Макар")); // Денис Г