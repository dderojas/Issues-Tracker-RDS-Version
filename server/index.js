const { Client } = require('pg')

// TODO: trying to connect to rds but connection is timing out
module.exports.handler = async (event) => {
  console.log('Event: ', event);
  let responseMessage = 'Hello, World!';
  console.log(process.env.DB_INSTANCE_ADDRESS, 'heeellllpppp')
  
  const client = new Client({
    user: 'don',
    host: process.env.DB_INSTANCE_ADDRESS,
    database: 'mydb',
    password: 'dondavid',
    port: 5432
  });

  console.log(client, 'client!@#!@#')
  try {
    console.log('in here????')
    await client.connect();
    console.log("Connected Successfully");
    //your code here

  } catch (err) {

      console.log("Failed to Connect Successfully");
      throw err;
      //error message
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