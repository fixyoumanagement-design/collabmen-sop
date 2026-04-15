import { Link, useParams } from 'react-router-dom'
import { sopMap } from '../data/sops'

export default function SopDetailPage() {
  const { slug } = useParams()
  const sop = sopMap.get(slug)

  if (!sop) {
    return (
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">SOP not found</h2>
        <p className="text-slate-700">The SOP slug <span className="font-mono">{slug}</span> does not exist.</p>
        <Link to="/sops" className="text-sm font-medium">
          Back to SOP List
        </Link>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-slate-900">SOP Detail Page</h2>
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">/sop/{sop.slug}</p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-900">{sop.title}</h3>
        <p className="mt-2 text-slate-700">{sop.summary}</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
          {sop.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}
