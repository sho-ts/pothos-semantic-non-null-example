import SchemaBuilder from '@pothos/core';
import DirectivePlugin from '@pothos/plugin-directives';
import RelayPlugin from '@pothos/plugin-relay';
import SemanticNonNullPlugin from './plugin-semantic-non-null';

export const builder = new SchemaBuilder({
  plugins: [RelayPlugin, DirectivePlugin, SemanticNonNullPlugin],
});

const User = builder.objectRef<{
  name: string | undefined;
}>('User');

builder.node(User, {
  id: {
    resolve: () => `User:1`,
  },
  fields: (t) => ({
    name: t.field({
      type: 'String',
      semanticNonNull: true,
      resolve: () => {
        // 動作検証のためにダミーのエラーをthrow
        throw new Error('User name is not available');
      },
    }),
  }),
  loadOne: async () => ({
    name: undefined,
  }),
});

builder.queryType();
