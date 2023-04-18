const { Client } = require('pg')

const client = new Client({
  user: 'don',
  host: process.env.DB_INSTANCE_ADDRESS,
  database: 'mydb',
  password: 'dondavid',
  port: 5432
});

module.exports.handler = async (event, callback) => {
  console.log('Event: ', event);
  let responseMessage = 'Hello, World!';
  console.log(process.env.DB_INSTANCE_ADDRESS, 'db instance address!')


  console.log(client, 'client info!')
  try {
    client.connect((err) => {
      if (err) callback(err);
      else callback(null, 'Success');
    });

    console.log("Connected Successfully");
  } catch (err) {

      console.log("Failed to Connect Successfully");
      throw err;
  }

  client.end();
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  }
}