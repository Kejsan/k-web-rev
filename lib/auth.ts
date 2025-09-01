import { getServerSession, type NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"

function adminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user?.email) {
        return false
      }
      return adminEmails().includes(user.email.toLowerCase())
    },
  },
}

export async function getAdminSession() {
  const session = await getServerSession(authOptions)
  if (
    !session?.user?.email ||
    !adminEmails().includes(session.user.email.toLowerCase())
  ) {
    return null
  }
  return session
}
