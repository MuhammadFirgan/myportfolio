import { z } from "zod"

export const loginFormSchema = z.object({
    email: z.string({
      message: "Email is not valid" 
    }).min(1, {
      message: "Email required"
    }),
    password: z.string().min(1, {
      message: "Password required"
    })
  })