const users = require('../utils/users')

const login = async (req, res) => {
    
    const { email, password } = req.query;
        let usersFound = users.find((user)=> 
            user.email === email && user.password === password )
            
            return usersFound
            ? res.status(200).json({ access: true})
            : res.status(404).json({ access: false})
}   


module.exports = {
    login
}