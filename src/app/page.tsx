import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-3xl font-bold">Aşhan — TR Ana Sayfa (placeholder)</h1>
      <p className="mt-3 text-zinc-600">
        Bu proje: <b>Next.js frontend</b> + <b>Umbraco headless</b>. Şimdilik statik placeholder.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Link className="rounded-xl border p-4 hover:bg-zinc-50" href="/tr/kurumsal/hakkimizda">
          /tr/kurumsal/hakkimizda
        </Link>
        <Link className="rounded-xl border p-4 hover:bg-zinc-50" href="/tr/faaliyet-alanlari">
          /tr/faaliyet-alanlari
        </Link>
      </div>

      <div className="mt-8 text-xs text-zinc-500">
        Redirect kuralı: <code>/tr</code> → <code>/</code> (301)
      </div>
    </main>
  );
}
