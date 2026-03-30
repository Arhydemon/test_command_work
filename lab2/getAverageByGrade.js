export function getAverageByGrade(students) {
    const result = {};

    for (let student of students) {
        const grade = student.grade;

        if (!result[grade]) {
            result[grade] = {
                total: 0,
                count: 0
            };
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
