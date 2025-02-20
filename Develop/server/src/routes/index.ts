import { Router } from 'express';
import authRoutes from './auth-routes';
import apiRoutes from './api';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.use('/auth', authRoutes);
// TODO: Add authentication to the API routes
router.use('/api', authenticateToken, apiRoutes);

export default router;
