import SchemaBuilder from '@pothos/core';
import DirectivePlugin from '@pothos/plugin-directives';
import SemanticNonNullPlugin from './plugin-semantic-non-null';

export const builder = new SchemaBuilder({
  plugins: [SemanticNonNullPlugin, DirectivePlugin],
});

const User = builder.objectRef<{
  name: string | undefined
}>('User');

User.implement({
  fields: (t) => ({
    name: t.exposeString('name', {
      semanticNonNull: true,
    }),
  }),
});

builder.queryType({
  fields: (t) => ({
    user: t.field({
      type: User,
      resolve: () => ({
        name: undefined,
      }),
    }),
  }),
});

// builder.mutationType({});
