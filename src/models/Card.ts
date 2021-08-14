import mongoose from 'mongoose'

const CardSchema = new mongoose.Schema({
    list_id: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
    content: { type: String },
    file: { type: String },
    state: { type: Number, required: true },
    date: { type: Date }
})

const Card = mongoose.model('Card', CardSchema)
// const card1 = new Card({
//     list_id: 1,
//     content: 'fkff',
//     state: 1,
//     date: new Date()
// })
// card1.save()
//     .then(() => {
//         console.log('저장됨')
//     })
//     .catch((err:any) => {
//         console.error(err)
//     })
export default Card


