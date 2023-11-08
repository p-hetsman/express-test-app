import express from 'express';

import { fileUpload } from '../middlewares/fileUpload.middleware';

import * as filesController from '../controllers/files.controller';

const upload = fileUpload('uploads');

const router = express.Router();
router.post('/files/upload', upload.single('file'), filesController.upload);

export { router as filesRouter };
