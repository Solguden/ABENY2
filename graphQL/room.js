const {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLBoolean
} = require('graphql');

const Room = new GraphQLObjectType({
    name: 'Room',
    fields: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        number: { type: new GraphQLNonNull(GraphQLInt) },
        hotelName: { type: new GraphQLNonNull(GraphQLString) },
        available: { type: new GraphQLNonNull(GraphQLBoolean) },
        hotelId: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
        numberOfBeds: { type: new GraphQLNonNull(GraphQLInt) },
        minibar: { type: new GraphQLNonNull(GraphQLBoolean) }
    }
})

module.exports = Room;