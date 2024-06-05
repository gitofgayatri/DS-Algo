/*

Mirror Half Diamond Star Pattern

        * 
      * * 
    * * * 
  * * * * 
* * * * * 
  * * * * 
    * * * 
      * * 
        * 

*/

console.log('Mirror Half Diamond Star Pattern');
let pattern = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    pattern = pattern + '   ';
  }
  for (let s = 1; s <= i; s++) {
    pattern = pattern + '*' + '  ';
  }
  pattern = pattern + '\n';
}
for (let r = 1; r <= 5; r++) {
  for (let c = 1; c <= r; c++) {
    pattern = pattern + '   ';
  }
  for (let k = 1; k <= 5 - r; k++) {
    pattern = pattern + '*' + '  '
  }
  pattern = pattern + '\n';
}
console.log(pattern);