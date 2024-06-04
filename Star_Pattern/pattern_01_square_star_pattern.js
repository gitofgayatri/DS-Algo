/*

Square Star Pattern

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

*/

console.log("Squre Star Pattern");
let pattern = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        pattern += '* ';
    }
    pattern += '\n';
}
console.log(pattern);