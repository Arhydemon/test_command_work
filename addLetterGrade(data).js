const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function addLetterGrade(data) {
    return data.map(student => {
        const { score } = student;
        let letter;

        if (score >= 90) {
            letter = 'A';
        } else if (score >= 75) {
            letter = 'B';
        } else {
            letter = 'C';
        }

        return { ...student, letter };
    });
}

const gradesWithLetters = addLetterGrade(grades);
