import { CustomFormProps, FieldType } from "@/types";
import { FormControl, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function RenderField({ field, props }: { field: any, props: CustomFormProps }) {

  switch (props.type) {
    case FieldType.TEXT:
      return (
        <>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input placeholder={props.placeholder} {...field} className="shad-input bg-zinc-900 border-none w-full" />
          </FormControl>
          <FormMessage className="text-sm text-red-500" />
        </>
      );

    case FieldType.EMAIL:
      return (
        <>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input placeholder={props.placeholder} {...field} className="shad-input bg-zinc-900 border-none" type="email" />
          </FormControl>
          <FormMessage className="text-sm text-red-500" />
        </>
      );

    case FieldType.PASSWORD:
      return (
        <>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input placeholder={props.placeholder} {...field} className="shad-input bg-zinc-900 border-none" type="password" />
          </FormControl>
          <FormMessage className="text-sm text-red-500" />
        </>
      );

    case FieldType.TEXTAREA:
      return (
        <>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Textarea placeholder={props.placeholder} {...field} className="shad-input bg-zinc-900 border-none w-full" disabled={props.disabled || false} />
          </FormControl>
          <FormMessage className="text-sm text-red-500" />
        </>
      );

    default:
      break;
  }
}