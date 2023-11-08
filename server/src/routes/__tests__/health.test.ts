import request from 'supertest';

import { app } from '../../app';

describe('health route', () => {
  describe('GET /health', () => {
    it('should return status 200', async () => {
      const response = await request(app).get('/api/health');

      expect(response.status).toBe(200);
    });

    it('should return "Server is up!"', async () => {
      const response = await request(app).get('/api/health');

      expect(response.text).toBe('Server is up!');
    });
  });
});
