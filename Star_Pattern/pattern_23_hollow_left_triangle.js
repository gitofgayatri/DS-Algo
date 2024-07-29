/*

Hollow Left Triangle

*         
* *       
*   *     
*     *   
* * * * * 

*/
console.log('Hollow Left Triangle');
let num = 5;
for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
        if (j == 1 || i == 5 || i == j) {
            process.stdout.write('* ');
        } else {
            process.stdout.write('  ');
        }
    } process.stdout.write('\n');
}