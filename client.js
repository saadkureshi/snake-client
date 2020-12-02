const net = require('net');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server.");
    conn.write('Name: SK');
    // conn.write("Move: up");

    // let timer = 0;
    // for (let i = 0; i < 20; i++) {
    //   setTimeout(() => {
    //     conn.write("Move: up")
    //   }, timer);
    //   timer += 100;
    // }

    setInterval(() => {
      conn.write("Move: up");
    }, 100);

  })

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = {connect};