import SchemaBuilder, {
  BasePlugin,
  type SchemaTypes,
} from '@pothos/core';

const pluginName = 'semanticNonNull' as const;

export default pluginName;

export class SemanticNonNullPlugin<Types extends SchemaTypes> extends BasePlugin<Types> {}

SchemaBuilder.registerPlugin(pluginName, SemanticNonNullPlugin);