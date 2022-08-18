const mongoose = require('mongoose');
const { post } = require('../../route/users/userRoute');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            default: 'All',
        },
        isLike: {
            type: Boolean,
            default: false,
        },
        numViews: {
            type: Number,
            default: 0,
        },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ],
        disLikes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ],
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        description: {
            type: String,
            required: true,
        },


    },
    {
        toJSON:{
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true
    }
);


const Post = mongoose.model('Post', postSchema);

module.exports = Post;