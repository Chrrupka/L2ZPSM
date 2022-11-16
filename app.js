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


const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
    ];

function getMails(coll){
    let arr = []
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    for(const c of coll){
        if(typeof(c) === 'string' && reg.test(c)){
            arr.push(c)
        }
    }
    
    console.log(arr.sort())
}

getMails(collections)
