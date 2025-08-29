"use client"

import { useEffect, useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { EditDialog } from "@/components/admin/edit-dialog"

interface Experience {
  id: number
  company: string
  role: string
  startDate: string
  endDate?: string
  description?: string
}

const expSchema = z.object({
  company: z.string().min(1, "Company is required"),
  role: z.string().min(1, "Role is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().optional(),
  description: z.string().optional(),
})

type ExpForm = z.infer<typeof expSchema>

export default function ExperiencesPage() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")
  const [editingExp, setEditingExp] = useState<Experience | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  function handleUnauthorized(res: Response) {
    if (res.status === 401) {
      window.location.href = "/api/auth/signin"
      return true
    }
    return false
  }

  async function fetchExperiences() {
    const res = await fetch("/api/experiences")
    if (handleUnauthorized(res)) return
    const data = await res.json()
    setExperiences(data)
  }

  useEffect(() => {
    fetchExperiences()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch("/api/experiences", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company, role, startDate, endDate, description }),
    })
    if (handleUnauthorized(res)) return
    setCompany("")
    setRole("")
    setStartDate("")
    setEndDate("")
    setDescription("")
    setMessage("Experience added")
    fetchExperiences()
  }

  async function handleDelete(id: number) {
    const res = await fetch(`/api/experiences/${id}`, { method: "DELETE" })
    if (handleUnauthorized(res)) return
    setMessage("Experience deleted")
    fetchExperiences()
  }

  async function handleUpdate(values: ExpForm) {
    if (!editingExp) return
    const res = await fetch(`/api/experiences/${editingExp.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    if (handleUnauthorized(res)) return
    if (!res.ok) throw new Error("Failed to update")
    setMessage("Experience updated")
    fetchExperiences()
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Experiences</h1>
      {message && <p className="text-sm text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          className="border p-2 w-full"
        />
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          className="border p-2 w-full"
        />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 w-full"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full"
        />
        <Button type="submit">Add Experience</Button>
      </form>
      <ul className="space-y-2">
        {experiences.map((exp) => (
          <li key={exp.id} className="flex items-center gap-2">
            <span className="flex-1">{exp.company}</span>
            <Button
              type="button"
              variant="outline"
              onClick={() => setEditingExp(exp)}
            >
              Edit
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => handleDelete(exp.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      {editingExp && (
        <EditDialog
          title="Edit Experience"
          open={!!editingExp}
          onOpenChange={(open) => {
            if (!open) setEditingExp(null)
          }}
          schema={expSchema}
          defaultValues={{
            company: editingExp.company,
            role: editingExp.role,
            startDate: editingExp.startDate,
            endDate: editingExp.endDate || "",
            description: editingExp.description || "",
          }}
          onSubmit={handleUpdate}
        >
          {(form) => (
            <>
              <input
                className="border p-2 w-full"
                placeholder="Company"
                {...form.register("company")}
              />
              {form.formState.errors.company && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.company.message as string}
                </p>
              )}
              <input
                className="border p-2 w-full"
                placeholder="Role"
                {...form.register("role")}
              />
              {form.formState.errors.role && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.role.message as string}
                </p>
              )}
              <input
                type="date"
                className="border p-2 w-full"
                {...form.register("startDate")}
              />
              {form.formState.errors.startDate && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.startDate.message as string}
                </p>
              )}
              <input
                type="date"
                className="border p-2 w-full"
                {...form.register("endDate")}
              />
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

