import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { createContext } from './context';
import { createSchema } from './schema';

(async () => {
  const server = new ApolloServer({
    schema: await createSchema(),
    playground: true,
    context: createContext
  });
  const { url } = await server.listen({ port: 4000 });
  console.log(`server ready at ${url}`);
})().catch(console.error);
