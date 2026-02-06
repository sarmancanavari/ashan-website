import Link from "next/link";

export default async function TrCatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = "/tr/" + slug.join("/");

  return (
    <main className="mx-auto max-w-3xl p-8">
      <div className="text-xs text-zinc-500">TR route placeholder</div>
      <h1 className="mt-2 text-2xl font-semibold">{path}</h1>
      <p className="mt-3 text-zinc-600">
        Bu sayfa Umbraco Delivery API bağlandıktan sonra içerikten render edilecek.
      </p>
      <div className="mt-6">
        <Link href="/" className="text-sm font-semibold underline">
          ← Ana sayfa
        </Link>
      </div>
    </main>
  );
}
