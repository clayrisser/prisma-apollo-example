import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  const { url } = await server.listen();
  console.log(`Server ready at ${url}`);
})();
