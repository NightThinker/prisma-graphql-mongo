const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { APP_SECRET, getUserId }  = require('../utils')

const post = (root, args, context) => {
  console.log('TCL: args', args)
  const userId = getUserId(context);
  return context.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: { connect: {id: userId}}
  })
};

const singup = async (root, args, context, info) => {
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
};

const login = async (root, args, context, info) => {
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
};

const vote =  async (root, args, context, info ) => {
  const userId = getUserId(context);
  const linkExists = await context.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId }
  })
  if(linkExists) {
    throw new Error(`Already voted for link: ${args.linkId}`)
  }
  return  context.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } }
  })
}

module.exports = {
  post,
  singup,
  login,
  vote
}