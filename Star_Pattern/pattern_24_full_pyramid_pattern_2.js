/*

Full Pyramid Pattern 2

        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *

*/

console.log('Full Pyramid Pattern 2');
let num = 5;
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= 8 - (2 * (i - 1)); j++) {
    process.stdout.write(' ');
  }
  for (let k = 1; k <= (i - 1) * 2 + 1; k++) {
    process.stdout.write('* ');
  } process.stdout.write('\n');
}