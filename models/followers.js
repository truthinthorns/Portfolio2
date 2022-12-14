const mongoose = require('mongoose');
const { Schema } = mongoose;

const FollowerSchema = new Schema({
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Follower', FollowerSchema);