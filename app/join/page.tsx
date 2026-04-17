import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"

export default function JoinPage() {
  return (
    <div className="relative min-h-screen">
      <div className="container py-16 md:py-24">
        {/* Back link */}
        <Link
          href="/"
          className="label-text mb-12 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Kembali
        </Link>

        {/* Header */}
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label-text mb-4 text-muted-foreground">Pendaftaran</p>
          </div>
          <div className="md:col-span-8">
            <h1 className="display-text text-5xl text-foreground md:text-7xl">
              Gabung<br />Roster.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Mau jadi bagian dari CollabMen? Isi form di bawah dengan lengkap.
              Tim kami akan review dan menghubungi talent yang lolos seleksi.
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16 grid gap-8 border-t border-border pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label-text mb-4 text-muted-foreground">Syarat</p>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-4 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground">01.</span>
                <span>Pria, usia minimal 18 tahun</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground">02.</span>
                <span>Minimal 10.000 followers di Instagram atau TikTok</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground">03.</span>
                <span>Engagement rate di atas 2%</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground">04.</span>
                <span>Konten original, bukan repost atau spam</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-muted-foreground">05.</span>
                <span>Bersedia mengikuti SOP CollabMen</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="glass mx-auto max-w-2xl rounded-3xl p-8 text-center md:p-12">
          <h2 className="display-text mb-4 text-3xl text-foreground md:text-4xl">
            Ready?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Klik tombol di bawah untuk mengisi form pendaftaran talent CollabMen.
          </p>
          <a
            href="https://forms.gle/collabmen"
            target="_blank"
            rel="noreferrer"
            className="label-text group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-5 text-background transition-colors hover:bg-muted-foreground"
          >
            Isi Form Pendaftaran
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
          <p className="mt-6 text-sm text-muted-foreground">
            Atau hubungi via Instagram{" "}
            <a
              href="https://instagram.com/collabmen.id"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:underline"
            >
              @collabmen.id
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
