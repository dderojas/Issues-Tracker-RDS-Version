const { Client } = require('pg')

// const client = new Client({
//   user: '<your db username>',
//   host: '<your endpoint>',
//   database: '<your database name>',
//   password: '<your database password>',
//   port: 5432
// });

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  let responseMessage = 'Hello, World!';
  console.log(process.env, 'heeellllpppp')

  // try {

  //   await client.connect();
  //   console.log("Connected Successfully");
  //   //your code here

  // } catch (err) {

  //     console.log("Failed to Connect Successfully");
  //     throw err;
  //     //error message
  // }

  // client.end();
  
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