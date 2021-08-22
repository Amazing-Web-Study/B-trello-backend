import mongoose from 'mongoose'
const bcrypt = require('bcrypt')
const saltRounds = 10

const UserSchema = new mongoose.Schema({
    id: { type: String, default: 0, required: true },
    name: { type: String, required: true },
    pw: { type: String, required: true, trim: true, minlength: 6 }
},{
    versionKey: false
})

// password hashing bcrypt
UserSchema.pre('save', function(next:any):void {
    let user:any = this
    if (user.isModified('pw')) {
        bcrypt.genSalt(saltRounds, (err:any, salt:any):void => {
            if(err) next(err)
            bcrypt.hash(user.pw, salt, (err:any, hash:any):void => {
                if (err) next(err)
                user.pw = hash
                next()
            })
        })
    } else {
        next()
    }
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

