const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        firstName: {
            required: [ true, "First Name required" ],
            type: String,
        },
        lastName: {
            required: [ true, "Last Name required" ],
            type: String,
        },
        displayName: {
            type: String,
            default: ''
        },
        profilePhoto: {
            type: String,
            default: ''
        } ,
        email: {
            type: String,
            required: [ true, "Email Address required" ],
        },
        bio: {
            type: String,
        },
        password: {
            type: String,
            required: [ true, "Password required" ],
        },
        postCount: {
            type: Number,
            default: 0,
        },
        isBlocked: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        role:{
            type: String,
            enum: ['Admin', 'Guest', 'Blogger']
            },
        isFollowing: {
            type: Boolean,
            default: false,
        },
        isUnfollowing: {
            type: Boolean,
            default: false,
        },
        isAccountVerified: {
            type: Boolean,
            default: false,
        },
        accountVerificationToken: String,
        accountVerificationTokenExpiredDate: Date,
        
        
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

userSchema.virtual("posts", {
    ref: "Post",
    foreignField: "user",
    localField: "_id",
  });
  


// hash password
userSchema.pre('save', async function (req, res, next) {

    // hash password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();

});

// match password
userSchema.methods.isPasswordMatch = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
    
}
const User = mongoose.model("User", userSchema);

module.exports = User;
