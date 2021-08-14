import mongoose from 'mongoose'

const CardSchema = new mongoose.Schema({
    list_id: { type: mongoose.Schema.Types.ObjectId, ref: 'List', required: true },
    content: { type: String },
    file: { type: String },
    state: { type: Number, required: true },
    date: { type: Date }
})

module.exports = mongoose.model('Card', CardSchema)