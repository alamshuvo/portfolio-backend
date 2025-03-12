import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectService } from "./project.service";


const createProjects = catchAsync(async(req,res)=>{
    const result = await projectService.createProjects(req.body);
    sendResponse(res,{
        statusCode:StatusCodes.CREATED,
        sucess:true,
        message:"Blogs Created Sucessfully",
        data:result
    })
})

const getAllProjects = catchAsync(async(req,res)=>{
    const result = await projectService.getAllProjects();
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"All Blogs Retrived Sucessfully",
        data:result
    })
})

const getSingleProject = catchAsync(async(req,res)=>{
    const blogId = req.params.id;
    const result = await projectService.getSingleProject(blogId);
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"Single Blogs Retrived Sucessfully",
        data:result
    })
})

const updateProject = catchAsync(async(req,res)=>{
    const blogId = req.params.id;
    const payload = req.body
    console.log(blogId,payload);
    const result = await projectService.getUpdateProject(blogId,payload);
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"Single Blogs update Sucessfully",
        data:result
    })
})

const deleteProject = catchAsync(async(req,res)=>{
    const blogId = req.params.id;
    const result = await projectService.deleteProject(blogId);
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"single blog delete sucessfully",
        data:result
    })
})




export const projectsController = {
    createProjects,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject
}