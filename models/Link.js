import { Schema, model } from "mongoose";

const LinkSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    clicks: {
        type: Number,
        default: 0
    },
    password: {
        type: Number,
        default: null
    },
    security: {
        type: Boolean,
        default: false
    }
})

const Link = model("Link", LinkSchema)

export default Link
