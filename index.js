const { prisma } = require('./generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

resolvers = {
  Query:{
    user(root, args, context, info){
      return prisma.user({
         id: args.id
      })

    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers
})

server.start().then(() => console.log('Server running on http://localhost:4000'))



// const resolvers = require('./resolvers')
// async function main(){
//   await prisma.createUser({
//     name: 'Josefina',
//     email: 'josefina@gmail.com',
//     password: '123456'
//   })

//   const users = await prisma.users()

//   console.log('users',users);


// }

// main().catch(e => console.log(e) )