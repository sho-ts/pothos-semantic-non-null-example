import SchemaBuilder, {
  BasePlugin,
  type PothosOutputFieldConfig,
  type SchemaTypes,
} from '@pothos/core';

const name = 'semanticNonNull' as const;

export default name;

export type SemanticNonNullArgs =
  | boolean
  | {
      levels: number[];
    };

const transformDirective = (args: SemanticNonNullArgs) => {
  if (typeof args === 'boolean') return { name, args: {} };

  return { name, args };
};

export class SemanticNonNullPlugin<Types extends SchemaTypes> extends BasePlugin<Types> {
  override onOutputFieldConfig(
    fieldConfig: PothosOutputFieldConfig<Types>
  ): PothosOutputFieldConfig<Types> | null {
    const semanticNonNullArgs = fieldConfig.pothosOptions.semanticNonNull;

    if (semanticNonNullArgs) {
      if (!Array.isArray(fieldConfig.extensions?.directives)) {
        fieldConfig.extensions = {
          ...fieldConfig.extensions,
          directives: [transformDirective(semanticNonNullArgs)],
        };
      } else {
        fieldConfig.extensions?.directives.push(transformDirective(semanticNonNullArgs));
      }
    }

    return fieldConfig;
  }
}

SchemaBuilder.registerPlugin(name, SemanticNonNullPlugin);
