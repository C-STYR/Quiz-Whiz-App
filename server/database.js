const { Pool } = require('pg');

const database = new Pool({
  connectionString: 'postgres://vbfupxkb:bKXMfLehVLbmlFp3HDDR0hOKECOyiRd4@ziggy.db.elephantsql.com:5432/vbfupxkb',
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query...', text);
    return database.query(text, params, callback);
  },
};