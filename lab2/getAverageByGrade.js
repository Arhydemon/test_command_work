export function getAverageByGrade(students) {
    const result = {};

    for (let student of students) {
        let grade = student.grade;

        if (!grade) {
            if (student.score >= 90) grade = "A";
            else if (student.score >= 75) grade = "B";
            else grade = "C";
        }

        if (!result[grade]) {
            result[grade] = { total: 0, count: 0 };
        }

        result[grade].total += student.score;
        result[grade].count += 1;
    }

    const averages = {};

    for (let grade in result) {
        averages[grade] = result[grade].total / result[grade].count;
    }

    return averages;
}