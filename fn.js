let names = [ 'a ', 'b,' ];

names.forEach((n) => console.log(n));

name.forEach(function(n) {
	console.log(n);
});

function namedFn(n) {
	console.log(n);
}
name.forEach(namedFn);

function forEach(fn) {
	for (let i = 0; i < this.lenght; i++) {
		fn(this[i]);
	}
}
