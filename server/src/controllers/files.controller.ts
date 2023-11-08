import { Handler } from 'express';

const upload: Handler = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  return res.json({
    fileName: req.file.filename,
    message: 'File uploaded successfully',
  });
};

export { upload };
