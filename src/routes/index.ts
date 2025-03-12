import { Router } from "express";
import blogRoute from "../modules/blogs/blogs.route";
import projectRoute from "../modules/projects/project.route";
import messageRoute from "../modules/message/message.route";

const router = Router()
const moduleRoutes = [
    {
        path:"/blogs",
        route:blogRoute
    },
    {
        path:"/project",
        route:projectRoute
    },
    {
        path:"/message",
        route:messageRoute
    }
]

moduleRoutes.forEach((route)=>router.use(route.path,route.route))
export default router