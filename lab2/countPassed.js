export function countPassed(data, passScore) {
    let count = 0;

    for (let student of data) {
        if (student.score > passScore) {
            count++;
        }
    }

    return count;
}