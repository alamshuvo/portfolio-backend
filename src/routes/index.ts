import { Router } from "express";
import blogRoute from "../modules/blogs/blogs.route";

const router = Router()
const moduleRoutes = [
    {
        path:"/blogs",
        route:blogRoute
    }
]

moduleRoutes.forEach((route)=>router.use(route.path,route.route))
export default router