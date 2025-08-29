"use client"

import { useCallback, useEffect, useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { EditDialog } from "@/components/admin/edit-dialog"

interface Post {
  id: number
  title: string
  content?: string
}

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().optional(),
})

type PostForm = z.infer<typeof postSchema>

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const handleUnauthorized = useCallback((res: Response) => {
    if (res.status === 401) {
      window.location.href = "/api/auth/signin"
      return true
    }
    return false
  }, [])

  const fetchPosts = useCallback(async () => {
    const res = await fetch("/api/posts")
    if (handleUnauthorized(res)) return
    const data = await res.json()
    setPosts(data)
  }, [handleUnauthorized])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    })
    if (handleUnauthorized(res)) return
    setTitle("")
    setContent("")
    setMessage("Post created")
    fetchPosts()
  }

  async function handleDelete(id: number) {
    const res = await fetch(`/api/posts/${id}`, { method: "DELETE" })
    if (handleUnauthorized(res)) return
    setMessage("Post deleted")
    fetchPosts()
  }

  async function handleUpdate(values: PostForm) {
    if (!editingPost) return
    const res = await fetch(`/api/posts/${editingPost.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    if (handleUnauthorized(res)) return
    if (!res.ok) throw new Error("Failed to update")
    setMessage("Post updated")
    fetchPosts()
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Posts</h1>
      {message && <p className="text-sm text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 w-full"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="border p-2 w-full"
        />
        <Button type="submit">Add Post</Button>
      </form>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center gap-2">
            <span className="flex-1">{post.title}</span>
            <Button
              type="button"
              variant="outline"
              onClick={() => setEditingPost(post)}
            >
              Edit
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      {editingPost && (
        <EditDialog
          title="Edit Post"
          open={!!editingPost}
          onOpenChange={(open) => {
            if (!open) setEditingPost(null)
          }}
          schema={postSchema}
          defaultValues={{
            title: editingPost.title,
            content: editingPost.content || "",
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
              <textarea
                className="border p-2 w-full"
                placeholder="Content"
                {...form.register("content")}
              />
              {form.formState.errors.content && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.content.message as string}
                </p>
              )}
            </>
          )}
        </EditDialog>
      )}
    </div>
  )
}

