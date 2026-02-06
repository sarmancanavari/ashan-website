import Image from "next/image";
import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>;
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <Container>
        <div className="flex items-center justify-between py-6">
          <Link href="/" className="inline-flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/assets/logo.svg" alt="Aşhan" className="h-8 w-auto" />
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
            <button className="inline-flex rounded-full bg-[#bd9b60] px-4 py-2 text-xs font-semibold text-[#1c140f] hover:bg-[#caa86d]">
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/assets/logo.svg" alt="Aşhan" className="h-8 w-auto" />
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              Catering ve ikram hizmetlerinden entegre tesis yönetimine uzanan operasyon kabiliyetiyle, kaliteyi standart
              haline getiriyoruz.
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
            <Link href="/ref/home-v2" className="hover:text-white">
              Figma Referans
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
      <section className="relative overflow-hidden bg-[#2a1f16] text-white">
        <Header />

        <div className="absolute inset-0 opacity-60">
          <Image
            src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=2400&q=60"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-[#2a1f16]" />

        <Container>
          <div className="relative flex min-h-[78vh] flex-col items-center justify-center pb-16 pt-32 text-center">
            <div className="flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/figma/assets/steps/Step=1.svg" alt="" className="h-10 w-10 opacity-90" />
              <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
                KALİTE
                <br />
                HİZMET
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                Catering ve ikram hizmetleri, restoran & kafeterya işletmeciliği ve entegre tesis yönetimi alanlarında
                güvenilir çözüm ortağı.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/tr/faaliyet-alanlari"
                  className="inline-flex items-center justify-center rounded-full bg-[#bd9b60] px-6 py-3 text-sm font-semibold text-[#1c140f] hover:bg-[#caa86d]"
                >
                  Keşfet
                </Link>
                <Link
                  href="/tr/iletisim"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro row (light) */}
      <section className="bg-[#f4f0e8] py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                Aşhan, operasyonel mükemmelliğin mimarı
                <br />
                deneyimin en üst seviyesi.
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="overflow-hidden rounded-2xl bg-white/70 p-4">
                  <div className="text-xs font-semibold text-[#8b6b55]">Catering</div>
                  <div className="mt-2 text-sm font-semibold">İkram hizmetleri</div>
                </div>
                <div className="overflow-hidden rounded-2xl bg-white/70 p-4">
                  <div className="text-xs font-semibold text-[#8b6b55]">Restoran</div>
                  <div className="mt-2 text-sm font-semibold">Kafeterya</div>
                </div>
                <div className="overflow-hidden rounded-2xl bg-white/70 p-4">
                  <div className="text-xs font-semibold text-[#8b6b55]">Tesis</div>
                  <div className="mt-2 text-sm font-semibold">Yönetim sistemleri</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl border border-[#1c140f]/10 bg-white/60 p-6">
                <div className="text-xs font-semibold tracking-wider text-[#8b6b55]">Not</div>
                <p className="mt-3 text-sm leading-7 text-[#3b2a20]/80">
                  Bu sayfa şu an statik ilerliyor. Umbraco headless bağlandığında başlıklar, görseller ve kartlar içerikten
                  gelecek.
                </p>
                <div className="mt-4">
                  <Link href="/ref/home-v2" className="text-xs font-semibold text-[#8b6b55] hover:underline">
                    Figma referans görselini aç →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Dark cards section */}
      <section className="bg-[#2a1f16] py-16 text-white">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-semibold">Aşhan, catering ve otelcilikte sürdürülebilir kalite sunar.</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Faaliyet alanlarını ve şirketleri içerik modeli üzerinden yöneteceğiz.
              </p>
              <div className="mt-6">
                <Link href="/tr/faaliyet-alanlari" className="rounded-full bg-[#bd9b60] px-5 py-2.5 text-sm font-semibold text-[#1c140f]">
                  Faaliyet alanları
                </Link>
              </div>
            </div>
            <div className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
              {["Catering ve İkram", "Restoran ve Kafeterya", "Turizm ve Otel", "Entegre Tesis"].map((x) => (
                <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm font-semibold">{x}</div>
                  <div className="mt-2 text-xs text-white/60">Detay sayfası Umbraco’dan beslenecek.</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Logo strip placeholder */}
      <section className="bg-[#f4f0e8] py-14">
        <Container>
          <div className="text-center text-sm font-semibold text-[#3b2a20]/80">Ortak değerler etrafında şekillenen, farklı alanlarda güçlü markalar.</div>
          <div className="mt-8 grid grid-cols-2 gap-6 text-center text-xs text-[#3b2a20]/60 sm:grid-cols-4 md:grid-cols-6">
            {["TY YATIRIM", "ÇİFTÇİ ZİRAAT", "AHA", "HANCIOĞLU", "TRZ GIDA", "AŞHAN"].map((t) => (
              <div key={t} className="rounded-xl border border-[#1c140f]/10 bg-white/50 px-3 py-4">
                {t}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Image row */}
      <section className="bg-[#f4f0e8] py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="relative h-72 overflow-hidden rounded-3xl bg-zinc-200 md:col-span-7">
              <Image
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1600&q=60"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl bg-[#e9e3d8] p-6">
                <div className="text-xs font-semibold tracking-wider text-[#8b6b55]">Sürdürülebilirlik</div>
                <h3 className="mt-3 text-2xl font-semibold leading-tight">Sürdürülebilirliği hizmet kültürünün merkezine alıyoruz.</h3>
                <p className="mt-4 text-sm leading-7 text-[#3b2a20]/75">
                  Bu alan Umbraco’dan içerik ile yönetilecek. İleride EN dilini eklediğimizde aynı şema çalışacak.
                </p>
                <div className="mt-5">
                  <Link href="/tr/surdurulebilirlik" className="inline-flex rounded-full bg-[#bd9b60] px-5 py-2.5 text-sm font-semibold text-[#1c140f]">
                    Detay
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h3 className="text-2xl font-semibold">Hizmet kültürümüzden ilham veren paylaşımlar</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="overflow-hidden rounded-3xl bg-white/70">
                  <div className="relative h-44 bg-zinc-200">
                    <Image
                      src={`https://images.unsplash.com/photo-1555992336-03a23c2bc0b8?auto=format&fit=crop&w=1200&q=60&sig=${i}`}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-semibold text-[#8b6b55]">Blog</div>
                    <div className="mt-2 text-sm font-semibold">Örnek başlık {i}</div>
                    <div className="mt-2 text-xs text-[#3b2a20]/70">Kısa açıklama satırı.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
