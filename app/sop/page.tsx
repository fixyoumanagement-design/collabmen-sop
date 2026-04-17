import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const sopItems = [
  {
    category: "Onboarding",
    rules: [
      "Talent wajib menandatangani kontrak kerja sama sebelum menerima campaign.",
      "Semua data profil wajib lengkap dan valid (KTP, rekening, media sosial).",
      "Talent harus mengikuti sesi briefing sebelum memulai campaign pertama.",
    ],
  },
  {
    category: "Eksekusi Campaign",
    rules: [
      "Konten wajib dibuat sesuai brief yang diberikan, tidak ada improvisasi tanpa approval.",
      "Deadline posting adalah mutlak. Keterlambatan akan dikenakan pinalti.",
      "Semua konten wajib direview oleh tim sebelum posting (H-24 jam).",
      "Revisi maksimal 2x per konten. Revisi lebih dari itu akan dicharge.",
    ],
  },
  {
    category: "Komunikasi",
    rules: [
      "Respons maksimal 2 jam pada jam kerja (09.00 - 18.00 WIB).",
      "Gunakan bahasa profesional dalam semua komunikasi dengan tim dan brand.",
      "Konfirmasi penerimaan brief dalam waktu 24 jam.",
    ],
  },
  {
    category: "Pembayaran",
    rules: [
      "Pembayaran dilakukan setelah campaign selesai dan konten diaudit.",
      "Proses pembayaran maksimal 14 hari kerja setelah audit selesai.",
      "Talent wajib menyerahkan invoice sesuai format yang ditentukan.",
    ],
  },
  {
    category: "Pelanggaran & Sanksi",
    rules: [
      "Pelanggaran ringan: Teguran tertulis.",
      "Pelanggaran sedang: Pemotongan fee atau hold campaign.",
      "Pelanggaran berat: Pemutusan kontrak dan blacklist.",
      "Keputusan manajemen bersifat final dan tidak dapat diganggu gugat.",
    ],
  },
]

export default function SOPPage() {
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
            <p className="label-text mb-4 text-muted-foreground">Aturan</p>
          </div>
          <div className="md:col-span-8">
            <h1 className="display-text text-5xl text-foreground md:text-7xl">
              Standard<br />Operating<br />Procedure.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Semua talent yang bergabung dengan CollabMen wajib mematuhi SOP ini.
              Tidak ada pengecualian.
            </p>
          </div>
        </div>

        {/* SOP Content */}
        <div className="space-y-0 border-t border-border">
          {sopItems.map((item, idx) => (
            <div
              key={item.category}
              className="border-b border-border py-10 md:py-14"
            >
              <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-1">
                  <p className="display-text text-3xl text-muted-foreground/40">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <h2 className="display-text text-2xl text-foreground">
                    {item.category}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <ul className="space-y-3">
                    {item.rules.map((rule, ruleIdx) => (
                      <li
                        key={ruleIdx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-foreground/40">→</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="display-text mb-6 text-4xl text-foreground md:text-6xl">
            Patuh atau Keluar.
          </p>
          <p className="mx-auto max-w-md text-muted-foreground">
            SOP ini berlaku sejak talent menandatangani kontrak.
            Pelanggaran akan ditindak sesuai ketentuan yang berlaku.
          </p>
        </div>
      </div>
    </div>
  )
}
