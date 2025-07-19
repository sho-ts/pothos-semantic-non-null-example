import SchemaBuilder, {
  BasePlugin,
  type PothosOutputFieldConfig,
  type SchemaTypes,
} from '@pothos/core';
import type { SemanticNonNullArgs } from './types';

const name = 'semanticNonNull' as const;

export default name;

// semanticNonNull: trueなどの場合はデフォルト値を設定できるようにargsの変換関数を用意
const transformDirective = (args: SemanticNonNullArgs) => {
  if (typeof args === 'boolean') return { name, args: {} };

  return { name, args };
};

export class SemanticNonNullPlugin<Types extends SchemaTypes> extends BasePlugin<Types> {
  override onOutputFieldConfig(
    fieldConfig: PothosOutputFieldConfig<Types>
  ): PothosOutputFieldConfig<Types> | null {
    const semanticNonNullArgs = fieldConfig.pothosOptions.semanticNonNull;

    if (!semanticNonNullArgs) return fieldConfig;

    // 他のdirectivesが指定されていない場合は配列ごと追加する
    if (!Array.isArray(fieldConfig.extensions?.directives)) {
      fieldConfig.extensions = {
        ...fieldConfig.extensions,
        directives: [transformDirective(semanticNonNullArgs)],
      };
    } else {
      // 既存のdirectivesがある場合はpushする
      fieldConfig.extensions?.directives.push(transformDirective(semanticNonNullArgs));
    }

    return fieldConfig;
  }
}

SchemaBuilder.registerPlugin(name, SemanticNonNullPlugin);
