import {Schema} from "mongoose";

const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    _id: { type: Number, required: true, unique: true},
    user_id: { type: Number, required: true, unique: true},
    title: { type: String, required: true},
    date: { type: Date, required: true}
})
