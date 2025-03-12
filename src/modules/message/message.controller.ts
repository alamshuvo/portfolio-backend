import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";
import { catchAsync } from "../../utils/catchAsync";
import { messageService } from "./message.service";

const createMessage = catchAsync(async(req,res)=>{
    const result = await messageService.createMessage(req.body);
    sendResponse(res,{
        statusCode:StatusCodes.CREATED,
        sucess:true,
        message:"Blogs Created Sucessfully",
        data:result
    })
})

const getAllMessage = catchAsync(async(req,res)=>{
    const result = await messageService.getAllMessage();
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"All Blogs Retrived Sucessfully",
        data:result
    })
})

export const messageController ={
    createMessage,
    getAllMessage
}