import { User } from '../models/user-model.js'

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({},{password:0});
        if(!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }
         return res.status(200).json({
            users,
            status: 'success',
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}