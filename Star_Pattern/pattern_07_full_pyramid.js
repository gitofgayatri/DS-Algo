/*

Full Pyramid

    *
   * *
  * * *
 * * * *
* * * * *

*/

/* 

For Logic Building And Understanding

1 ____*_
2 ___*_*_
3 __*_*_*_
4 _*_*_*_*_
5 * * * * *_

*/

console.log('Full Pyramid');
const num = 5;
for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
        process.stdout.write(' ');
    }
    for (let k = 1; k <= i; k++) {
        process.stdout.write('* ');
    }
    process.stdout.write('\n');
}