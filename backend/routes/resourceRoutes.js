import express from 'express';
import { getAllResources, createResource } from '../controllers/resourceController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllResources);
router.post('/', authMiddleware, createResource);

export default router;
