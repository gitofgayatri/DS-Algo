/*

Mirrored Right Half Pyramid

		*
	  * *
	* * *
  * * * *
* * * * *

*/

console.log('Mirrored Right Half Pyramid');
for (let i = 1; i <= 5; i++) {
	let pattern = ''
	for (let j = 1; j <= 5 - i; j++) {
		pattern = pattern + '  '
	}
	for (let k = 1; k <= i; k++) {
		pattern = pattern + '*' + ' '
	}
	console.log(pattern);
}