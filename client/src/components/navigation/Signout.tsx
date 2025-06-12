import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

const Signout = ({ className, ...props }: ComponentPropsWithoutRef<"button">) => {
  return (
    <Button className={cn("", className)} variant={"destructive"}>Sign out</Button>
  )
}

export default Signout
