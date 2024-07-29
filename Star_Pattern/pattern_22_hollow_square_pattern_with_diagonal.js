/*

Hollow Square Pattern with Diagonal

* * * * * * * 
* *       * * 
*   *   *   * 
*     *     * 
*   *   *   * 
* *       * * 
* * * * * * * 

*/

console.log('Hollow Square Pattern with Diagonal');
const num = 7;
for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
        if (i == 1 || i == num || j == 1 || j == num || i == j || i + j == num + 1) {
            process.stdout.write('* ');
        } else {
            process.stdout.write('  ');
        }
    } process.stdout.write('\n');
}
