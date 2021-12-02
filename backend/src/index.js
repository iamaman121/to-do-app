import { GraphQLServer } from 'graphql-yoga'
import db from './db'
import Mutation from './resolvers/Mutation'
import Query from './resolvers/Query'


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
    },
    context: {
        db
    }
})


server.start(() => {
    console.log('The server is up!')
})