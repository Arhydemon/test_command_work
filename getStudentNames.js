const students = [
  { name: "Макар", role: "teamlead", exp: 5 },
  { name: "Денис", role: "programmer", exp: 4 },
  { name: "Анна", role: "programmer", exp: 2 },
  { name: "Даша", role: "designer", exp: 1 }
];
  

function getStudentNames(data) {
  let names = [];
  for (let i = 0; i < data.length; i++) {
    names.push(data[i].name);
  }
  return names;
}

console.log("\nиу:");
console.log(getStudentNames(students))