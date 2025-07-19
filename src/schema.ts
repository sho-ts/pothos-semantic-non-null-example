import { builder } from './builder';
import { semanticNonNullDirective } from './plugin-semantic-non-null/directive';

export const schema = builder.toSchema({
  directives: [semanticNonNullDirective]
});
