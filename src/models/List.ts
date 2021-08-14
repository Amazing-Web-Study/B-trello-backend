import mongoose from 'mongoose'
import Card from "./Card";

const ListSchema = new mongoose.Schema({
    user_id: { type: Number, required: true },
    title: { type: String, required: true },
    date: { type: Date, required: true }
})

const List = mongoose.model('List', ListSchema)
// const list1 = new List({
//     user_id: 2,
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
export default List
