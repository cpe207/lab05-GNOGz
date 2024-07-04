function findTopNames(students) {
    var student_list = students.filter(function (x) { return x.score > 8 ? true : false; }).map(function (x) { return x.name; });
    return student_list;
}
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
