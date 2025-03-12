import {z} from 'zod'
const blogsValidationSchema = z.object({
  body:z.object({
    blogName:z.string(),
    blogUrl:z.string(),
    blogImage:z.string(),
    description:z.string()
  })
})

const blogsUpdateValidationSchema = z.object({
  body:z.object({
    blogName:z.string().optional(),
    blogUrl:z.string().optional(),
    blogImage:z.string().optional(),
    description:z.string().optional()
  })
})


export const blogsValidation = {
  blogsValidationSchema,
  blogsUpdateValidationSchema
}