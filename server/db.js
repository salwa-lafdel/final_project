const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: "postgres",
  password:"SALWA33@lafdel",
  host: "localhost",
  port: "5432",
  database: 'projet'
})

module.exports = pool