/*

Row Number Square Pattern

1 1 1 1 1
2 2 2 2 2
3 3 3 3 3
4 4 4 4 4
5 5 5 5 5

*/

console.log('Row Number Square Pattern');
for (let i = 1; i <= 5; i++) {
    let str = ' ';
    for (let j = 1; j <= 5; j++) {
        str = str + i + ' ';
    }
    console.log(str);
}