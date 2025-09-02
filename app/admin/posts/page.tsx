"use client"

import { useCallback, useEffect, useState } from "react"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { EditDialog } from "@/components/admin/edit-dialog"

interface Post {
  id: number
  slug: string
  title: string
  content?: string
  metaDescription?: string
  featuredBanner?: string
}

const postSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  title: z.string().min(1, "Title is required"),
  content: z.string().optional(),
  metaDescription: z.string().optional(),
  featuredBanner: z.string().optional(),
})

type PostForm = z.infer<typeof postSchema>

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [content, setContent] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [featuredBanner, setFeaturedBanner] = useState("")
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
      body: JSON.stringify({
        slug,
        title,
        content,
        metaDescription,
        featuredBanner,
      }),
    })
    if (handleUnauthorized(res)) return
    setSlug("")
    setTitle("")
    setContent("")
    setMetaDescription("")
    setFeaturedBanner("")
    setMessage("Post created")
    fetchPosts()
  }

  async function handleDelete(slug: string) {
    const res = await fetch(`/api/posts/${slug}`, { method: "DELETE" })
    if (handleUnauthorized(res)) return
    setMessage("Post deleted")
    fetchPosts()
  }

  async function handleUpdate(values: PostForm) {
    if (!editingPost) return
    const res = await fetch(`/api/posts/${editingPost.slug}`, {
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
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Slug"
          className="border p-2 w-full"
        />
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
        <input
          value={metaDescription}
          onChange={(e) => setMetaDescription(e.target.value)}
          placeholder="Meta Description"
          className="border p-2 w-full"
        />
        <input
          value={featuredBanner}
          onChange={(e) => setFeaturedBanner(e.target.value)}
          placeholder="Featured Banner URL"
          className="border p-2 w-full"
        />
        <Button type="submit">Add Post</Button>
      </form>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug} className="flex items-center gap-2">
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
              onClick={() => handleDelete(post.slug)}
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
            slug: editingPost.slug,
            title: editingPost.title,
            content: editingPost.content || "",
            metaDescription: editingPost.metaDescription || "",
            featuredBanner: editingPost.featuredBanner || "",
          }}
          onSubmit={handleUpdate}
        >
          {(form) => (
            <>
              <input
                className="border p-2 w-full"
                placeholder="Slug"
                {...form.register("slug")}
              />
              {form.formState.errors.slug && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.slug.message as string}
                </p>
              )}
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
              <input
                className="border p-2 w-full"
                placeholder="Meta Description"
                {...form.register("metaDescription")}
              />
              {form.formState.errors.metaDescription && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.metaDescription.message as string}
                </p>
              )}
              <input
                className="border p-2 w-full"
                placeholder="Featured Banner URL"
                {...form.register("featuredBanner")}
              />
              {form.formState.errors.featuredBanner && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.featuredBanner.message as string}
                </p>
              )}
            </>
          )}
        </EditDialog>
      )}
    </div>
  )
}

