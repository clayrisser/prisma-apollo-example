import path from 'path';
import { UserRelationsResolver } from './generated/type-graphql';
import { buildSchema } from 'type-graphql';

export async function createSchema() {
  return buildSchema({
    resolvers: [UserRelationsResolver],
    emitSchemaFile: path.resolve(__dirname, './generated-schema.graphql'),
    validate: false
  });
}
