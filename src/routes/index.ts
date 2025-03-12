import { Router } from "express";
import blogRoute from "../modules/blogs/blogs.route";
import projectRoute from "../modules/projects/project.route";

const router = Router()
const moduleRoutes = [
    {
        path:"/blogs",
        route:blogRoute
    },
    {
        path:"/project",
        route:projectRoute
    }
]

moduleRoutes.forEach((route)=>router.use(route.path,route.route))
export default router