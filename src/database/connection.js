var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'quantum',
      password : 'quantum28042004',
      database : 'uniao',
      port: 3390
    }
  });

module.exports = knex;