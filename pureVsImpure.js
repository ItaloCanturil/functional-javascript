//Not Pure

let name = 'Italo';

function hello() {
	console.log(`Hello, ${name}`);
}

hello(); //Hello, Italo

name = 'Lebron';
hello(); //Hello Lebron

// Pure

function hello(name) {
	return `Hello, ${name}`
}

hello('Italo'); // Hello, Italo
hello('Lebron'); // Hello, Lebron