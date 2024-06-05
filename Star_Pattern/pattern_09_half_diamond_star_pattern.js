/*

Half Diamond Star Pattern

*  
*  *  
*  *  *  
*  *  *  *  
*  *  *  *  *  
*  *  *  *  
*  *  *  
*  *  
*

*/

console.log('Half Diamond Star Pattern');
let pattern = '';
for (let i = 1; i < 5; i++) {
    for (let j = 1; j <= i; j++) {
        pattern = pattern + '*' + '  ';
    }
    pattern = pattern + '\n';
}
for (let r = 1; r <= 5; r++) {
    for (let s = 5; s >= r; s--) {
        pattern = pattern + '*' + '  ';
    }
    pattern = pattern + '\n';
}
console.log(pattern);