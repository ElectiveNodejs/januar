var fs = require('fs');

fs.readFile('index.txt', 'utf-8', function(err, data){
	console.log(data);
});

console.log('Hello from end of the file');
