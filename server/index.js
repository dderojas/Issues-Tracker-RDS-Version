const { Client } = require('pg')


module.exports.handler = async (event, context, callback) => {
  const client = new Client({
    host: process.env.DB_INSTANCE_ADDRESS,
    port: 5432,
    database: 'mydb',
    user: 'don',
    password: process.env.DB_INSTANCE_PASSWORD,
  });
  console.log('Event: ', event);
  let responseMessage = 'Hello, World!';
  console.log(process.env, 'db instance address!')

  // let createTable = `CREATE TABLE IF NOT EXISTS testTable (
  //   user_id serial PRIMARY KEY,
  //   name VARCHAR ( 50 ) UNIQUE NOT NULL,
  //   created_on TIMESTAMP NOT NULL,
  //         last_login TIMESTAMP 
  // )`

  // console.log(callback(), 'callback???')
  // console.log(context, 'context!!!')
  console.log(client, 'client info!')

  try {
    // client.connect((err) => {
    //   if (err) callback(err);
    //   else callback(null, 'Success');
    // });

    // client.connect((err) => {
    //   if (err) {
    //     console.error('connection error', err.stack)
    //   } else {
    //     console.log('connected')
    //   }
    // })

    // client.connect()
    // .then(() => {
    //   console.log('connected')
    // })
    // .catch((err) => {
    //   console.error('connection error', err.stack)
    // })

    await client.connect()
    // console.log(something, 'something!!!!')

    // client.connect((err) => {
    //   if (err) callback(err);
    //   else callback(null, 'Success');
    // });
    
    // client.query(createTable, (err) => {
    //   if (err) {
    //     console.log(err.stack)
    //   } else {
    //     console.log('table created')
    //   }
    // })

    console.log("Connected Successfully");

  } catch (err) {

      console.log("Failed to Connect");
      throw err;
  }

  await client.end();
  
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