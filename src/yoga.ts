import { schema } from './schema';
import { createYoga } from 'graphql-yoga';
import { lexicographicSortSchema } from 'graphql';
import { writeFileSync } from 'fs';
import { printSchemaWithDirectives } from '@graphql-tools/utils'

writeFileSync('./schema.graphql', printSchemaWithDirectives(lexicographicSortSchema(schema), {
  pathToDirectivesInExtensions: ['semanticNonNull'],
}));

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
