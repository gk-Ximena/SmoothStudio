import pool from '../database/database';

export const getCustomers = async () => {
  try {
    const result = await pool.query('SELECT * FROM customer');
    console.log('Customer data retrieved:');
    console.table(result.rows);
  } catch (error) {
    console.error('Database query error:', error);
  } finally {
    await pool.end();
  }
};

getCustomers();
