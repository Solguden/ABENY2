const { GraphQLSchema, printSchema } = require('graphql')

const QueryType = require('./queries')
const MutationType = require('./mutations')

const schema = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})
console.log(printSchema(schema));

module.exports = schema
