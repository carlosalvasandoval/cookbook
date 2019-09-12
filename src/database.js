import knexBuilder from 'knex';

export const knex = knexBuilder({
    client: 'mysql',
    connection: {
        host: "localhost",
        database: 'cookbook',
        user: "root",
        password: ""
    }
  });