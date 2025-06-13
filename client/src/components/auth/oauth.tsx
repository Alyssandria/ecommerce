import { signIn } from "@/lib/auth"
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Separator } from "../ui/separator"
import { FcGoogle } from "react-icons/fc"
import { Button } from "../ui/button"

export const Oauth = () => {
  const iconClassname = "size-4"
  const oauthButtons = "has-[>svg]:p-6 bg-transparent border border-1 hover:bg-primary/10 md:has-[>svg]:p-8"
  return (
    <div className="w-full space-y-8">
      <div className="flex items-center gap-2">
        <Separator className="flex-1" />
        <span className="block text-shadow-secondary-foreground text-nowrap flex-1">or continue with</span>
        <Separator className="flex-1" />
      </div>

      <div>
        <form
          action={async () => {
            "use server"
            await signIn("google")
          }}
          className="flex flex justify-between"
        >
          <Button type="submit" className={oauthButtons}>
            <FaApple className={`${iconClassname} text-secondary-foreground`} />
          </Button>
          <Button type="submit" className={oauthButtons}>
            <FaFacebook className={`${iconClassname} text-[#1778F2]`} />
          </Button>
          <Button type="submit" className={oauthButtons}>
            <FcGoogle className={iconClassname} />
          </Button>
        </form>
      </div>
    </div>
  )
}
