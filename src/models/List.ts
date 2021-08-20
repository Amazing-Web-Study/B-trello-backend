import mongoose from 'mongoose'

const ListSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId },
    // user_id 타입은 _id(ObjectId) 타입이다.
    title: { type: String, required: true },
    date: { type: Date }
})

const List = mongoose.model('List', ListSchema)
// const list1 = new List({
//     user_id: new mongoose.Types.ObjectId(),
//     title: '테스트아아아아',
//     date: new Date()
// })
//
// list1.save()
//     .then(() => {
//         console.log('저장됨')
//     })
//     .catch((err:any) => {
//         console.error(err)
//     })
module.exports = List
