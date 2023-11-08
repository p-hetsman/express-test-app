import type { ErrorRequestHandler } from 'express';

const error: ErrorRequestHandler = (err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;

  console.error(err.message, err.stack);

  res.status(statusCode).json({ message: err.message });

  return;
};

export { error as errorMiddleware };
