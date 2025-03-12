import message from "./message.model"
import { Tmessage } from "./message.types"

const createMessage = async(payload:Tmessage)=>{
    const result = await message.create(payload)
    return result
}

const getAllMessage = async()=>{
    const result = await message.find()
    return result
}

export const  messageService ={
    createMessage,
    getAllMessage
}