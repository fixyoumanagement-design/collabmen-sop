import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">Landing Page</h2>
      <p className="max-w-2xl text-slate-700">
        Welcome to the SOP portal. Browse SOP documents by slug-based routes and keep process documentation simple,
        clear, and easy to maintain.
      </p>
      <Link
        to="/sops"
        className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        View SOP List
      </Link>
    </section>
  )
}
