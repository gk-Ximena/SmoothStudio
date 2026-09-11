import { Router } from 'express';
import { getCurrentEmployee } from '../controllers/getCurrentEmployee';

const router = Router();

// GET /api/employees/me — this exact path is what the frontend already
// calls (src/features/profile/api.ts -> fetchCurrentEmployee, via the Vite
// dev proxy). Mounted under /api/employees in index.ts.
router.get('/me', getCurrentEmployee);

export default router;
