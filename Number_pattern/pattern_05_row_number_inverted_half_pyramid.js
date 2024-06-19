/*

Row Number Inverted Half Pyramid

1 1 1 1 1
2 2 2 2
3 3 3
4 4
5

*/

console.log("Row Number Inverted Half Pyramid");
for (let i = 1; i <= 5; i++) {
    let pattern = " ";
    for (let j = 5; j >= i; j--) {
        pattern = pattern + i + " ";
    }
    console.log(pattern);
}