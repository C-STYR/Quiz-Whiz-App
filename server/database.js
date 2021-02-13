const { Pool } = require('pg');

const database = new Pool({
  connectionString: 'postgres://vbfupxkb:RO7f0DGrL8G6qqLn4wisnU_qByp_RDWo@ziggy.db.elephantsql.com:5432/vbfupxkb',
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query...', text);
    return database.query(text, params, callback);
  },
};