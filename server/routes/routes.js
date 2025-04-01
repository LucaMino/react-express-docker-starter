import express from 'express';
import { getHomeData } from '../controllers/home.controller.js';
import { login, register } from '../controllers/auth.controller.js';
import { loginValidation, registerValidation } from '../validations/auth.js';
import { validate } from '../validations/validator.js';
import { isAuthenticated } from '../middlewares/auth.js';

// create instance of router express
const router = express.Router();

// define routes
router.post('/auth/login', loginValidation, validate, login);
router.post('/auth/register', registerValidation, validate, register);

router.get('/api/get-data', isAuthenticated, getHomeData);

export default router;