import SchemaBuilder from '@pothos/core';
import RelayPlugin from '@pothos/plugin-relay';

export const builder = new SchemaBuilder<{
  DefaultFieldNullability: false;
  Context: {};
}>({
  defaultFieldNullability: false,
  plugins: [RelayPlugin],
  relay: {
    nodeQueryOptions: {
      nullable: true,
    },
  },
});

builder.queryType({
  fields: (t) => ({
    healthCheck: t.int({
      resolve: () => {
        return 1;
      },
    }),
  }),
});

// builder.mutationType({});
