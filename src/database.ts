import pgp from 'pg-promise';

// Create DB connection
const db = pgp()({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  port: 5433,
  database: 'ts_template',
});

export default db;
