import path from 'path';
import { makeSchema } from 'nexus';
import { nexusPrismaPlugin } from 'nexus-prisma';
import models from './models';
import mutations from './mutations';

export default makeSchema({
  types: [...Object.values(mutations), ...Object.values(models)],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: path.resolve(__dirname, 'generated/schema.graphql'),
    typegen: path.resolve(__dirname, 'generated/nexus.ts')
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/photon',
        alias: 'photon'
      },
      {
        source: require.resolve('./context'),
        alias: 'Context'
      }
    ]
  }
});
