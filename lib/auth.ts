import GitHub from "next-auth/providers/github"
import { getServerSession } from "next-auth"
import type { NextAuthOptions, Session } from "next-auth"

export const authOptions: NextAuthOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
}

/**
 * Helper that wraps {@link getServerSession} with the shared
 * {@link authOptions}. Using this function ensures all server-side
 * session checks stay consistent and automatically benefit from future
 * authentication configuration changes.
 */
export async function auth(): Promise<Session | null> {
  return getServerSession(authOptions)
}
