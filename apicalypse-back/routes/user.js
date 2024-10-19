import { Router } from 'express';
const router = Router();
import { addFinancialData, getFinancialData } from '../controllers/user.js';
import { upload } from '../middleware/upload.js'; 
import { authenticateJWT } from '../middleware/auth.js';


// Route to upload financial data (Excel file) for a user
router.post('/uploadFinancialData',authenticateJWT, upload.single('file'), addFinancialData);

// Route to get financial data for a user
router.get('/:userId/financialData',authenticateJWT, getFinancialData);

export default router;
