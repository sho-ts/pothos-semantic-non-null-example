import { schema } from '@/src/schema';
import { createYoga } from 'graphql-yoga';
import { printSchema, lexicographicSortSchema } from 'graphql';
import { writeFileSync } from 'fs';

writeFileSync('./schema.graphql', printSchema(lexicographicSortSchema(schema)));

export const yoga = createYoga({
  graphqlEndpoint: '/',
  fetchAPI: {
    fetch,
    Request,
    ReadableStream,
    Response,
  },
  schema,
});
