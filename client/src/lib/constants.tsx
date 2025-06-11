import Logo from "@/components/ui/logo"
import { ReactNode } from "react"

type navigation = {
  PRIMARY: {
    LINK: string,
    CONTENT: ReactNode,
    LABEL: string
  }[],

  SECONDARY: {
    CONTENT: ReactNode,
    LABEL: string
  }[]
}

export const NAVIGATION: navigation = {
  PRIMARY: [
    {
      LINK: "/",
      CONTENT: <Logo />,
      LABEL: "LOGO"
    },
    {
      LINK: "/home",
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

  ],
  SECONDARY: [
    {
      CONTENT: "Search",
      LABEL: "SEARCH"
    },
    {
      CONTENT: "Cart",
      LABEL: "CART"
    },
    {
      CONTENT: "Signout",
      LABEL: "SIGNOUT"
    }
  ]

}
