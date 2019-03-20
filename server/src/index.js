const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client')

const resolvers  = {
  Query: {
    info: () => 'String Info',
    feed: (root, args, context, info) => context.prisma.links()
  },
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        descrinption: args.descrinption
      })
    }
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));