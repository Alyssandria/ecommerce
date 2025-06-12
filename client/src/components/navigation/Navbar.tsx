import { NAVIGATION } from "@/lib/constants"
import { NavLink } from "@/components/ui/link"
import { cn } from "@/lib/utils";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import Menu from "./Menu";
import Signout from "./Signout";

const PrimaryNav = NAVIGATION.map(el => {
  let styles: string = "";

  if (el.LABEL === "LOGO") {
    styles = "mr-4 w-32 md:w-52 block";
  }

  if (el.LABEL === "LOGIN") {
    styles = "ml-auto mr-4"
  }
  return (
    <li key={el.LABEL} className={cn("hidden md:block", styles)}>
      <NavLink href={el.LINK}>{el.CONTENT}</NavLink>
    </li>
  )
})

const Navbar = () => {

  return (
    <header className="w-full flex items-center justify-between p-6 md:p-8">
      <nav className="w-full">
        <ul className="flex items-center gap-4 lg:gap-8">
          {PrimaryNav}
        </ul>
      </nav>

      <div className="flex items-center gap-4 lg:gap-8">
        <SearchBar />
        <Cart />
        <Menu className="block lg:hidden" />
        <Signout className="hidden" />
      </div>

    </header>
  )

}


export default Navbar
