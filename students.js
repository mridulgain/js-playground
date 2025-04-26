
const util = require('util');
const students = [
    {name: 'John', age: 12, class: '5', section: 'A'},
    {name: 'Jane', age: 13, class: '5', section: 'B'},
    {name: 'Michael', age: 14, class: '5', section: 'A'},
    {name: 'Emily', age: 13, class: '5', section: 'B'},
];

console.table(students);


// %s(string)
for (let i = 0; i < students.length; i++){
    // if 1st student show the keys
    if (i == 0){
        formatted_keys = ""
        for (let key in students[i]){
            formatted_keys += util.format("%s\t", key);
        }
        console.log(formatted_keys);
    }
    // show the values
    formatted_values = ""
    for (let key in students[i]){
        formatted_values += util.format("%s\t", students[i][key]);
    }
    console.log(formatted_values);
}

// numbers 
// printing, formatted printing
// if else condition
// for loop, while loop

// call backs

hello(printName)


function hello(callback){
    setTimeout(() => {
        console.log("Hello world");
        callback();
    }, 3000);
    // console.log("Hello world");
}

function printName(){
    console.log("My name is John");
}

// API call
// file read/write
// db calls


let roll = [1,2,3,4];


roll.forEach((e,i,arr)=>{
    arr[i] = e + 100;
});
roll.forEach(print);

function print(e){
    console.log(e);
}


// element, index, array