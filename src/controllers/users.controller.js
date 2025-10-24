import usersService from "../services/users.service.js"


const getUsers = async (req, res) =>{
    const users = await usersService.getUsers()
    res.send(users)
}
const postUsers = async (req, res) =>{
    const data = req.body
    const {id} = req.params
    const user = await usersService.postUsers(id, data)
    res.send(user)
}

const putUsers = async  (req, res) =>{
    const data = req.body
    const {id} = req.params
    const user = await usersService.postUsers(id, data)
    res.send(user)
}

const getUsersByRange = async (req, res) => {
    const {min, max} = req.query
    const users = await usersService.getUsersByRange(min, max)
    res.send(users)
}

export default{
    getUsers, 
    postUsers,
    putUsers,
    getUsersByRange
}