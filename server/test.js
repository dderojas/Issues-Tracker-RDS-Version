const { Client } = require('pg')

const client = new Client({
  user: 'don',
  host: 'terraform-20230426182101611300000001.c2icfvsli5ys.us-west-2.rds.amazonaws.com',
  database: 'mydb',
  password: 'dondavid',
  port: 5432
});

const createTable = async () => {
  console.log(process.env.DB_INSTANCE_ADDRESS, 'address')
  client.connect((err) => {
    if (err) () => {
      console.log(err)
    };
    else {
      () => {
        console.log('success')
      }
    };
  });

  const createTable = `CREATE TABLE IF NOT EXISTS accounts (
    user_id serial PRIMARY KEY,
    name VARCHAR ( 50 ) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
          last_login TIMESTAMP 
  )`

  client.query(createTable, (err, result) => {
    console.log('in here?')
    if (err) {
      console.log(err.stack)
    } else {
      console.log('table created')
    }
  })

  console.log('done!!!')
}

createTable()