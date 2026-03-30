export function getStudentNames(data) {
    let names = [];

    for (let i = 0; i < data.length; i++) {
        names.push(data[i].name);
    }

    return names;
}
