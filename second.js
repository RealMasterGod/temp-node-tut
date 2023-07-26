//GLOBALS - NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use module (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
setTimeout(function(){
  const date = new Date()
  console.log(date)
}, 2000);

setInterval(function() {
  console.log('Hello World!');
}, 1000);