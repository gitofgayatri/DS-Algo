/*

 Col Number Inverted Half Pyramid

1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

*/

console.log('Col Number Inverted Half Pyramid');
for (let i = 5; i >= 1; i--) {
    let pattern = ' ';
    for (let j = 1; j <= i; j++) {
        pattern = pattern + j + ' ';
    }
    console.log(pattern);
}
