import bcrypt from 'bcrypt';

import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    
    email: { 
        type: String,
        required: [true, 'User email is required!'],
    },
    password: { 
        type: String,
        required: [true, 'User password is required!'],
    }
});

userSchema.virtual('repeatPassword')
.get(function() {
    return this._repeatPassword;
})
.set(function(value) {
    this._repeatPassword = value;
});

userSchema.pre('validate', function() {
    if (this.isNew && this.password !== this._repeatPassword) {
        throw new Error('Password mismatch');
    }
})

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 12);
})

const User = model('User', userSchema);

export default User;