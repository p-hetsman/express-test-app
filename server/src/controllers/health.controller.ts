import { Handler } from 'express';

const health: Handler = (_req, res) => {
  res.send('Server is up!');
};

export { health };
