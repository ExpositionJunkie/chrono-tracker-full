import mongoose from 'mongoose';

const ratingSchema = mongoose.Schema({
    dateTime: {
        type: Date,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        get: v => Math.round(v),
        set: v => Math.round(v),
    },
    notes: {
        type: String,
    },
    ignorePressed: {
        type: Boolean,
        required: true,
        default: true,
    }
}, {
    timestamps: true
})

const Rating = mongoose.model('User', ratingSchema)

export default Rating