import type { SchemaTypes } from '@pothos/core';
import type { SemanticNonNullPlugin } from '.';
import type { SemanticNonNullArgs } from './types';

declare global {
  export namespace PothosSchemaTypes {
    export interface Plugins<Types extends SchemaTypes> {
      semanticNonNull: SemanticNonNullPlugin<Types>;
    }

    export interface FieldOptions {
      semanticNonNull?: SemanticNonNullArgs;
    }
  }
}
