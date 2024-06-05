/*

Hourglass Pattern

*   *   *   *
  *   *   *
    *   *
      *
    *   *
  *   *   *
*   *   *   *

*/

console.log('Hourglass Pattern');
let pattern = '';
for (let i = 1; i < 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern = pattern + '  ';
  }
  for (let k = 0; k <= 5 - i; k++) {
    pattern = pattern + '* ' + '  ';
  }
  pattern = pattern + '\n';
}
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j <= 5 - i; j++) {
    pattern = pattern + '  ';
  }
  for (let k = 1; k <= i; k++) {
    pattern = pattern + '* ' + '  ';
  }
  pattern = pattern + '\n';
}
console.log(pattern);