
// mysql database config
module.exports = {
  connection: {
    host: '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'jobs',
    charset: 'utf8'
  }
};