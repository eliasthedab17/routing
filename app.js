const http = require("http"); // Import Node.js core module
const url = require("url");
const fs = require("fs");
console.log(__dirname)
const home = fs.readFileSync(`${__dirname}/templates/home.html`);
const aboutus = fs.readFileSync(`${__dirname}/templates/aboutus.html`);
const contactus = fs.readFileSync(`${__dirname}/templates/contactus.html`);

const server = http.createServer(function (req, res) {
  let pathNameFull = req.url;
  console.log(pathNameFull); // full url

  const pathNameObj = url.parse(pathNameFull, true);
  console.log(pathNameObj); // url as object

  const pathName = pathNameObj.pathname;
  console.log(pathName); // without query

  if (pathName === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end(home);
  } else if (pathName === "/aboutus.html") {
    res.setHeader("Content-Type", "text/html");
    res.end(aboutus);  
  }
  else if (pathName === "/home.html") {
    res.setHeader("Content-Type", "text/html");
    res.end(home);}
     else if (pathName === "/contactus.html") {
    res.setHeader("Content-Type", "text/html");
    res.end(contactus);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(3000); // Listen for any incoming requests
console.log("Node.js web server at port 3000 is running..");
