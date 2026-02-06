import Image from "next/image";
import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/80">
      {children}
    </span>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container>
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="text-sm font-semibold tracking-[0.22em] text-white">
            AŞHAN
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-medium text-white/85 md:flex">
            <Link href="/tr/kurumsal/hakkimizda" className="hover:text-white">
              Kurumsal
            </Link>
            <Link href="/tr/faaliyet-alanlari" className="hover:text-white">
              Faaliyet Alanları
            </Link>
            <Link href="/tr/sirketlerimiz" className="hover:text-white">
              Şirketlerimiz
            </Link>
            <Link href="/tr/iletisim" className="hover:text-white">
              İletişim
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90 hover:bg-white/10 md:inline-flex">
              TR
            </button>
            <button className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-900 hover:bg-zinc-100">
              Teklif Al
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1c140f] text-white/85">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-sm font-semibold tracking-[0.22em] text-white">AŞHAN</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              Catering ve ikram hizmetlerinden entegre tesis yönetimine uzanan operasyon kabiliyetiyle,
              kaliteyi standart haline getiriyoruz.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
            <div>
              <div className="text-xs font-semibold tracking-wider text-white/70">Kurumsal</div>
              <div className="mt-3 grid gap-2 text-sm">
                <Link className="hover:text-white" href="/tr/kurumsal/hakkimizda">
                  Hakkımızda
                </Link>
                <Link className="hover:text-white" href="/tr/kurumsal/tarihce">
                  Tarihçe
                </Link>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-wider text-white/70">Faaliyet</div>
              <div className="mt-3 grid gap-2 text-sm">
                <Link className="hover:text-white" href="/tr/faaliyet-alanlari">
                  Tümü
                </Link>
                <Link className="hover:text-white" href="/tr/faaliyet-alanlari/catering-ve-ikram-hizmetleri">
                  Catering
                </Link>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold tracking-wider text-white/70">İletişim</div>
              <div className="mt-3 grid gap-2 text-sm">
                <div className="text-white/70">info@ashanyemek.com</div>
                <div className="text-white/70">+90 (000) 000 00 00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Aşhan. Tüm hakları saklıdır.</div>
          <div className="flex gap-4">
            <Link href="/tr/kvkk" className="hover:text-white">
              KVKK
            </Link>
            <Link href="/tr/cerez" className="hover:text-white">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#f4f0e8] text-[#1c140f]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1c140f] text-white">
        <Header />

        <div className="absolute inset-0 opacity-50">
          <Image
            src="https://images.unsplash.com/photo-1555992336-03a23c2bc0b8?auto=format&fit=crop&w=2400&q=60"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#1c140f]" />

        <Container>
          <div className="relative flex min-h-[82vh] flex-col justify-end pb-16 pt-32">
            <div className="max-w-2xl">
              <Pill>Kurumsal Web · Ana Sayfa v2</Pill>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                Kalite
                <br />
                Hizmet
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Catering ve ikram hizmetleri, restoran & kafeterya işletmeciliği ve entegre tesis yönetimi alanlarında
                güvenilir çözüm ortağı.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/tr/faaliyet-alanlari"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
                >
                  Faaliyet Alanları
                </Link>
                <Link
                  href="/tr/iletisim"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  İletişim
                </Link>
              </div>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {["Deneyimli ekip", "Sürdürülebilir yaklaşım", "Operasyonel hız"].map((t) => (
                <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-semibold tracking-wide text-white/70">Öne çıkan</div>
                  <div className="mt-2 text-sm font-semibold">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <div className="text-xs font-semibold tracking-wider text-[#8b6b55]">AŞHAN</div>
              <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                Operasyon kabiliyetiyle
                <br />
                ölçülebilir kalite.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-sm leading-7 text-[#3b2a20]/80 sm:text-base">
                Bu sayfa Figma’daki <b>Ana Sayfa v2</b> tasarımına göre hazırlanacak statik ilk versiyon.
                Bir sonraki adımda Umbraco headless API ile içerik alanlarını dinamik hale getireceğiz.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/70 p-5">
                  <div className="text-xs font-semibold text-[#8b6b55]">Hizmet</div>
                  <div className="mt-2 text-sm font-semibold">Catering</div>
                </div>
                <div className="rounded-2xl bg-white/70 p-5">
                  <div className="text-xs font-semibold text-[#8b6b55]">İşletme</div>
                  <div className="mt-2 text-sm font-semibold">Restoran & Kafe</div>
                </div>
                <div className="rounded-2xl bg-white/70 p-5">
                  <div className="text-xs font-semibold text-[#8b6b55]">Sistem</div>
                  <div className="mt-2 text-sm font-semibold">Tesis Yönetimi</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Dark band */}
      <section className="bg-[#1c140f] py-16 text-white">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-6">
              <h3 className="text-2xl font-semibold sm:text-3xl">Faaliyet alanlarında bütüncül hizmet</h3>
              <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                Kurumsal web kurgusunda (TR) sayfalar /tr altında ilerler. Root / ise TR ana sayfa olarak hizmet verir.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/tr/kurumsal/hakkimizda" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900">
                  Kurumsal
                </Link>
                <Link href="/tr/sirketlerimiz" className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                  Şirketlerimiz
                </Link>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {["Catering ve İkram", "Restoran/Kafeterya", "Turizm ve Otel", "Entegre Tesis"].map((x) => (
                  <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm font-semibold">{x}</div>
                    <div className="mt-2 text-xs text-white/60">Detay sayfası Umbraco’dan beslenecek.</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Image grid */}
      <section className="py-16">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <h3 className="text-2xl font-semibold sm:text-3xl">Öne çıkan görseller</h3>
            <Link href="/tr/faaliyet-alanlari" className="text-sm font-semibold text-[#8b6b55] hover:underline">
              Tüm faaliyetler →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-12">
            <div className="relative h-72 overflow-hidden rounded-3xl bg-zinc-200 md:col-span-7">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=60"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 md:col-span-5">
              <div className="relative h-[140px] overflow-hidden rounded-3xl bg-zinc-200">
                <Image
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=60"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[140px] overflow-hidden rounded-3xl bg-zinc-200">
                <Image
                  src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1400&q=60"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
