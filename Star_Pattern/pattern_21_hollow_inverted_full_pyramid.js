/*

Hollow Inverted Full Pyramid

* * * * * *
 *       *
  *     *
   *   *
    * *
     *
     
*/

console.log('Hollow Inverted Full Pyramid');
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j < i; j++) {
        process.stdout.write(' ');
    }
    for (let k = 1; k <= 6 - i + 1; k++) {
        if (i == 1 || k == 1 || k == 6 - i + 1) {
            process.stdout.write('* ');
        } else {
            process.stdout.write('  ');
        }
    }
    process.stdout.write('\n');
}