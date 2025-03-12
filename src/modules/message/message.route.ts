import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { messageValidation } from "./message.validation";



const messageRoute = Router();
messageRoute.post('/',validateRequest(messageValidation.messageValidationSchema))
messageRoute.get('/',)


export default messageRoute