import { GraphQLDirective, GraphQLList, GraphQLInt, DirectiveLocation } from 'graphql';

export const semanticNonNullDirective = new GraphQLDirective({
  name: 'semanticNonNull',
  locations: [DirectiveLocation.FIELD_DEFINITION],
  args: {
    levels: {
      type: new GraphQLList(GraphQLInt),
      defaultValue: [0],
    },
  },
});
