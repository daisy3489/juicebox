// inside db/seed.js

// grab our client with destructuring from the export in index.js
const { client } = require('./index');

async function testDB() {
  try {
    // connect the client to the database, finally
    client.connect();

    // queries are promises, so we can await them
    const { rows } = await client.query(`SELECT * FROM users;`);
    console.log(rows);
    
  } catch (error) {
    console.error(error);
  } finally {
    // it's important to close out the client connection
    client.end();
  }
}

testDB();