import express from 'express';
import  {generateReportContent} from '../controllers/insights.js';
import { authenticateJWT } from '../middleware/auth.js';

const router = express.Router();

router.post('/insights/content', authenticateJWT, generateReportContent); 

export default router;
