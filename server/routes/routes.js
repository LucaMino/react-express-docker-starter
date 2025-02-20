import express from 'express';
import { getHomeData } from '../controllers/home.js';

// create instance of router express
const router = express.Router();

// define routes
router.get('/api/get-data', getHomeData);

export default router;