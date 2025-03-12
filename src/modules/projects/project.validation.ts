import {z} from 'zod'
const projectValidationSchema = z.object({
  body:z.object({
    projectName:z.string(),
    projectLiveUrl:z.string(),
    projectImage:z.string(),
    title:z.string(),
    description:z.string(),
    githubClient:z.string(),
    githubServer:z.string()
  })
})

const projectUpdateValidationSchema = z.object({
  body:z.object({
    projectName:z.string().optional(),
    projectLiveUrl:z.string().optional(),
    projectImage:z.string().optional(),
    title:z.string().optional(),
    description:z.string().optional(),
    githubClient:z.string().optional(),
    githubServer:z.string().optional()
  })
})


export const projectsValidation = {
projectValidationSchema,
projectUpdateValidationSchema
}