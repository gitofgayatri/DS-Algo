/*

Floyd’s Triangle

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

console.log('Floyd’s Triangle');
let num = 0;
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${++num} `);
    }
    console.log();
}