import { Router } from 'express';
import OrphanagesRouter from './OrphanagesRouter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/orphanages', OrphanagesRouter);

// Export the base-router
export default router;
