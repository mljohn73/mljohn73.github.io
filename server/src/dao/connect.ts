import { Client } from 'pg';

const connectionString = 'postgresql://postgres:1317@localhost:5432/mytest'

export default class postgresClient {
  client: Client;

  constructor() {
    this.client = new Client({
      connectionString
    })
  }

  async start() {
    await this.client.connect(function(err) {
      if (err) console.log("Error: " + err);
      });
      console.log("Connected!");
  }

  async read() {
    const response = await this.client.query("SELECT * FROM testusers;");
    return response;
  }

  async write() {
    await this.client.query("CREATE TABLE IF NOT EXISTS users (\
      user_id SERIAL PRIMARY KEY,        -- AUTO_INCREMENT integer, as primary key\
      user_name VARCHAR(50) NOT NULL\
    );");
  }
};