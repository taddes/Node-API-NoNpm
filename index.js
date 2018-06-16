/* 
* Primary file for API
* 
*/

// Dependencies
const http = require('http');
const url = require('url');

// Server should respond to all requests with a string
const server = http.createServer((req, res) => {

  // Get the URL and parse
  /* request object contains lots of data, second param true to parse query string, 
  *  set it as if we sent to query string module. Parsed metadata*/
  const parsedUrl = url.parse(req.url, true);

  // Get path from URL. Untrimmed path that the user requested.
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

 // Get the HTTP method
  const method = req.method.toLowerCase();

  // Send response
  res.end('Hello World\n')

  // Log path the user requested
  console.log(`Request recieved on path: ${trimmedPath} with the method: ${method}`);


});


// Start server, have it listen on port 3000
PORT = process.env.PORT || 3000
server.listen(3000, () => {
  console.log(`Server listening on ${PORT}`)
});