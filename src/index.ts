import express, {Request} from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import errorHandler from 'errorhandler';
import {ApolloServer, gql} from 'apollo-server-express';

import {schema} from './graphql';
const server = new ApolloServer({schema});
const app = express();
server.applyMiddleware({app});
app.use(cors());
app.use(helmet());
app.use(errorHandler());

// Sample Endpoint
app.get('/', (req, res) => res.send('Hello World!'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `🚀  Server ready at http://localhost:${port}${server.graphqlPath}`
  );
  console.log('  Press CTRL-C to stop\n');
});
