import pg, { type Client, type Pool } from 'pg';
let pool: null | Pool = null;
export function getPool() {
  if (pool) {
    return pool;
  }
  pool = new pg.Pool();

  return pool;
}
