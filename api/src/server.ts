import express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';

import {getDB} from './db';
import apiRouter, {problemRouter, tagRouter} from './routes';

var bodyParser = require('body-parser');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const app: express.Application = express();
server.applyMiddleware({app});

const port = 4040;

const initialise = async () => {
  app.locals.db = await getDB();
  app.use(express.static(__dirname + '/public'));

  app.use(
    bodyParser.urlencoded({
      extended: false,
    }),
  );

  app.use(bodyParser.json());

  app.listen({port}, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
    );
    console.log('We are also live at http://13.67.110.102/');
  });

  // app.use('/problems', problemRouter);
  app.use('/api', apiRouter);

  app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200);
    res.send('IT FINALLY WORKS!');
  });
};

initialise();
