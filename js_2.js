//console.log("hello world");
/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello mahesh');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/


//modules in js


/*const fs=require('fs');
let text=fs.readFileSync('C:\\Users\\Radhe\\c course\\html\\mahesh.txt','utf-8');
text=text.replace('mahesh','harry');
console.log(text);
console.log("creating a new file..");
fs.writeFileSync("C:\\Users\\Radhe\\c course\\html\\mahesh1.txt",text);*/


// serving html files  tut -66 

/*const http=require('http');
const fs=require('fs');
const filecontent=fs.readFileSync('C:\\Users\\Radhe\\c course\\html\\js_1.html');
const server = http.createServer((req,res)=>{
  res.writeHead(400,{'Content-type':'text/html'});
  res.end(filecontent);
})
server.listen(80,'127.0.0.1',()=>{
  console.log("Listining on port 80");
})*/

/*const http=require('http');
const fs=require('fs');
const hostname='127.0.0.1';
const port=3000;
const stylesheet1=fs.readFileSync('C:\\Users\\Radhe\\c course\\html\\Stylesheet_1.html');
const stylesheet2=fs.readFileSync('C:\\Users\\Radhe\\c course\\html\\Stylesheet_2.html');
const server=http.createServer((req,res)=>{
  console.log(req.url);
  url=req.url;
  res.statusCode=200;
  res.setHeader('Content-type','text/html');
  if (url=='/') {
       res.end(stylesheet1);
  }
  else if(url=='/stylesheet2'){
    res.end(stylesheet2);
  }
});
server.listen(port,hostname,()=>{
  console.log(`sever running at http://${hostname}:${port}/`);
})*/

//creating own module
function average(arr){
  let sum = 0;
  arr.forEach(element => {
      sum += element;
  });
  return sum/arr.length;
}
console.log(average([3,4,5]));
