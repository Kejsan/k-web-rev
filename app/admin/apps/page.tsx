"use client"

import { useEffect, useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { EditDialog } from "@/components/admin/edit-dialog"

interface WebApp {
  id: number
  name: string
  url?: string
  description?: string
}

const appSchema = z.object({
  name: z.string().min(1, "Name is required"),
  url: z.string().url().optional().or(z.literal("")),
  description: z.string().optional(),
})

type AppForm = z.infer<typeof appSchema>

export default function AppsPage() {
  const [apps, setApps] = useState<WebApp[]>([])
  const [name, setName] = useState("")
  const [url, setUrl] = useState("")
  const [description, setDescription] = useState("")
  const [editingApp, setEditingApp] = useState<WebApp | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  function handleUnauthorized(res: Response) {
    if (res.status === 401) {
      window.location.href = "/api/auth/signin"
      return true
    }
    return false
  }

  async function fetchApps() {
    const res = await fetch("/api/apps")
    if (handleUnauthorized(res)) return
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
    if (handleUnauthorized(res)) return
    setName("")
    setUrl("")
    setDescription("")
    setMessage("App added")
    fetchApps()
  }

  async function handleDelete(id: number) {
    const res = await fetch(`/api/apps/${id}`, { method: "DELETE" })
    if (handleUnauthorized(res)) return
    setMessage("App deleted")
    fetchApps()
  }

  async function handleUpdate(values: AppForm) {
    if (!editingApp) return
    const res = await fetch(`/api/apps/${editingApp.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    if (handleUnauthorized(res)) return
    if (!res.ok) throw new Error("Failed to update")
    setMessage("App updated")
    fetchApps()
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Apps</h1>
      {message && <p className="text-sm text-green-600">{message}</p>}
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
              onClick={() => setEditingApp(app)}
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
      {editingApp && (
        <EditDialog
          title="Edit App"
          open={!!editingApp}
          onOpenChange={(open) => {
            if (!open) setEditingApp(null)
          }}
          schema={appSchema}
          defaultValues={{
            name: editingApp.name,
            url: editingApp.url || "",
            description: editingApp.description || "",
          }}
          onSubmit={handleUpdate}
        >
          {(form) => (
            <>
              <input
                className="border p-2 w-full"
                placeholder="Name"
                {...form.register("name")}
              />
              {form.formState.errors.name && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.name.message as string}
                </p>
              )}
              <input
                className="border p-2 w-full"
                placeholder="URL"
                {...form.register("url")}
              />
              {form.formState.errors.url && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.url.message as string}
                </p>
              )}
              <textarea
                className="border p-2 w-full"
                placeholder="Description"
                {...form.register("description")}
              />
            </>
          )}
        </EditDialog>
      )}
    </div>
  )
}

