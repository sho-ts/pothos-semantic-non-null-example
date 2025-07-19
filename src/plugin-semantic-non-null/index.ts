import SchemaBuilder, {
  BasePlugin,
  type PothosOutputFieldConfig,
  type SchemaTypes,
} from '@pothos/core';

const pluginName = 'semanticNonNull' as const;

export default pluginName;

export type SemanticNonNullOptions =
  | boolean
  | {
      levels: number[];
    };

const transformDirective = (options: SemanticNonNullOptions) => {
  if (typeof options === 'boolean') {
    return {
      name: 'semanticNonNull',
      args: {},
    };
  }

  return {
    name: 'semanticNonNull',
    args: options,
  };
};

export class SemanticNonNullPlugin<Types extends SchemaTypes> extends BasePlugin<Types> {
  override onOutputFieldConfig(
    fieldConfig: PothosOutputFieldConfig<Types>
  ): PothosOutputFieldConfig<Types> | null {
    const semanticNonNullOptions = fieldConfig.pothosOptions.semanticNonNull;

    if (semanticNonNullOptions) {
      if (!Array.isArray(fieldConfig.extensions?.directives)) {
        fieldConfig.extensions = {
          ...fieldConfig.extensions,
          directives: [transformDirective(semanticNonNullOptions)],
        };
      } else {
        fieldConfig.extensions?.directives.push(transformDirective(semanticNonNullOptions));
      }
    }

    return fieldConfig;
  }
}

SchemaBuilder.registerPlugin(pluginName, SemanticNonNullPlugin);
