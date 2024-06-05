/*

Hollow Diamond Pattern

      *
    *   *
  *       *
*           *
  *       *
    *   *
      *

*/

/*
console.log('Hollow Diamond Pattern');
let pattern = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i - j == 2 || i + j == 8 || j + i == 4 || j - i == 2) {
            pattern = pattern + '* ';
        } else {
            pattern = pattern + '  ';
        }
    }
    pattern = pattern + '\n';
}
console.log(pattern);
*/

console.log('Hollow Diamond Pattern');
let pattern = '';
for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {
        if (i - j == 3 || i + j == 11 || j + i == 5 || j - i == 3) {
            pattern = pattern + '* ';
        } else {
            pattern = pattern + '  ';
        }
    }
    pattern = pattern + '\n';
}
console.log(pattern);