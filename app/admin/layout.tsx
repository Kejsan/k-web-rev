import { ReactNode } from "react"
import { redirect } from "next/navigation"
import { SessionProvider } from "next-auth/react"


export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getAdminSession()
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin")
  }

  return (
    </SessionProvider>
  )
}

