'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { login } from "@/lib/actions/auth.action";
import { loginFormSchema } from "@/lib/validation";
import { Form } from "@/components/ui/form";
import CustomForm from "@/components/shared/CustomForm";
import { FieldType } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CustomButton from "@/components/shared/CustomButton";



export default function page() {
  const searchParams = useSearchParams()
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const error = searchParams.get('error')
    if(error) {
      setErrorMessage(decodeURIComponent(error))
    }
  }, [searchParams])


  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data: z.infer<typeof loginFormSchema>) {
    setIsLoading(true)
    try {
      const loginResult = await login(data)
      if(loginResult) {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
    
  }

  return (
    <section className="bg-zinc-900">
        <div className="flex justify-center items-center h-screen text-white flex-col gap-4">
          {errorMessage && (
            <div className="bg-red-500 w-96 text-white px-4 py-2 rounded-md text-center">{errorMessage}</div>
          )}
          <div className="bg-zinc-800 p-6 rounded-lg shadow-md w-96 flex flex-col gap-4">
            <div className="flex flex-col justify-center items-center gap-1 mb-9">
              <h1 className="text-2xl font-bold">Boss Page</h1>
              <span className="text-sm text-zinc-500">Authorized Access Only</span>
            </div>
            <Form {...form}>

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <CustomForm 
                  control={form.control}
                  type={FieldType.EMAIL}
                  name="email"
                  label="Email"
                  placeholder="Enter your email..."
                />
                <CustomForm 
                  control={form.control}
                  type={FieldType.PASSWORD}
                  name="password"
                  label="Password"
                  placeholder="Enter your password..."
                />
                
                {/* <Button type="submit" className="bg-primary w-full">Login to Boss</Button> */}
                <CustomButton isLoading={isLoading}>
                  Login to Boss
                </CustomButton>
              </form>
            </Form>
          </div>
        </div>
    </section>
  )
}
