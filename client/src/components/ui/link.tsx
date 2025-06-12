import { cn } from "@/lib/utils"
import Link from "next/link"
import { ComponentPropsWithoutRef } from "react"
export const NavLink = ({ href, children, className, ...props }: ComponentPropsWithoutRef<"a">) => {
  return (
    <Link href={href!} {...props} className={cn("font-bold w-full", className)}>{children}</Link>
  )
}
