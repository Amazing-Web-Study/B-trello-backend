import mongoose from 'mongoose'
const autoIncrement = require('mongoose-auto-increment')
autoIncrement.initialize(mongoose.connection)

const UserSchema = new mongoose.Schema({
    id: { type: Number, default: 0, required: true },
    name: { type: String, required: true },
    pw: { type: String, required: true, trim: true }
})

// user id auto increment
UserSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: 'id',
    startAt: 1,
    increment: 1
})

module.exports = mongoose.model('User', UserSchema)