import express from 'express';
import { protect } from '../middlewares/isAuth.js';

import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile
} from '../controllers/userController.js'; 

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/profile', protect ,getUserProfile);

export default router;
