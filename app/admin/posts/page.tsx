"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface Post {
  id: number
  title: string
  content?: string
}

export default function PostsPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const fetchPosts = useCallback(async () => {
    const res = await fetch("/api/posts")
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/posts")
      return
    }
    const data = await res.json()
    setPosts(data)
  }, [router])

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
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/posts")
      return
    }
    setTitle("")
    setContent("")
    fetchPosts()
  }

  async function handleDelete(id: number) {
    const res = await fetch(`/api/posts/${id}`, { method: "DELETE" })
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/posts")
      return
    }
    fetchPosts()
  }

  async function handleUpdate(post: Post) {
    const newTitle = prompt("Title", post.title)
    if (newTitle === null) return
    const newContent = prompt("Content", post.content || "")
    const res = await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, content: newContent }),
    })
    if (res.status === 401) {
      router.push("/api/auth/signin?callbackUrl=/admin/posts")
      return
    }
    fetchPosts()
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Posts</h1>
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
              onClick={() => handleUpdate(post)}
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
    </div>
  )
}

