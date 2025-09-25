import { z } from "zod"

export const loginFormSchema = z.object({
    email: z.string({
      message: "Masukkan email yang valid." 
    }).min(1, {
      message: "Email tidak boleh kosong."
    }),
    password: z.string().min(1, {
      message: "Password tidak boleh kosong"
    })
  })