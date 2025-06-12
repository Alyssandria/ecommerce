import { config } from "@/config/env"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { DB } from "@/server/db"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(DB),
  providers: [Google({
    clientId: config.AUTH_GOOGLE_ID,
    clientSecret: config.AUTH_GOOGLE_SECRET
  })],
})
