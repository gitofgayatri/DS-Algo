/*

Right Half Pyramid

*
* *
* * *
* * * *
* * * * *

*/

console.log("Right Half Pyramid");
let pattern = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        pattern = pattern + '*' + ' ';
    }
    pattern = pattern + '\n';
}
console.log(pattern);