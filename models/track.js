const mongoose =  require('mongoose');

const tracksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    }
});

const Track = mongoose.model('Track', tracksSchema)