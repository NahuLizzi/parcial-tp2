import usersModelServer from "./users.model.server.js"
import usersModelFS from "./users.model.fs.js"

const factory = async (type) =>{
    switch (type){
        case "MEM":
            //console.log("Persistiendo en Memoria.")
            return await usersModelFS
        default:
            //console.log("Persistiendo en Servidor.")
            return await usersModelServer
    }
}

export default factory