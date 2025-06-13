"use client"
import { ComponentPropsWithoutRef, useState } from "react"
import { Input } from "../ui/input"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export const InputField = ({ type, className, ...props }: ComponentPropsWithoutRef<"input">) => {
  const [isVisible, setisVisible] = useState<boolean>(false);
  const defaultClassname = "block placeholder:text-sm rounded-[33px] border border-primary text-sm p-6 placeholder:text-gray-400 focus-visible:border-ring focus-visible:ring-0"

  return (
    type === "password" ?
      <div className="relative w-full">
        <Input className={cn(defaultClassname, className, "pr-16")} type={isVisible ? "text" : type} {...props} />
        <Button
          type="button"
          className="absolute right-5 top-1/2 bg-transparent text-primary p-0 translate-[-45%] has-[>svg]:px-0 hover:bg-transparent hover:text-primary/70"
          onClick={() => setisVisible(prev => !prev)}
        >
          <EyeOffIcon className={`size-6 ${isVisible ? "block" : "hidden"}`} />
          <EyeIcon className={`size-6 ${isVisible ? "hidden" : "block"}`} />
        </Button>
      </div>
      :
      <Input className={cn(defaultClassname, className)} {...props} type={type} />
  )
}
