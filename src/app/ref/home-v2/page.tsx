import Image from "next/image";

export default function HomeV2Reference() {
  return (
    <main className="min-h-screen bg-zinc-100 p-6">
      <div className="mx-auto max-w-[420px]">
        <div className="text-xs font-semibold text-zinc-500">Figma export referansı (home v2)</div>
        <div className="mt-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <Image
            src="/figma/home-v2.jpg"
            alt="Ana Sayfa v2 export"
            width={316}
            height={1280}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </main>
  );
}
