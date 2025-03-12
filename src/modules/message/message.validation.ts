import {z} from 'zod'
const messageValidationSchema = z.object({
  body:z.object({
    message:z.string(),
  })
})




export const messageValidation = {
messageValidationSchema
}