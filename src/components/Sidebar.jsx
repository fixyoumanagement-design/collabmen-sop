import { NavLink } from 'react-router-dom'
import { sops } from '../data/sops'

const linkBase = 'block rounded-md px-3 py-2 text-sm transition-colors'

export default function Sidebar() {
  return (
    <aside className="w-full border-b border-slate-200 bg-white p-4 lg:w-72 lg:border-b-0 lg:border-r">
      <nav className="space-y-1">
        <NavLink
          to="/"
          className={({ isActive }) => `${linkBase} ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'}`}
          end
        >
          Landing
        </NavLink>
        <NavLink
          to="/sops"
          className={({ isActive }) => `${linkBase} ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'}`}
        >
          SOP List
        </NavLink>
        <div className="pt-3">
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Sample SOPs</p>
          <div className="space-y-1">
            {sops.map((sop) => (
              <NavLink
                key={sop.slug}
                to={`/sop/${sop.slug}`}
                className={({ isActive }) => `${linkBase} ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                {sop.title}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  )
}
