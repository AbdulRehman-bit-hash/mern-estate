import multer from 'multer';
import { cloudinary,storage } from '../utils/cloudinary.js';

import express from 'express';
import { signup, signin, google, signOut } from '../controllers/auth.controller.js';

const router = express.Router();

const upload = multer({ storage });

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);
router.post('/upload', upload.single('image'), (req, res) => {
  res.json({ imageUrl: req.file.path }); // Cloudinary hosted URL
});


export default router;