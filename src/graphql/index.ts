import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import Server from './types/Server.graphql';

const servers = [
  {
    id: 1,
    name: 'Server1',
    healthCheckUri: 'https://api.durf.dev.stackworx.io/health',
  },
  {
    id: 2,
    name: 'Server2',
    healthCheckUri: 'https://prima.run/health',
  },
  {
    id: 3,
    name: 'Server3',
    healthCheckUri: 'https://stackworx.io/',
  },
];

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        description: 'A simple type for getting started!',
        resolve: () => 'world',
      },
      servers: {
        type: new GraphQLList(Server),
        description: 'List of Servers that we are checking',
        resolve: () => servers,
      },
    },
  }),
});
