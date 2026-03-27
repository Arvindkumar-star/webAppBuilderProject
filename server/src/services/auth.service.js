import bcrypt from 'bcryptjs';
import User from '../models/User.model.js';
import { generateToken } from '../utils/jwt.utils.js';

export const register = async (name, email, password) => {
    const existing = await User.findOne({ email });
    if (existing) {
        const error = new Error('Email already exists');
        error.status = 400;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    const token = generateToken(user);

    return {
        token,
        user: { id: user._id, name: user.name, email: user.email }
    };

}

export const emailLogin = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        const error = new Error('Invalid email and password');
        error.statusCode = 401;;
        throw error;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        const error = new Error('Invalid email and password');
        error.statusCode = 401;
        throw error;
    }
    user.lastLogin = new Date();
    await user.save();
    const token = generateToken(user);

    return {
        token,
        user: { id: user._id, name: user.name, email: user.email }
    }
};

export const getUserprofile = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
    }
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt
    };
};


