const HotelsColl = require('../models/hotel');
const RoomsColl = require('../models/room');

module.exports = {
    getRoomById,
    getRoomsByHotelId,
    updateRoomAvailability,
    getRooms,
    createRoom
}

//Queries
async function getRooms() {
    return await RoomsColl.find()
    .then(rooms => {
        return rooms.map(r => ({...r._doc}))
    })
    .catch(err => {
        console.error(err)
    })
}

async function getRoomById(roomId) {
    return await RoomsColl.findById(roomId)
    .then(room => {
        return {...room._doc}
    })
    .catch(err => {
        console.error(err)
    })
}

async function getRoomsByHotelId(hotelId) {
    return await HotelsColl.findById(hotelId)
    .then(hotel => {
        return hotel.rooms
    })
    .catch(err => {
        console.error(err)
    })
}

//Mutations

async function createRoom(number, hotelName, hotelId) {
    const room = new RoomsColl({
        number: number,
        hotelName: hotelName,
        hotelId: hotelId
    });

    const persistedRoom = await room.save();

    if (!persistedRoom) {
        return;
    }
    else{
        let hotel = await HotelsColl.findByIdAndUpdate(hotelId, 
            // hotel.rooms.push(room))
    
            {$push: {"rooms": {number: room.number, hotelName: room.hotelName}}},
            {safe: true, upsert: true, new : true}
        )
        const persistedHotel = await hotel.save();
        return room;
    }
}

async function updateRoomAvailability(roomId,available) { //userId
    const room = await RoomsColl.findByIdAndUpdate(roomId, {
        available: available
    });
    //const persistedRoom = await room.save();
    return room;
}


