import * as express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';

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

const server = new ApolloServer({typeDefs, resolvers, introspection: true, playground: true  });

const app = express();
server.applyMiddleware({app});

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

const port = 4040;

app.listen({port}, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`,
  );
  console.log('We are also live at http://13.67.110.102/');
});


app.get('/', (req, res) => {
  res.status(200);
  res.send(
    'IT FINALLY WORKS!',
  );
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
