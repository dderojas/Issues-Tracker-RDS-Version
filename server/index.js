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
  console.log(process.env, 'db instance address!')

  // let createTable = `CREATE TABLE IF NOT EXISTS accounts (
  //   user_id serial PRIMARY KEY,
  //   name VARCHAR ( 50 ) UNIQUE NOT NULL,
  //   created_on TIMESTAMP NOT NULL,
  //         last_login TIMESTAMP 
  // )`

  // let getRecord = `SELECT * FROM "accounts" LIMIT 1;`

  // let values = event.queryStringParameters['Name'] || 'nothing'

  console.log(client, 'client info!')

  try {
    client.connect((err) => {
      if (err) callback(err);
      else callback(null, 'Success');
    });

    // client.query(createTable, (err) => {
    //   if (err) {
    //     console.log(err.stack)
    //   } else {
    //     console.log('table created')
    //   }
    // })

    console.log("Connected Successfully");

    // if (event.queryStringParameters && event.queryStringParameters['Name']) {
    //   responseMessage = 'Hello, ' + event.queryStringParameters['Name'] + '!';

    //   let postRecord = `INSERT INTO accounts(name) VALUES (${event.queryStringParameters['Name']}) RETURNING *;`

    //   client.query(postRecord, (err, res) => {
    //     if (err) {
    //       console.log(err.stack)
    //     } else {
    //       console.log(res.rows[0])
    //     }
    //   })
      
    // }

    // if (event.httpMethod['GET']) {
    //   client.query(getRecord, (err, res) => {
    //     if (err) {
    //       console.log(err.stack)
    //     } else {
    //       console.log(res.rows[0])
    //     }
    //   })
    // }

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