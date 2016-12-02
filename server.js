var app = require('express')()
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var mysql      = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'toor',
  database : 'wexample'
});

io.on('connection', function(socket){

    console.log('cliente logado')

    socket.on('room', function(key){
        console.log(key);
        let query = 'UPDATE users SET online = 1 WHERE id = 1'
        connection.query(query, function(err, result){ })

        socket.on('disconnect', function (data) {
            let query = 'UPDATE users SET online = 0 WHERE id = 1'
            connection.query(query, function(err, result){ })
        })

    });



})
server.listen(3000)
