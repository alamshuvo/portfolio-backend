import Projects from "./project.model"
import { ProjectType } from "./projects.type"


const createProjects = async(payload:ProjectType)=>{
    const result = await Projects.create(payload)
    return result
}

const getAllProjects = async()=>{
    const result = await Projects.find()
    return result
}
const getSingleProject = async(id:string)=>{
    const result =await Projects.findById(id)
    return result
}
const getUpdateProject = async(id:string,data:ProjectType)=>{
    const result= await Projects.findByIdAndUpdate(id,data,{
        new:true
    })
    return result
}

const deleteProject = async(id:string)=>{
    const result = await Projects.findByIdAndDelete(id);
    return result
}


export const projectService = {
    createProjects,
    getAllProjects,
    getSingleProject,
    getUpdateProject,
    deleteProject
}