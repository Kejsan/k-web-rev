import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <ul className="space-y-2">
        <li>
          <Link className="text-blue-600 hover:underline" href="/admin/posts">
            Manage Posts
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/admin/experiences">
            Manage Experiences
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/admin/apps">
            Manage Apps
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/admin/worksamples">
            Manage Work Samples
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 hover:underline" href="/admin/footer">
            Footer Management
          </Link>
        </li>
      </ul>
    </div>
  )
}

