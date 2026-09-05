import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

import { Pool } from 'pg';

console.log('DATABASE_URL is:', process.env.DATABASE_URL ? 'Loaded' : 'Undefined');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;