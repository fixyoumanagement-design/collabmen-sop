import { Link } from 'react-router-dom'
import { sops } from '../data/sops'

export default function SopListPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">SOP List Page</h2>
      <ul className="grid gap-4">
        {sops.map((sop) => (
          <li key={sop.slug} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{sop.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{sop.summary}</p>
            <Link to={`/sop/${sop.slug}`} className="mt-3 inline-block text-sm font-medium">
              Open /sop/{sop.slug}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
