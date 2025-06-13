"use client"
import { InputField } from "@/components/auth/inputField";
import { Button } from "@/components/ui/button";
import { Fieldset } from "@/components/ui/fieldset";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Legend } from "@/components/ui/legend";
import { useForm } from "react-hook-form";
const RegisterPage = () => {
  const form = useForm()
  return (
    <Form {...form}>
      <form className="flex flex-col items-center gap-8">
        <Fieldset className="flex flex-col gap-8">
          <Legend>User personal details</Legend>
          <div className="w-full flex gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <InputField placeholder="Enter your Email" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    User Email Address
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <InputField placeholder="Enter your username" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Username
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <InputField placeholder="Enter your password" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  User Password
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <InputField placeholder="Enter your Confirm Password" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  Confirm Password
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

        </Fieldset>

        <Button type="submit" className="rounded-[33px] p-6 w-4/5">Submit</Button>
      </form>
    </Form>
  )
}

export default RegisterPage
