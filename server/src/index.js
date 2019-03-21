const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client')

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Link = require('./resolvers/Link');
const User = require('./resolvers/User');
const Subscription = require('./Subscription')
const Vote = require('./resolvers/Vote')

const resolvers  = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  } 
});

server.start(() => console.log(`Server is running on http://localhost:4000`));