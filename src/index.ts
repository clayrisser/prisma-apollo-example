import { ApolloServer } from 'apollo-server';
import { Photon } from '@prisma/photon';
import schema from './schema';

const photon = new Photon();
const server = new ApolloServer({ schema, context: { photon } });

(async () => {
  const { url } = await server.listen({ port: 4000 });
  console.log(`server ready at ${url}`);
})();
