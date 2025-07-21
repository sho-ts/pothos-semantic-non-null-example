import SchemaBuilder, {
  BasePlugin,
  type PothosOutputFieldConfig,
  type SchemaTypes,
} from '@pothos/core';
import type { SemanticNonNullArgs } from './types';

const name = 'semanticNonNull' as const;

export default name;

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
        directives: [this.transformDirective(semanticNonNullArgs)],
      };
    } else {
      // 既存のdirectivesがある場合はpushする
      fieldConfig.extensions?.directives.push(this.transformDirective(semanticNonNullArgs));
    }

    return fieldConfig;
  }
  // フィールドの解決時にnullチェックを行うことも可能
  // override wrapResolve(
  //   resolver: GraphQLFieldResolver<unknown, Types['Context'], object>,
  //   fieldConfig: PothosOutputFieldConfig<Types>
  // ): GraphQLFieldResolver<unknown, Types['Context'], object> {
  //   if (!fieldConfig.pothosOptions.semanticNonNull) {
  //     return resolver;
  //   }

  //   return async (parent, args, context, info) => {
  //     const result = await resolver(parent, args, context, info);

  //     if (result === null || result === undefined) {
  //       throw new Error(
  //         `Field "${info.fieldName}" is non-nullable but received null or undefined.`)
  //     }

  //     return result;
  //   };
  // }

  // semanticNonNull: trueなどの場合はデフォルト値を設定できるようにargsの変換関数を用意
  private transformDirective(args: SemanticNonNullArgs) {
    if (typeof args === 'boolean') return { name, args: {} };

    return { name, args };
  }
}

SchemaBuilder.registerPlugin(name, SemanticNonNullPlugin);
