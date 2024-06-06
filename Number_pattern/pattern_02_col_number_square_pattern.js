/*

Col Number Square Pattern

1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5

*/

console.log('Col Number Square Pattern');
for (let i = 1; i <= 5; i++) {
    let str = ' ';
    for (let j = 1; j <= 5; j++) {
        str = str + j + ' ';
    }
    console.log(str);
}