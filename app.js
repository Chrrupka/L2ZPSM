const _ = require('lodash');
let arr = [1, 2, 3, 4, 5, 6]

console.log(_.mean( arr ))
console.log("Max: ", Math.max(...arr),"\n","Min:", Math.min(...arr))

const user = {
  name: 'Imie',
  surname: 'Nazwisko',
  allGrades: [
    {
      subjectName: 'Name1',
      grades: [5,4,3,5,2],
      weight: 3
    },
    {
      subjectName: 'Name2',
      grades: [3, 3.5, 2],
      weight: 1
    },
    {
      subjectName: 'Name3',
      grades: [4, 3, 3.5],
      weight: 5
    }
  ]
};

function findSubject(usr,weightValue){
    let result = _.find(usr.allGrades, function(obj){
        if(obj.weight === weightValue){
            return true
        }
    })
    console.log(result.subjectName)
}

findSubject(user,1)