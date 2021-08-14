import mongoose from 'mongoose'

module.exports = () => {
    const connect = () => {
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true)
        }
        const MONGO_URL = process.env.DB_IDPW + ''

        mongoose
            .connect(MONGO_URL, { dbName: 'trello', useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('MongoDB Connection')
            })
            .catch((e:any) => {console.log(e)})
    }

    connect()
    // connection err 시 실행될 훅
    mongoose.connection.on('error', (error:any) => {
        console.log('mongodb connection Error!')
    })
    // disconnected 됬을때 다시 연결 시도하는 훅
    mongoose.connection.on('disconnected', () => {
        console.log('mongodb disconnected! try again connect')
        connect()
    })
    // Schema 연결
    require('../models/Card')
    require('../models/User')
    require('../models/List')
}
