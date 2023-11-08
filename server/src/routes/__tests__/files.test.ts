import request from 'supertest';

import { app } from '../../app';

describe('files route', () => {
  describe('POST /api/files/upload', () => {
    it('should return status 400 if a file was not provided', async () => {
      const response = await request(app).post('/api/files/upload');

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        message: 'No file uploaded',
      });
    });

    it('should return status 200 if a file was uploaded', async () => {
      const filePath = `${__dirname}/data/file_example_MP4_10MG.mp4`;

      const response = await request(app).post('/api/files/upload').attach('file', filePath);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('File uploaded successfully');
      expect(response.body.fileName).toMatch(/[0-9]+-file_example_MP4_10MG.mp4/);
    });
  });
});
