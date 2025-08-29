"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface Experience {
  id: number
  company: string
  role: string
  startDate: string
  endDate?: string
  description?: string
}

export default function ExperiencesPage() {
  const router = useRouter()
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [description, setDescription] = useState("")

  const fetchExperiences = useCallback(async () => {
    const res = await fetch("/api/experiences")
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/experiences")
      return
    }
    const data = await res.json()
    setExperiences(data)
  }, [router])

  useEffect(() => {
    fetchExperiences()
  }, [fetchExperiences])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch("/api/experiences", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ company, role, startDate, endDate, description }),
    })
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/experiences")
      return
    }
    setCompany("")
    setRole("")
    setStartDate("")
    setEndDate("")
    setDescription("")
    fetchExperiences()
  }

  async function handleDelete(id: number) {
    const res = await fetch(`/api/experiences/${id}`, { method: "DELETE" })
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/experiences")
      return
    }
    fetchExperiences()
  }

  async function handleUpdate(exp: Experience) {
    const newCompany = prompt("Company", exp.company)
    if (newCompany === null) return
    const newRole = prompt("Role", exp.role) || ""
    const newStart = prompt("Start Date", exp.startDate) || ""
    const newEnd = prompt("End Date", exp.endDate || "") || undefined
    const newDesc = prompt("Description", exp.description || "") || undefined
    const res = await fetch(`/api/experiences/${exp.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: newCompany,
        role: newRole,
        startDate: newStart,
        endDate: newEnd,
        description: newDesc,
      }),
    })
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/experiences")
      return
    }
    fetchExperiences()
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Experiences</h1>
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
              onClick={() => handleUpdate(exp)}
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
    </div>
  )
}

