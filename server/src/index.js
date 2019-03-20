const { GraphQLServer } = require('graphql-yoga');

const links = [{
  id: 'link-0',
  url: 'www.test.com',
  descrinption: 'default test'
}]

let idCount =  links.length;

const resolvers  = {
  Query: {
    info: () => 'String Info',
    feed: () => links
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        url: args.url,
        descrinption: args.descrinption,
      }
      links.push(link)
      return link
    }
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));