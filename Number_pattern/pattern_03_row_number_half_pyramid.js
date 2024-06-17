/*

Row Number Half Pyramid

1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 

*/

console.log('Row Number Half Pyramid');
for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str = str + i + " ";
    }
    console.log(str);
}