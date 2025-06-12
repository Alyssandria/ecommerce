import Logo from "@/components/ui/logo"
import { ReactNode } from "react"

type navigation = {
  LINK: string,
  CONTENT: ReactNode,
  LABEL: "LOGO" | "HOME" | "SHOP" | "CONTACT" | "LOGIN"
}[]

export const NAVIGATION: navigation = [
  {
    LINK: "/",
    CONTENT: <Logo />,
    LABEL: "LOGO"
  },
  {
    LINK: "/",
    CONTENT: "Home",
    LABEL: "HOME"
  },
  {
    LINK: "/shop",
    CONTENT: "Shop",
    LABEL: "SHOP"
  },
  {
    LINK: "/contact",
    CONTENT: "Contact",
    LABEL: "CONTACT"
  },
  {
    LINK: "/login",
    CONTENT: "Login/Register",
    LABEL: "LOGIN"
  }
]
