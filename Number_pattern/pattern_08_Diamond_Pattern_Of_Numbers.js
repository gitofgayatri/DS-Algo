/*

Diamond Pattern Of Numbers

    1
   123
  12345
 1234567
123456789
 1234567
  12345
   123
    1

*/

console.log('Diamond Pattern Of Numbers');
const num = 5;
for (let i = 1; i <= num; i++) {
    for (let s = 0; s <= num - i; s++) {
        process.stdout.write(' ');
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
        process.stdout.write(`${j}`);
    }
    process.stdout.write('\n');
}
for (let i = 1; i <= num - 1; i++) {
    for (let s = 1; s <= i + 1; s++) {
        process.stdout.write(' ');
    }
    for (let j = 1; j <= (num - i) * 2 - 1; j++) {
        process.stdout.write(`${j}`);
    }
    process.stdout.write('\n');
}




