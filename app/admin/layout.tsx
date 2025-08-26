"use client"

import { ReactNode, useEffect } from "react"
import { SessionProvider, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

function AuthGuard({ children }: { children: ReactNode }) {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin?callbackUrl=/admin")
    }
  }, [status, router])

  if (status === "loading") {
    return <p>Loading...</p>
  }

  return <>{children}</>
}

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthGuard>{children}</AuthGuard>
    </SessionProvider>
  )
}

