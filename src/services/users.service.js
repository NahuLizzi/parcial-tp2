import factory from "../models/DAO/factory.js";

const userModel = await factory("MEM")

const getUsers = async ()=>{
    const users = await userModel.getUsers()
    return users
}
const postUsers = async (id, data) =>{
    const newUser = await userModel.postUsers(data)
    return newUser
}

const putUsers = async (id, data) =>{
    const user = await userModel.putUsers(id, data)
    return user
}

const getUsersByRange = async (range) => {
    const users = await userModel.getUsersByRange(range)
    return users
}

export default {
    getUsers,
    postUsers,
    putUsers,
    getUsersByRange
}