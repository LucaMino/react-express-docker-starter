import User from '../models/user.js'

export const getHomeData = async (req, res) => {
    // retrieve all users
    const users = await User.findAll({ limit: 5 })

    res.send(users)
}