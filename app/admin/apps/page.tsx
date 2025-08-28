"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface WebApp {
  id: number
  name: string
  url?: string
  description?: string
}

export default function AppsPage() {
  const router = useRouter()
  const [apps, setApps] = useState<WebApp[]>([])
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [description, setDescription] = useState("")

  async function fetchApps() {
    const res = await fetch("/api/apps")
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/apps")
      return
    }
    const data = await res.json()
    setApps(data)
  }

  useEffect(() => {
    fetchApps()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch("/api/apps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, url, description }),
    })
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/apps")
      return
    }
    setName("")
    setUrl("")
    setDescription("")
    fetchApps()
  }

  async function handleDelete(id: number) {
    const res = await fetch(`/api/apps/${id}`, { method: "DELETE" })
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/apps")
      return
    }
    fetchApps()
  }

  async function handleUpdate(app: WebApp) {
    const newName = prompt("Name", app.name)
    if (newName === null) return
    const newUrl = prompt("URL", app.url || "") || undefined
    const newDesc = prompt("Description", app.description || "") || undefined
    const res = await fetch(`/api/apps/${app.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName, url: newUrl, description: newDesc }),
    })
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/apps")
      return
    }
    fetchApps()
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Apps</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 w-full"
        />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL"
          className="border p-2 w-full"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full"
        />
        <Button type="submit">Add App</Button>
      </form>
      <ul className="space-y-2">
        {apps.map((app) => (
          <li key={app.id} className="flex items-center gap-2">
            <span className="flex-1">{app.name}</span>
            <Button
              type="button"
              variant="outline"
              onClick={() => handleUpdate(app)}
            >
              Edit
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => handleDelete(app.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

