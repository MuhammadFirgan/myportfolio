import { Control } from "react-hook-form"

export enum FieldType {
    TEXT = 'text',
    SELECT = 'select',
    TEXTAREA = 'textarea',
    EMAIL = 'email',
    PASSWORD = 'password',
}

export interface CustomFormProps {
    control: Control<any>
    type: FieldType
    name: string
    label?: string
    placeholder?: string
    value?: string
    children?: React.ReactNode
    disabled?: boolean
}

export interface loginFormProps {
    email: string
    password: string
}