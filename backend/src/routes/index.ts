import { Router } from 'express';
import ClassesRouter from './ClassesRouter';
import ConnectionsRouter from './ConnectionsRouter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/classes', ClassesRouter);
router.use('/connections', ConnectionsRouter);

// Export the base-router
export default router;
