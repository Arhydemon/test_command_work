const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_Х", score: 45 },
];

function countPassed(data, passScore) {
    let count = 0;
    for (let student of data) {
        if (student.score > passScore) {
            count++;
        }
    }
    return count;
}