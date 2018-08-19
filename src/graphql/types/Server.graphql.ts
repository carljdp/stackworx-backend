import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLEnumType,
} from 'graphql';

const ServerStatusEnum = new GraphQLEnumType({
  name: 'ServerStatus',
  values: {
    UP: {value: 'UP'},
    DOWN: {value: 'DOWN'},
    UNKNOWN: {value: 'UNKNOWN'},
  },
});

const serverStatus: {
  [key: number]: string;
} = {
  1: 'UNKNOWN',
  2: 'UNKNOWN',
  3: 'UNKNOWN',
};

export default new GraphQLObjectType({
  name: 'Server',
  fields: {
    id: {
      type: GraphQLInt,
      description: 'ID',
    },
    name: {
      type: GraphQLString,
      description: 'Name',
    },
    healthCheckUri: {
      type: GraphQLString,
      description: 'Health Check Uri',
    },
    lastTimeUp: {
      type: GraphQLString,
      description: 'Timestamp at which the server was last responding',
    },
    status: {
      type: ServerStatusEnum,
      description: 'What is the current server status?',
      resolve: (parent) => {
        console.log(parent);
        return serverStatus[parent.id];
      },
    },
  },
});
