import path from 'path';
import { buildSchema } from 'type-graphql';
import resolvers from './resolvers';

export async function createSchema() {
  return buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(
      __dirname,
      'generated/generated-schema.graphql'
    ),
    validate: false
  });
}
