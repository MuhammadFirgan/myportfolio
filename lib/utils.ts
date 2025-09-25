import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseStringify<T>(data: T): T | null {
  return JSON.parse(JSON.stringify(data)) as T; 
}
