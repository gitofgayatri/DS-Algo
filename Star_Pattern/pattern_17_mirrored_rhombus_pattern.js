/*

Mirrored Rhombus Pattern

******
 ******
  ******
   ******
    ******

*/

console.log('Mirrored Rhombus Pattern');
let pattern = '';
for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= i; j--) {
        pattern = pattern + ' '
    }
    for (let k = 1; k <= 5; k++) {
        pattern = pattern + '*'
    }
    pattern = pattern + '\n';
}
console.log(pattern);