/*

Inverted Full Pyramid

* * * * *
 * * * *
  * * *
   * *
    *

*/

console.log('Inverted Full Pyramid');
for (let i = 5; i >= 1; i--) {
    let pattern = '';
    for (let j = 5; j > i; j--) {
        pattern = pattern + ' ';
    }
    for (let k = 1; k <= i; k++) {
        pattern = pattern + '*' + ' ';
    }
    console.log(pattern);
}