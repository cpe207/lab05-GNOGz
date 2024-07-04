// define interface for Student object
/* Your code here */
interface Student{
  name : string;
  score : number;
}
function findTopNames(students:Student[]):string[] {
  let student_list:string[]  = students.filter((x)=>x.score > 8 ? true:false).map(x=>x.name);
  return student_list
}

const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
