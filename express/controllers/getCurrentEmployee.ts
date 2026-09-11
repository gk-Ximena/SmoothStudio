import type { Request, Response } from 'express';
import pool from '../database/database';

// This is meant to match the `Employee` interface on the frontend
// (smooth-studio-frontend/src/features/profile/types.ts):
//   legalName, jobTitle, storeLocation, dateOfBirth, email, phone, avatarUrl?
//
// Written against a guessed table name ("employee", singular, to match the
// existing "customer" table's naming in getCustomers.ts) — adjust once the
// real table exists.
//
// Heads-up for whoever builds that table: Postgres columns are
// conventionally snake_case (e.g. legal_name), but the frontend expects
// camelCase (legalName). `SELECT *` below returns whatever the column
// names actually are, so once the table exists this will likely need
// either column aliases in the query (SELECT legal_name AS "legalName", ...)
// or a small mapping step here before calling res.json. Left as SELECT *
// for now since there's nothing to alias against yet.
export const getCurrentEmployee = async (_req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM employee LIMIT 1');

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'No employee found' });
      return;
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ error: 'Failed to fetch employee' });
  }
  // Note: unlike getCustomers.ts, this does NOT call pool.end(). A running
  // server needs to keep the shared connection pool open across many
  // requests — pool.end() is only correct for a one-off script that runs
  // once and exits, which is what getCustomers.ts is.
};
