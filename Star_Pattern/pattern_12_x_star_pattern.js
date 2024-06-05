/*

X Star Pattern

*       *
  *   *
	*
  *   * 
*       *

*/

console.log('X Star Pattern');
for (let i = 1; i <= 5; i++) {
	for (let j = 1; j <= 5; j++) {
		if (i == j || (5 - i + 1) == j) {
			process.stdout.write('* ');
		} else {
			process.stdout.write('  ');
		}
	}
	process.stdout.write('\n');
}



/*

X Of Stars

*       *
  *   *
	*

*/