/*

Hollow Full Pyramid

     *  
    * *  
   *   *  
  *     *  
 *       *  
* * * * * *  

*/

console.log('Hollow Full Pyramid');
for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6 - i; j++) {
        process.stdout.write(' ');
    }
    for (let k = 1; k <= i; k++) {
        if (k == 1 || k == i || i == 6) {
            process.stdout.write('* ');
        } else {
            process.stdout.write('  ');
        }
    }
    process.stdout.write('\n');
}