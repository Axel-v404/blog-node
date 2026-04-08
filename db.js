import mysql from 'mysql2';

export const db = mysql.createConnection({
  host: 'localhost',
  port: '3308',
  user: 'test  ',
  password: 'test',
  database: 'test'
});