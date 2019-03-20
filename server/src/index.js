const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client')

const links = [{
  id: 'link-0',
  url: 'www.test.com',
  descrinption: 'default test'
}]

const main = async () => {
  const newLink = await prisma.createLink({
    url: "connectPrisma.com",
    descrinption: "add data to prisma"
  })
  console.log(`Created new link: ${newLink.url} (ID: ${newLink.id})`)

  const allLinks = await prisma.links()
  console.log(allLinks)
}

main().catch(err => console.log(err))

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