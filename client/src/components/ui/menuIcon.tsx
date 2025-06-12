import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

const MenuIcon = ({ className, ...props }: ComponentPropsWithoutRef<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 14"
    fill="none"
    className={cn("size-full", className)}
    {...props}
  >
    <path
      fill="#252B42"
      d="M.572 0h22.857v2.286H.572V0Zm5.714 5.714h17.143V8H6.286V5.714Zm7.143 5.715h10v2.285h-10V11.43Z"
    />
  </svg>
)
export default MenuIcon
