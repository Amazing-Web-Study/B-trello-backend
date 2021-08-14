import mongoose from 'mongoose'
const autoIncrement = require('mongoose-auto-increment')
autoIncrement.initialize(mongoose.connection)

const UserSchema = new mongoose.Schema({
    id: { type: Number, default: 0, required: true },
    name: { type: String, required: true },
    pw: { type: String, required: true, trim: true, minlength: 6 }
})

// user id auto increment
UserSchema.plugin(autoIncrement.plugin, {
    model: 'User',
    field: 'id',
    startAt: 1,
    increment: 1
})

const User = mongoose.model('User', UserSchema)
// const user1 = new User({
//     id: 1,
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
export default User

