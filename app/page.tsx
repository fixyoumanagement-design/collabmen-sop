import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const benefits = [
  {
    no: "01",
    title: "Campaign Berbayar",
    desc: "Bayaran dari pengaruhmu lewat brand premium yang kurasi ketat.",
  },
  {
    no: "02",
    title: "Sistem Tegas",
    desc: "SOP transparan, alur terstruktur, manajemen tanpa kompromi.",
  },
  {
    no: "03",
    title: "Brand Premium",
    desc: "Kolaborasi dengan brand papan atas yang cari talent berperforma.",
  },
]

const steps = [
  { step: "01", title: "Daftar", desc: "Isi form pendaftaran dengan data profilmu." },
  { step: "02", title: "Diterima", desc: "Tim review dan onboarding talent yang lolos." },
  { step: "03", title: "Kerja", desc: "Eksekusi campaign sesuai SOW yang diberikan." },
  { step: "04", title: "Dibayar", desc: "Pembayaran setelah campaign selesai & diaudit." },
]

export default function IndexPage() {
  return (
    <div className="relative">
      {/* HERO — editorial split */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden border-b border-border">
        {/* Background placeholder block (dark with grain) */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,hsl(0_0%_20%/0.4),transparent_60%)]" />

        {/* Floating glass card — magazine cover style */}
        <div className="glass absolute right-12 top-1/2 hidden w-[340px] -translate-y-1/2 rounded-3xl p-8 shadow-2xl lg:block">
          <p className="label-text mb-6 text-muted-foreground">@collabmen.id</p>
          <p className="mb-8 text-sm leading-relaxed text-foreground/80">
            Setiap campaign dieksekusi untuk membangun pengaruh dengan kejelasan,
            konsistensi, dan tujuan.
          </p>
          <p className="display-text text-5xl leading-[0.9] text-foreground">
            Talent<br />Management
          </p>
          <div className="divider my-6" />
          <p className="label-text text-foreground">CollabMen</p>
        </div>

        <div className="container relative z-10 pb-16 pt-32 lg:pt-40">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-foreground" />
            <span className="label-text text-muted-foreground">EST. 2024 — Jakarta</span>
          </div>

          <h1 className="display-text text-[18vw] leading-[0.85] text-foreground md:text-[14vw] lg:text-[11vw]">
            Talent<br />Cowo.
          </h1>

          <div className="mt-10 max-w-md md:max-w-lg lg:max-w-xl">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              KOL Management khusus pria. Eksekusi cepat, sistem tegas, campaign
              yang scalable. Naikkan level karier influencermu.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/join"
              className="label-text group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-4 text-background transition-colors hover:bg-muted-foreground"
            >
              Gabung Roster
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
            <Link
              href="/sop"
              className="label-text inline-flex items-center gap-3 rounded-full border border-border px-6 py-4 text-foreground transition-colors hover:border-foreground"
            >
              Lihat SOP
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE strip */}
      <section className="overflow-hidden border-b border-border py-6">
        <div className="label-text flex items-center gap-12 whitespace-nowrap text-muted-foreground">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span>Influencer Management</span>
              <span className="text-foreground">✺</span>
              <span>High Performance Talent</span>
              <span className="text-foreground">✺</span>
              <span>Premium Brand Partner</span>
              <span className="text-foreground">✺</span>
            </span>
          ))}
        </div>
      </section>

      {/* BENEFITS — editorial grid */}
      <section className="container py-24 md:py-32">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label-text mb-4 text-muted-foreground">Manifesto</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-text text-5xl text-foreground md:text-7xl">
              Kenapa<br />CollabMen.
            </h2>
          </div>
        </div>

        <div className="grid border-t border-border md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.no}
              className="group border-b border-border py-10 md:border-b-0 md:border-r md:px-8 md:py-14 first:md:pl-0 last:md:border-r-0"
            >
              <p className="display-text text-7xl text-muted-foreground/40 transition-colors group-hover:text-foreground">
                {b.no}
              </p>
              <h3 className="display-text mt-6 text-2xl text-foreground">
                {b.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS — vertical magazine list */}
      <section className="container border-t border-border py-24 md:py-32">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label-text mb-4 text-muted-foreground">Workflow</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="display-text text-5xl text-foreground md:text-7xl">
              Cara<br />Kerjanya.
            </h2>
          </div>
        </div>

        <div className="space-y-0 border-t border-border">
          {steps.map((s) => (
            <div
              key={s.step}
              className="group grid grid-cols-12 items-baseline gap-4 border-b border-border px-2 py-8 transition-colors hover:bg-card/40 md:py-10"
            >
              <p className="display-text col-span-2 text-2xl text-muted-foreground md:col-span-1 md:text-3xl">
                {s.step}
              </p>
              <h3 className="display-text col-span-10 text-3xl text-foreground md:col-span-4 md:text-5xl">
                {s.title}
              </h3>
              <p className="col-span-12 text-sm leading-relaxed text-muted-foreground md:col-span-7 md:text-base">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — large statement */}
      <section className="container border-t border-border py-24 text-center md:py-40">
        <p className="label-text mb-8 text-muted-foreground">Filosofi Manajemen</p>
        <h2 className="display-text text-6xl text-foreground md:text-8xl lg:text-[10rem]">
          Patuh<br />atau<br />Keluar.
        </h2>
        <div className="mt-12">
          <Link
            href="/join"
            className="label-text group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-5 text-background transition-colors hover:bg-muted-foreground"
          >
            Daftar Sekarang
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </section>
    </div>
  )
}
