/*

Plus Star Pattern

      *       
      *       
      *       
* * * * * * *
      *       
      *       
      * 
        
*/

console.log('Plus Star Pattern');
let pattern = '';
for (let row = 1; row < 8; row++) {
    for (let col = 1; col < 8; col++) {
        if (col == 4 || row == 4) {
            pattern = pattern + '* ';
        }
        else {
            pattern = pattern + '  ';
        }
    }
    pattern = pattern + '\n'
}
console.log(pattern);