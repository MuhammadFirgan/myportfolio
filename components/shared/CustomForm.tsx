import { CustomFormProps } from "@/types"
import { FormField, FormItem } from "../ui/form"
import RenderField from "./RenderField"

export default function CustomForm(props: CustomFormProps) {
    const { name, control, value } = props
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
        <FormItem>
            
            <RenderField field={field} props={props}/>
        </FormItem>
        )}
    />
  )
}