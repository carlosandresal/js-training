const http = require('http');
const serveStatic = require('serve-static');

const serve = serveStatic('./', {'index': ['index.html', 'index.htm']});

const server = http.createServer((req, res) => serve(req, res, () => res.end()));

const io = require('socket.io')(server);
server.listen(8000);

const users = [];

function broadcast(opts) {
  users.forEach((user) => {
    if(opts.everyone || user !== opts.from) {
      user.emit(opts.event, opts.data);
    };
  });
}

function broadcastUserConnectionsToEveryone() {
  broadcast({
    event: 'usersConnections',
    everyone: true,
    data: {
      count: users.length
    }
  });
}

io.on('connection', (socket) => {
  console.log('A user has connected.');
<<<<<<< HEAD
  // add socket to the "users" list

  // broadcast user connection

  socket.on('disconnect', () => {
    console.log('A user disconnected.')
    // remote socket from "users" list

    // broadcast user connection
=======
  users.push(socket);
  broadcastUserConnectionsToEveryone();

  socket.on('disconnect', () => {
    console.log('A user disconnected.')
    users.splice(users.indexOf(socket), 1);
    broadcastUserConnectionsToEveryone();
>>>>>>> 52eef3c1b6c90d55062fa0d188000982d0e3dc5b
  });
});
