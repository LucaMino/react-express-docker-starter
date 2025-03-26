import express from 'express';
import { getHomeData } from '../controllers/home.js';
import { login, register } from '../controllers/auth.js';
import { loginValidation, registerValidation } from '../validations/auth.js';
import { validate } from '../validations/validator.js';
import { authenticateJWT } from '../middlewares/auth.js';

// create instance of router express
const router = express.Router();

// define routes
router.post('/auth/login', loginValidation, validate, login);
router.post('/auth/register', registerValidation, validate, register);

router.get('/api/get-data', authenticateJWT, getHomeData);

export default router;