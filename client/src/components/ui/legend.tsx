import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const Legend = ({ children, className, ...props }: ComponentPropsWithoutRef<"legend">) => {
  return (
    <legend className={cn("sr-only", className)} {...props}>{children}</legend>
  )
}
