import { Router } from 'express';

import { fileUpload } from '../middlewares/file-upload.middleware';

import * as filesController from '../controllers/files.controller';

const upload = fileUpload('uploads');

const router = Router();
router.post('/files/upload', upload.single('file'), filesController.upload);

export { router as filesRouter };
