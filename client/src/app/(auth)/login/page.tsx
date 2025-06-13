"use client"
import { InputField } from "@/components/auth/inputField";
import { Button } from "@/components/ui/button";
import { Fieldset } from "@/components/ui/fieldset";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Legend } from "@/components/ui/legend";
import { LoginSchema } from "@/models/auth/loginSchema";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"




const LoginPage = () => {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  })

  return (
    <Form {...form}>
      <form method="POST" className="flex flex-col items-center gap-8">
        <Fieldset className="flex flex-col gap-8 w-full">
          <Legend>Login credentials</Legend>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <InputField placeholder="Enter your User name" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  User public username
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <InputField type="password" placeholder="Enter your password" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  User Password
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </Fieldset>

        <Button type="submit" className="w-4/5 p-6 rounded-[33px]">Submit</Button>
      </form>
    </Form>
  )
}

export default LoginPage;
