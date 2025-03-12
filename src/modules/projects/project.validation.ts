import {z} from 'zod'
const projectValidationSchema = z.object({
  body:z.object({
    projectName:z.string(),
    projectLiveUrl:z.string(),
    projectImage:z.string(),
    description:z.string()
  })
})

const projectUpdateValidationSchema = z.object({
  body:z.object({
    projectName:z.string().optional(),
    projectLiveUrl:z.string().optional(),
    projectImage:z.string().optional(),
    description:z.string().optional()
  })
})


export const projectsValidation = {
projectValidationSchema,
projectUpdateValidationSchema
}