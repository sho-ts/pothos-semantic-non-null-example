import { builder } from './builder';
import { semanticNonNullDirective } from './directives/semantic-non-null';

export const schema = builder.toSchema({
  directives: [semanticNonNullDirective]
});
