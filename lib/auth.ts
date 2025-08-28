import { getServerSession, type NextAuthOptions } from "next-auth"
import GitHub from "next-auth/providers/github"

function adminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim())
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
      return adminEmails().includes(user.email ?? "")
    },
  },
}

export async function getAdminSession() {
  const session = await getServerSession(authOptions)
  if (!session || !adminEmails().includes(session.user?.email ?? "")) {
    return null
  }
  return session
}
