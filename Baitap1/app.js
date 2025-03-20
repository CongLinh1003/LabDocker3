const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
  res.end('Hello, Docker!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.error('Error:', err);
  }
  console.log(`Server is running on port ${port}`);
});
