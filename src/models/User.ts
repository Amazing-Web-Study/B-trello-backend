import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    id: { type: String, default: 0, required: true },
    name: { type: String, required: true },
    pw: { type: String, required: true, trim: true, minlength: 6 }
})

const User = mongoose.model('User', UserSchema)
// const user1 = new User({
//     id: 'waterOne',
//     name: 'Choi',
//     pw: 'Choi1234'
// })
// user1.save()
//     .then(() => {
//         console.log('저장됨')
//     })
//     .catch((err:any) => {
//         console.error(err)
//     })
module.exports = User

