const link = (parent, agrs, context) => {
  return context.prisma.vote({ id: parent.id}).link()
}

const user = (parent, agrs, context) => {
  return context.prisma.vote({ id: parent.id}).user()
}

module.exports = {
  link,
  user
}