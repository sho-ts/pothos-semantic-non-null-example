import type { SchemaTypes } from '@pothos/core';
import type { SemanticNonNullPlugin } from '.';

declare global {
  export namespace PothosSchemaTypes {
    export interface Plugins<Types extends SchemaTypes> {
      semanticNonNull: SemanticNonNullPlugin<Types>;
    }
  }
}
