const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const EventSchema = new Schema({
title: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
time: {
    type: Date,
    required: true
},
location:{
    type: String,
    required: true
}})

module.exports = mongoose.model('Events', EventSchema);