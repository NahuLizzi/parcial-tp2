const users = [
    { 
        id: 1, 
        name: "Nahuel", 
        email: "nahue@example.com", 
        age: 28 
    },
        { 
        id: 2, 
        name: "Pepe", 
        email: "pepe@example.com", 
        age: 45
    },
    { 
        id: 3, 
        name: "roberto", 
        email: "roberto@example.com", 
        age: 28 
    },
    { 
        id: 4, 
        name: "Pérez", 
        email: "perez@example.com", 
        age: 16
    }
]

const getUsers = async () => {
    return await users
}

const putUsers = async (id, newData) => {
    const index = await users.findIndex(u => u.id === id)
    if (index === -1) return console.log("No existe el usuario.")
    users[index] = { ...users[index], ...newData, id }
    return users[index]
}

const postUsers = (user) => {
    users.push(user)
    return user
}

const getUsersByRange = (range) => {
    let filtered = []
    if (range === "young") filtered = users.filter(u => u.age < 30)
    else if (range === "adult") filtered = users.filter(u => u.age >= 30 && u.age < 60)
    else if (range === "senior") filtered = users.filter(u => u.age >= 60)
    return { total: filtered.length, data: filtered }
}

export default {
    getUsers,
    postUsers,
    putUsers,
    getUsersByRange
}