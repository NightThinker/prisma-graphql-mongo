const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Link {
    id: ID!
    descrinption: String!
    url: String!
  }

  type Query {
    info:  String!
    feed: [Link!]!
  }
`;

const links = [{
  id: 'link-0',
  url: 'www.test.com',
  descrinption: 'default test'
}]

const resolvers  = {
  Query: {
    info: () => 'String Info',
    feed: () => links
  },
  Link: {
    id: parent => parent.id,
    url: parent => parent.url,
    descrinption: parent => parent.descrinption,
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));