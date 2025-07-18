import SchemaBuilder from '@pothos/core';

export const builder = new SchemaBuilder<{
  DefaultFieldNullability: false;
  Context: {};
}>({
  defaultFieldNullability: false,
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
