import * as express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';

import {getDB} from './db';
import {problemRouter} from './routes';

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

const app = express();
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

  app.use('/problems', problemRouter);

  app.get('/', (req, res) => {
    res.status(200);
    res.send('IT FINALLY WORKS!');
  });

  //delete soon, for messing around only

  app.get('/zxc', (req, res) => {
    res.status(200);
    res.send('ayy');
  });

  app.get('/zxc/qwe', (req, res) => {
    res.status(200);
    res.send('ayy132');
  });
};

initialise();
