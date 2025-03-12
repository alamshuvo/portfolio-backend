import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { blogsValidation } from "./blogs.validation";
import { blogsController } from "./blogs.controller";

const blogRoute = Router();
blogRoute.post('/',validateRequest(blogsValidation.blogsValidationSchema),blogsController.createBlogs)
blogRoute.get('/',blogsController.getAllBlogs)
blogRoute.get("/:id",blogsController.getSingleBlog)
blogRoute.patch("/:id",validateRequest(blogsValidation.blogsUpdateValidationSchema),blogsController.updateBlog)
blogRoute.delete("/:id",blogsController.deleteBlog)

export default blogRoute