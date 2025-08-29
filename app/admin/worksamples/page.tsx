"use client"

import { useEffect, useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { EditDialog } from "@/components/admin/edit-dialog"

interface WorkSample {
  id: number
  title: string
  url?: string
  description?: string
}

const sampleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  url: z.string().url().optional().or(z.literal("")),
  description: z.string().optional(),
})

type SampleForm = z.infer<typeof sampleSchema>

export default function WorkSamplesPage() {
  const [samples, setSamples] = useState<WorkSample[]>([])
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [description, setDescription] = useState("")
  const [editingSample, setEditingSample] = useState<WorkSample | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  function handleUnauthorized(res: Response) {
    if (res.status === 401) {
      window.location.href = "/api/auth/signin"
      return true
    }
    return false
  }

  async function fetchSamples() {
    const res = await fetch("/api/worksamples")
    if (handleUnauthorized(res)) return
    const data = await res.json()
    setSamples(data)
  }

  useEffect(() => {
    fetchSamples()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch("/api/worksamples", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, url, description }),
    })
    if (handleUnauthorized(res)) return
    setTitle("")
    setUrl("")
    setDescription("")
    setMessage("Sample added")
    fetchSamples()
  }

  async function handleDelete(id: number) {
    const res = await fetch(`/api/worksamples/${id}`, { method: "DELETE" })
    if (handleUnauthorized(res)) return
    setMessage("Sample deleted")
    fetchSamples()
  }

  async function handleUpdate(values: SampleForm) {
    if (!editingSample) return
    const res = await fetch(`/api/worksamples/${editingSample.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    if (handleUnauthorized(res)) return
    if (!res.ok) throw new Error("Failed to update")
    setMessage("Sample updated")
    fetchSamples()
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Work Samples</h1>
      {message && <p className="text-sm text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
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
        <Button type="submit">Add Sample</Button>
      </form>
      <ul className="space-y-2">
        {samples.map((sample) => (
          <li key={sample.id} className="flex items-center gap-2">
            <span className="flex-1">{sample.title}</span>
            <Button
              type="button"
              variant="outline"
              onClick={() => setEditingSample(sample)}
            >
              Edit
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => handleDelete(sample.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      {editingSample && (
        <EditDialog
          title="Edit Sample"
          open={!!editingSample}
          onOpenChange={(open) => {
            if (!open) setEditingSample(null)
          }}
          schema={sampleSchema}
          defaultValues={{
            title: editingSample.title,
            url: editingSample.url || "",
            description: editingSample.description || "",
          }}
          onSubmit={handleUpdate}
        >
          {(form) => (
            <>
              <input
                className="border p-2 w-full"
                placeholder="Title"
                {...form.register("title")}
              />
              {form.formState.errors.title && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.title.message as string}
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

