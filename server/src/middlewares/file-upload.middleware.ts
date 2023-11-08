import multer from 'multer';

const upload = (folderName: string = 'uploads') =>
  multer({
    storage: multer.diskStorage({
      destination: folderName,
      filename: (_req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
      },
    }),
  });

export { upload as fileUpload };
