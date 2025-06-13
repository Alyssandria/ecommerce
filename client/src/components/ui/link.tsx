"use client"

import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentPropsWithoutRef } from "react"

const buttonVariants = cva(
  "font-bold w-full",
  {
    variants: {
      variant: {
        default:
          "bg-transparent rounded-none",
        pill:
          "p-2 font-bold text-primary-foreground text-center rounded-[22px]"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const NavLink = ({ href, children, variant, className, ...props }: ComponentPropsWithoutRef<typeof Link> & VariantProps<typeof buttonVariants>) => {
  const pathname = usePathname();
  return (
    <Link className={cn(buttonVariants({ variant, className }), variant === "pill" && pathname === href && "bg-primary-foreground text-secondary-foreground")} href={href} {...props}>{children}</Link>
  )
}
