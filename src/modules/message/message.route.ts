import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { messageValidation } from "./message.validation";
import { messageController } from "./message.controller";



const messageRoute = Router();
messageRoute.post('/',validateRequest(messageValidation.messageValidationSchema),messageController.createMessage)
messageRoute.get('/',messageController.getAllMessage)


export default messageRoute