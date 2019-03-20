const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const APP_SECRET = 'GraphQL-SUPERSECRET';

const getUserId = context => {
  const Authorization = context.request.get('Authorization');
  if(!Authorization) {
    throw new Error('Not authenticated')
  }
  const token = Authorization.replace('Bearer ', '');
  const { userId } = jwt.verify(token, APP_SECRET)
  return userId
}

const postedBy = (parent, args, context) => {
  return context.prisma.link({ id: parent.id }).postedBy()
}

const links = (parent, args, context) => {
  console.log('TCL: links -> parent', parent)
  const test = context.prisma.user({ id: parent.id}).links()
  console.log('TCL: links -> test', test)

  return context.prisma.user({ id: parent.id }).links()
}

const resolvers  = {
  Query: {
    feed: (root, args, context, info) => context.prisma.links()
  },
  Mutation: {
    post: (root, args, context) => {
			console.log('TCL: args', args)
      const userId = getUserId(context);
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
        postedBy: { connect: {id: userId}}
      })
    },
    singup: async (root, args, context, info) => {
      const existingUser = await context.prisma.user({ email: args.email })
      if(existingUser) {
        throw new Error('User exists already.')
      }
      const password = await bcrypt.hash(args.password, 12);
      const user = await context.prisma.createUser({...args, password})
			// console.log('TCL: user', user)
      const token = await jwt.sign({userId: user.id}, APP_SECRET)
			// console.log('TCL: token', token)
      return { token, user }
    },
    login: async (root, args, context, info) => {
      const user = await context.prisma.user({ email: args.email })
			console.log('TCL: user', user)
      if(!user) {
        throw new Error('No such user found')
      }

      const vaild = await bcrypt.compare(args.password, user.password)
      if(!vaild) {
        throw new Error('Invalid password')
      }
      const token = await jwt.sign({userId: user.id}, APP_SECRET)
      return { token, user }
    }
  },
  Link: postedBy,
  User: links
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