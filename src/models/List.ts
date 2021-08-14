import mongoose from 'mongoose'

const ListSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true },
    date: { type: Date, required: true }
})

module.exports = mongoose.model('List', ListSchema)