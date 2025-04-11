import express from 'express';
import homeController from '../controllers/home.controller.js';
import authController from '../controllers/auth.controller.js';
import { loginValidation, registerValidation } from '../validations/auth.validation.js';
import { validate } from '../validations/validator.js';
import { isAuthenticated } from '../middlewares/auth.js';

// create instance of router express
const router = express.Router();

// define routes
router.post('/auth/login', loginValidation, validate, authController.login);
router.post('/auth/register', registerValidation, validate, authController.register);

router.get('/api/get-data', isAuthenticated, homeController.getHomeData);

export default router;