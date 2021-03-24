const {GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLList,} =  require('graphql')

const Room = require('./room')

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        createRoom:{
            type: Room,
            args: {
                number: {type: new GraphQLNonNull(GraphQLInt)},
                hotelName: {type: new GraphQLNonNull(GraphQLString)},
                hotelId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: async (source, args, { resolvers }) => {
                return resolvers.createRoom(args.number,args.hotelName,args.hotelId)
            }
        },
        updateRoomAvailability:{
            type: Room,
            args: {
                roomId: { type: new GraphQLNonNull(GraphQLID) },
                available: { type: new GraphQLNonNull(GraphQLBoolean)}
            },
            resolve: async (source, args, { resolvers }) => {
                return resolvers.updateRoomAvailability(args.roomId, args.available)
            }
        }
    }
})

module.exports = MutationType