/* 

Rhombus Pattern

    *****
   *****
  *****
 *****
*****

*/

console.log('Rhombus Pattern');
let pattern = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
        pattern = pattern + ' ';
    }
    for (let k = 1; k <= 5; k++) {
        pattern = pattern + '*';
    }
    pattern = pattern + '\n';
}
console.log(pattern);