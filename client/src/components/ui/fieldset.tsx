import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const Fieldset = ({ children, className, ...props }: ComponentPropsWithoutRef<"fieldset">) => {
  return (
    <fieldset className={cn("border-none", className)}  {...props}>{children}</fieldset>
  )
}
