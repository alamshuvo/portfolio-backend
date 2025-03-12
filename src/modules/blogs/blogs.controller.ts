import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { blogsService } from "./blogs.service";

const createBlogs = catchAsync(async(req,res)=>{
    const result = await blogsService.createBlogs(req.body);
    sendResponse(res,{
        statusCode:StatusCodes.CREATED,
        sucess:true,
        message:"Blogs Created Sucessfully",
        data:result
    })
})

const getAllBlogs = catchAsync(async(req,res)=>{
    const result = await blogsService.getAllBlogs();
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"All Blogs Retrived Sucessfully",
        data:result
    })
})

const getSingleBlog = catchAsync(async(req,res)=>{
    const blogId = req.params.id;
    const result = await blogsService.getSingleBlog(blogId);
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"Single Blogs Retrived Sucessfully",
        data:result
    })
})

const updateBlog = catchAsync(async(req,res)=>{
    const blogId = req.params.id;
    const payload = req.body
    console.log(blogId,payload);
    const result = await blogsService.getUpdateBlog(blogId,payload);
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"Single Blogs update Sucessfully",
        data:result
    })
})

const deleteBlog = catchAsync(async(req,res)=>{
    const blogId = req.params.id;
    const result = await blogsService.deleteBlog(blogId);
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"single blog delete sucessfully",
        data:result
    })
})




export const blogsController = {
    createBlogs,
    getAllBlogs,
    getSingleBlog,
    updateBlog,
    deleteBlog
}