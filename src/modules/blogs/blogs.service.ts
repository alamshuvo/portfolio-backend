import Blogs from "./blogs.model"
import { BlogsType } from "./blogs.types"

const createBlogs = async(payload:BlogsType)=>{
    const result = await Blogs.create(payload)
    return result
}

const getAllBlogs = async()=>{
    const result = await Blogs.find()
    return result
}
const getSingleBlog = async(id:string)=>{
    const result =await Blogs.findById(id)
    return result
}
const getUpdateBlog = async(id:string,data:BlogsType)=>{
    const result= await Blogs.findByIdAndUpdate(id,data,{
        new:true
    })
    return result
}

const deleteBlog = async(id:string)=>{
    const result = await Blogs.findByIdAndDelete(id);
    return result
}


export const blogsService = {
    createBlogs,
    getAllBlogs,
    getSingleBlog,
    getUpdateBlog,
    deleteBlog
}