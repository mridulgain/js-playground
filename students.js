
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