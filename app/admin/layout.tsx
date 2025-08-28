import { ReactNode } from "react"
import { redirect } from "next/navigation"
import { SessionProvider } from "next-auth/react"

import AdminNav from "./nav"
import { getAdminSession } from "@/lib/auth"

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getAdminSession()
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin")
  }

  return (
    <SessionProvider session={session}>
      <div className="flex">
        <AdminNav />
        <div className="flex-1">{children}</div>
      </div>
    </SessionProvider>
  )
}

