import MenuIcon from "@/components/ui/menuIcon"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { ComponentPropsWithRef } from "react"
import { cn } from "@/lib/utils"
import { NAVIGATION } from "@/lib/constants"
import { NavLink } from "../ui/link"
import Signout from "./Signout"

const Menu = ({ className, ...props }: ComponentPropsWithRef<"button">) => {
  return (
    <Sheet>
      <SheetTrigger className={cn("size-6", className)} {...props}>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="flex flex-col p-8">
        <SheetHeader className="sr-only">
          <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Mobile menu navigation
          </SheetDescription>
        </SheetHeader>

        <nav className="flex-1">
          <ul className="flex flex-col justify-center size-full gap-6">
            {
              NAVIGATION.map(el => {
                let styles: string = "";

                if (el.LABEL === "LOGO") {
                  styles = "hidden"
                }
                return (
                  <li key={el.LABEL} className={cn("text-2xl", styles)}>
                    <NavLink href={el.LINK}>{el.CONTENT}</NavLink>
                  </li>
                )
              })
            }
          </ul>
        </nav>

        <SheetFooter>
          <Signout className="text-lg" />
        </SheetFooter>
      </SheetContent>
    </Sheet>

  )
}


export default Menu
