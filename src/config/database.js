require("dotenv/config");

module.exports = {
  dialect: 'postgres',
  hots: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timestamp: true,
    undescored: true,
    undescoredAll: true,
  }
}; 