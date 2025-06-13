import { Oauth } from "@/components/auth/oauth";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "@/components/ui/link";
import Logo from "@/components/ui/logo";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full lg:h-[87vh] flex justify-center items-center">
      <Card className="w-full border-0 flex flex-col gap-8 items-center bg-transparent shadow-none max-w-[480px]">
        <CardHeader className="w-full flex flex-col items-center md:w-4/5 justify-center gap-4">
          <CardTitle>
            <Logo className="w-40" />
          </CardTitle>
          <CardAction className="bg-primary w-full flex justify-center gap-2 p-2 rounded-[33px] md:p-3">
            <NavLink href={"/login"} variant={"pill"}>Login</NavLink>
            <NavLink href={"/register"} variant={"pill"}>Register</NavLink>
          </CardAction>
          <CardDescription>
            Discover your true self now
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          {children}
        </CardContent>
        <CardFooter className="w-full">
          <Oauth />
        </CardFooter>
      </Card>
    </div>
  );
}
