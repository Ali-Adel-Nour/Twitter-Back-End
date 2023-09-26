const app = require ('../app.js')

const http = require ('http');

const normalizePort =  require ('./normalizePort.js');
// Get port from environment and store in Express.

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);



// start the server
server.listen(port,()=>{
  console.log(`Starting server on port ${port}` );
})