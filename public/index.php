<html>
<head>

</head>
<body>
    <h1>Hello World</h1>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.6.0/socket.io.js"></script>

    <script>
    window.socket = io.connect('localhost:3000', {port:3000} );
        socket.emit('room','1');
    </script>
</body>
</html>
