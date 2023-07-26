const http = require('http');

const server = http.createServer((req,res) => {
  if(req.url === "/"){
    res.end("Welcome to our homepage");
    //return;
  }
  //console.log(req);
  //res.write()
  else if(req.url === '/about'){
    res.end("Here is our history");
    //return;
  }
  else {
   res.end(`<h1>Oops!</h1>
  <p>We can't seem to find the page we are looking for</p>
  <a href="/">Back Home</a>`);
  }
})

server.listen(5000)