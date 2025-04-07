import { Router } from 'express';
import { getDatasets, upload, uploadDataset } from '../controller/datasetController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/upload', authMiddleware, upload.single('dataset'), uploadDataset);
router.get('/', authMiddleware, getDatasets);

export default router;