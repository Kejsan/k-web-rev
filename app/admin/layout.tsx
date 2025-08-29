import { ReactNode } from "react"
import { redirect } from "next/navigation"
import { getAdminSession } from "@/lib/auth"

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await getAdminSession()
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/admin")
  }
  return <>{children}</>
}
