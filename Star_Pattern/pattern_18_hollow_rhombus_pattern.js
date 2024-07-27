/*

Hollow Rhombus Pattern

*****
 *   *
  *   *
   *   *
    *****

*/

console.log('Hollow Rhombus Pattern');
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i - 1; j++) {
        process.stdout.write(' ');
    }
    for (let k = 1; k <= 5; k++) {
        if (i == 1 || i == 5 || k == 1 || k == 5) {
            process.stdout.write('*');
        } else {
            process.stdout.write(' ');
        }
    }
    process.stdout.write('\n');
}