import { ComponentPropsWithoutRef } from "react"
import { Input } from "../ui/input"
import { cn } from "@/lib/utils"

export const InputField = ({ className, ...props }: ComponentPropsWithoutRef<"input">) => {
  return (
    <Input className={cn("rounded-[33px] p-4", className)} />
  )
}
