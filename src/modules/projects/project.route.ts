import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { projectsValidation } from "./project.validation";
import { projectsController } from "./project.controller";


const projectRoute = Router();
projectRoute.post('/',validateRequest(projectsValidation.projectValidationSchema),projectsController.createProjects)
projectRoute.get('/',projectsController.getAllProjects)
projectRoute.get("/:id",projectsController.getSingleProject)
projectRoute.patch("/:id",validateRequest(projectsValidation.projectUpdateValidationSchema),projectsController.updateProject)
projectRoute.delete("/:id",projectsController.deleteProject)

export default projectRoute