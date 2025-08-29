"use client"

import { useEffect, useState } from "react"
import { useForm, UseFormReturn } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ZodSchema } from "zod"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface EditDialogProps<T> {
  title: string
  schema: ZodSchema<T>
  defaultValues: T
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (values: T) => Promise<void>
  children: (form: UseFormReturn<T>) => React.ReactNode
}

export function EditDialog<T>({
  title,
  schema,
  defaultValues,
  open,
  onOpenChange,
  onSubmit,
  children,
}: EditDialogProps<T>) {
  const form = useForm<T>({ resolver: zodResolver(schema), defaultValues })
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    form.reset(defaultValues)
    setError(null)
  }, [defaultValues, form, open])

  async function handleSubmit(values: T) {
    setError(null)
    try {
      await onSubmit(values)
      onOpenChange(false)
    } catch (e: any) {
      setError(e.message || "Update failed")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          {children(form)}
          {error && <p className="text-sm text-red-500">{error}</p>}
          <DialogFooter>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

