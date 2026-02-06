import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4f0e8]">
      <div className="mx-auto max-w-[420px] px-4 py-8">
        <div className="text-xs font-semibold text-zinc-500">Aşhan · Ana Sayfa v2 (Figma export referansı)</div>
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
        <div className="mt-4 text-xs text-zinc-500">
          Not: Bu görsel sadece referans. Bir sonraki adımda sayfayı component/component kodlayıp birebirleştireceğim.
        </div>
      </div>
    </main>
  );
}
