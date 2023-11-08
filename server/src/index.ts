import 'dotenv/config';

import { app } from './app';

const port = parseInt(process.env.PORT ?? '3001', 10);
const hostname = process.env.HOSTNAME ?? 'localhost';

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
