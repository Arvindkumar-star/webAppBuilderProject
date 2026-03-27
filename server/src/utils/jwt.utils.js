import jwt from 'jsonwebToken';

export const generateToken = (user) =>{
    const payLoad = {
        id: user._id,
        email:user.email
    }

    return jwt.sign(payLoad,process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_SECRET_EXPIRES_IN || '7d'
    });
}

export const verifyToken = (token)=> {
    return jwt.verify(token,process.env.JWT_SECRET);
}