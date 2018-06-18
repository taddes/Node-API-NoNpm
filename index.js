/* 
* Primary file for API
* 
*/

// Dependencies
const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

// Server should respond to all requests with a string
const server = http.createServer((req, res) => {

  // Get the URL and parse
  /* request object contains lots of data, second param true to parse query string, 
  *  set it as if we sent to query string module. Parsed metadata*/
  const parsedUrl = url.parse(req.url, true);

  // Get path from URL. Untrimmed path that the user requested.
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;
  console.log(queryStringObject);

  // Get the HTTP method
  let method = req.method.toLowerCase();

  // Get headers as an objects
  const headers = req.headers;

  // Get the payload, if it exists. Standard JSON UTF-8 Encoding
  const decoder = new StringDecoder('utf-8');
  let buffer ='';
  // Stream data binding. Append data string through buffer, pieces at a time.
  req.on('data', function(data) {
    buffer += decoder.write(data);
  });
  req.on('end', function() {
    buffer += decoder.end();

    // Choose handler that this request should go to. 404 default handler, if not found
    let chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

    // Construct data object to send to handler
    let data {
      'trimmedPath' : trimmedPath,
      'queryStringObject' : queryStringObject,
      'method' : method,
      'headers' : headers,
      'buffer' : buffer
    };
    
    // Send response. Called at end of every request
    res.end('Hello World\n')

    // Log path the user requested
    console.log('Request recieved with the following payload: ', buffer);

  });
});

// Start server, have it listen on port 3000
PORT = process.env.PORT || 3000
server.listen(3000, () => {
  console.log(`Server listening on ${PORT}`)
});

// Define handlers
let handlers = {};

// Sample handler
handlers.sample = (data, callback) => {
  // callback an http status code and payload object
  callback(406, {'name' : 'sample handler'})

};

// Not found handler 404
handlers.notFound = (data, callback) => {
  callback(404);

};

// Define a request router
let router = {
  'sample' : handlers.sample
};