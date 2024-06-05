/*

Hollow Square Star Pattern

* * * * *
*       *
*       *
*       *
* * * * *

*/

console.log('Hollow Square Star Pattern');

let pattern = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || j == 1 || i == 5 || j == 5) {
            pattern = pattern + '* ';
        } else {
            pattern = pattern + '  ';
        }
    }
    pattern = pattern + '\n';
}
console.log(pattern);