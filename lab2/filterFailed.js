export function filterFailed(data, passScore) {
    let failed = [];

    for (let student of data) {
        if (student.score < passScore) {
            failed.push(student.name);
        }
    }

    
    return failed;
}
