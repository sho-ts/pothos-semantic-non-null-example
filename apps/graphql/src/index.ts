import { yoga } from './yoga';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

app.mount('/graphql', yoga);

serve(
  {
    fetch: app.fetch,
    port: Number(3000),
  },
  (info) => {
    console.log(`Server is running on ${info.port}`);
  }
);
