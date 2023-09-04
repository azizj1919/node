const http = require("http");

const host = 'localhost';
const port = 3000;

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end("Hello World from Node.js HTTP Serve");
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File "welcome.txt" has been created with content:', fileContent);
    }
  });
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('Data from "hello.txt":', data);
    }
  });