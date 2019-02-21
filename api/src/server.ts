//const express = require('express');
//const { ApolloServer, gql } = require('apollo-server-express');

import * as express from 'express';
import {ApolloServer, gql} from 'apollo-server-express';

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

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

const port = 4040;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);

app.get('/', (req, res) => {
	res.status(200);
	res.send('hello there, this is where the fun begins. more nit changes. using nodemon now');
});
