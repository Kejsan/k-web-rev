"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface Post {
  id: number
  title: string
  content?: string
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  async function fetchPosts() {
    const res = await fetch("/api/posts")
    const data = await res.json()
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    })
    setTitle("")
    setContent("")
    fetchPosts()
  }

  async function handleDelete(id: number) {
    await fetch(`/api/posts/${id}`, { method: "DELETE" })
    fetchPosts()
  }

  async function handleUpdate(post: Post) {
    const newTitle = prompt("Title", post.title)
    if (newTitle === null) return
    const newContent = prompt("Content", post.content || "")
    await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTitle, content: newContent }),
    })
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

