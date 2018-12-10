const mysql = require('mysql')
require('dotenv').config()
module.exports = function (req, res) {
  if (!req.session.loggedIn) {
    res.send('Log in first')
  } else {
    const conn = mysql.createConnection({
      host: process.env.SQL_DATABASE_HOST,
      user: process.env.SQL_DATABASE_USER,
      password: process.env.SQL_DATABASE_PASSWORD,
      database: process.env.SQL_DATABASE_DB_NAME
    })
    conn.connect((err) => {
      var sql = `select
        paymentAddress,
        created,
        paymentID,
        paidAmount,
        paymentTXID,
        transferTXID
        from payments where
        merchantID = ?
        and
        transferTXID is not null
        order by created desc
        limit 100`
      conn.query(sql, [req.session.merchantID], (err, result) => {
        if (err) {
          throw err
        }
        var response = []
        for (var i = 0; i < result.length; i++) {
          response.push(result[i])
        }
        res.send(response)
      })
    })
  }
}
