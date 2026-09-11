import path from 'path';
import dotenv from 'dotenv';

// database.ts already loads .env when it's imported below, so this call is
// mostly a safety net (dotenv won't overwrite already-set variables) in
// case that import order ever changes.
dotenv.config({ path: path.resolve(__dirname, '.env') });

import express from 'express';
import employeeRoutes from './routes/employees';

const app = express();

// No PORT is defined anywhere yet (checked .env and there's only
// DATABASE_URL) — 3000 here is a placeholder matching the guess already
// sitting in the frontend's vite.config.ts proxy target. Change both
// together if a different port is picked.
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Smooth Studio API listening on http://localhost:${PORT}`);
});
