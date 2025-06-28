import express from 'express';
import photoController from '../controllers/photo.controller';

const router = express.Router();

router.get('/photos', photoController.getPhotosList);
router.get('/photos/:photo_id', photoController.getIndividualPhoto);

export default router;