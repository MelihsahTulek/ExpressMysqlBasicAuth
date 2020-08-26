const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'expressBasicAuthentication'
})

connection.connect()

module.exports = connection;