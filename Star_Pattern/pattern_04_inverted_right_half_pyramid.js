/*

Invertad Right Half Pyramid

* * * * * 
* * * * 
* * * 
* * 
* 

*/


for (let i = 5; i >= 1; i--) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern = pattern + '*' + ' '
    }
    console.log(pattern);
}