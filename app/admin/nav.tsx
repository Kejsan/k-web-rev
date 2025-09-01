"use client"

import Link from "next/link"

export default function AdminNav() {
  return (
    <nav className="w-48 p-4 border-r space-y-2">
      <ul className="space-y-2">
        <li>
          <Link className="hover:underline" href="/admin/posts">
            Posts
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/admin/experiences">
            Experiences
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/admin/apps">
            Apps
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/admin/tools">
            Tools
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/admin/worksamples">
            Work Samples
          </Link>
        </li>
        <li>
          <Link className="hover:underline" href="/admin/footer">
            Footer Management
          </Link>
        </li>
      </ul>
    </nav>
  )
}
