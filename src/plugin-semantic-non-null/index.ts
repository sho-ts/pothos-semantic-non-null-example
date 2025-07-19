import SchemaBuilder, {
  BasePlugin,
  type PothosOutputFieldConfig,
  type SchemaTypes,
} from '@pothos/core';

const pluginName = 'semanticNonNull' as const;

export default pluginName;

const directive = {
  name: 'semanticNonNull',
  args: {},
};

export class SemanticNonNullPlugin<Types extends SchemaTypes> extends BasePlugin<Types> {
  override onOutputFieldConfig(
    fieldConfig: PothosOutputFieldConfig<Types>
  ): PothosOutputFieldConfig<Types> | null {
    const option = fieldConfig.pothosOptions.semanticNonNull;

    if (option) {
      if (!Array.isArray(fieldConfig.extensions?.directives)) {
        fieldConfig.extensions = {
          ...fieldConfig.extensions,
          directives: [directive],
        };
      } else {
        fieldConfig.extensions?.directives.push(directive);
      }
    }

    return fieldConfig;
  }
}

SchemaBuilder.registerPlugin(pluginName, SemanticNonNullPlugin);
