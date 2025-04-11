import User from '../models/user.model.js'

class HomeController
{
    constructor() { }

    async getHomeData(req, res)
    {
        // retrieve all users
        const users = await User.findAll({ limit: 5 })
        res.send(users)
    }
}

// export an instance of the class
export default new HomeController()