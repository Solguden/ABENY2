const {GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList,} =  require('graphql')

const Room = require('./room')

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields:{
        roomById:{
            type: Room,
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: async (source, args, { resolvers }) => {
                return resolvers.getRoomById(args.id)
            }
        },
        allRooms:{
            type: new GraphQLList(new GraphQLNonNull(Room)),
            resolve: async (source, args, {resolvers}) => {
                return resolvers.getRooms();
            }
        },
        roomsByHotelId:{
            type: new GraphQLList(new GraphQLNonNull(Room)),
            args: {
                id: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve: async (source, args, {resolvers}) => {
                return resolvers.getRoomsByHotelId(args.id);
            }
        }
    }
})

module.exports = QueryType