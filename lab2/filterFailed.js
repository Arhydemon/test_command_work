function filterFailed(data, passScore) {
    let failedStudents = [];

    for (const student of data) {
        if (student.score < passScore) {
            failedStudents.push(student.name);
        }
    }

    return failedStudents;
}