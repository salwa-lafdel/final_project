const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: "root",
  password:"Nao7k8X4lGTVedghR1PDYMWHp3cJij4r",
  host: "@dpg-ck82g97sasqs73cogfa0-a.frankfurt-postgres.render.com",
  port: "5432",
  database: 'projet_n5tg'
})

module.exports = pool