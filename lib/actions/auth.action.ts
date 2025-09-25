'use server'

import { createServer } from "../supabase/server"
import { loginFormProps } from "@/types";
import { parseStringify } from "../utils";
import { redirect } from "next/navigation";


export async function login(data: loginFormProps) {
    try {
        const supabase = await createServer()

       const { data: loginData, error } = await supabase
        .auth
        .signInWithPassword({
            email: data.email,
            password: data.password,
        })

        if(error) {
            redirect(`/login?error=${encodeURIComponent(error.message)}`);
        }

        return parseStringify(loginData)
      
    } catch (error) {
        console.error(error)
        redirect(`/login?error=${encodeURIComponent("Login Failed")}`);
    }
}