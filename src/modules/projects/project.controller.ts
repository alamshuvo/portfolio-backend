import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { projectService } from "./project.service";


const createProjects = catchAsync(async(req,res)=>{
    const result = await projectService.createProjects(req.body);
    sendResponse(res,{
        statusCode:StatusCodes.CREATED,
        sucess:true,
        message:"projects Created Sucessfully",
        data:result
    })
})

const getAllProjects = catchAsync(async(req,res)=>{
    const result = await projectService.getAllProjects();
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"All projects Retrived Sucessfully",
        data:result
    })
})

const getSingleProject = catchAsync(async(req,res)=>{
    const projectId = req.params.id;
    const result = await projectService.getSingleProject(projectId);
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"Single projects Retrived Sucessfully",
        data:result
    })
})

const updateProject = catchAsync(async(req,res)=>{
    const projectId = req.params.id;
    const payload = req.body

    const result = await projectService.getUpdateProject(projectId,payload);
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"Single projects update Sucessfully",
        data:result
    })
})

const deleteProject = catchAsync(async(req,res)=>{
    const projectId = req.params.id;
    const result = await projectService.deleteProject(projectId);
    sendResponse(res,{
        statusCode:StatusCodes.OK,
        sucess:true,
        message:"single project delete sucessfully",
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