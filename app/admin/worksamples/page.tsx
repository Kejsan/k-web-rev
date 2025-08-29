"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface WorkSample {
  id: number
  title: string
  url?: string
  description?: string
}

export default function WorkSamplesPage() {
  const router = useRouter()
  const [samples, setSamples] = useState<WorkSample[]>([])
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [description, setDescription] = useState("")

  const fetchSamples = useCallback(async () => {
    const res = await fetch("/api/worksamples")
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/worksamples")
      return
    }
    const data = await res.json()
    setSamples(data)
  }, [router])

  useEffect(() => {
    fetchSamples()
  }, [fetchSamples])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch("/api/worksamples", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, url, description }),
    })
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/worksamples")
      return
    }
    setTitle("")
    setUrl("")
    setDescription("")
    fetchSamples()
  }

  async function handleDelete(id: number) {
    const res = await fetch(`/api/worksamples/${id}`, { method: "DELETE" })
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/worksamples")
      return
    }
    fetchSamples()
  }

  async function handleUpdate(sample: WorkSample) {
    const newTitle = prompt("Title", sample.title)
    if (newTitle === null) return
    const newUrl = prompt("URL", sample.url || "") || undefined
    const newDesc = prompt("Description", sample.description || "") || undefined
    const res = await fetch(`/api/worksamples/${sample.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, url: newUrl, description: newDesc }),
    })
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/worksamples")
      return
    }
    fetchSamples()
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Work Samples</h1>
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
              onClick={() => handleUpdate(sample)}
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
    </div>
  )
}

