import Image from "next/image";
import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  // Pixel-perfect reference: Figma desktop frame = 1440px
  // Keep desktop paddings stable (section rhythm comes from consistent container padding)
  return <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-[80px]">{children}</div>;
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container>
        {/* 3-column layout prevents left menu from "spreading" and keeps center logo truly centered */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center pt-10">
          {/* Left: hamburger + MENU */}
          <div className="justify-self-start">
            <button className="inline-flex items-center gap-3 whitespace-nowrap text-label text-white/80 hover:text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/figma/assets/icons/navigation/menu-hamburger.svg" alt="" className="h-4 w-4 opacity-90" />
              <span>MENU</span>
            </button>
          </div>

          {/* Center: logo */}
          <div className="justify-self-center">
            <Link href="/" className="inline-flex flex-col items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/figma/assets/logos/brand/ashan-logo-star.svg" alt="Aşhan" className="h-6 w-auto" />
              <div className="flex items-center gap-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/figma/assets/logos/brand/ashan-letter-a1.svg" alt="A" className="h-4 w-auto opacity-90" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/figma/assets/logos/brand/ashan-letter-s.svg" alt="Ş" className="h-4 w-auto opacity-90" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/figma/assets/logos/brand/ashan-letter-h.svg" alt="H" className="h-4 w-auto opacity-90" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/figma/assets/logos/brand/ashan-letter-a2.svg" alt="A" className="h-4 w-auto opacity-90" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/figma/assets/logos/brand/ashan-letter-n.svg" alt="N" className="h-4 w-auto opacity-90" />
              </div>
            </Link>
          </div>

          {/* Right: CTA */}
          <div className="justify-self-end">
            <Link
              href="/tr/iletisim"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/25 bg-white/0 px-6 py-3 text-label text-white/80 hover:bg-white/10 hover:text-white"
            >
              İLETİŞİME GEÇ
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

function Footer() {
  const version = process.env.NEXT_PUBLIC_APP_VERSION ?? "0.1.0";
  const sha = process.env.VERCEL_GIT_COMMIT_SHA;
  const shaShort = sha ? sha.slice(0, 7) : "local";

  return (
    <footer className="bg-[#1c140f] text-white/85">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/assets/logos/brand/ashan-logo-star.svg" alt="Aşhan" className="h-8 w-auto" />
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

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <div className="text-white/45">
              Aşhan • v{version} • {shaShort}
            </div>
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

        <div className="absolute inset-0">
          <Image src="/figma/assets/images/menu/menu-bg-building.png" alt="" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#2a1f16]/80" />
        <div className="absolute inset-x-0 top-20 h-px bg-white/10" />

        <Container>
          <div className="relative flex min-h-[900px] flex-col items-center justify-center pb-28 pt-44 text-center">
            {/* side labels */}
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2">
              <Container>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-32 bg-white/15" />
                    <div className="text-caption uppercase tracking-[0.32em] text-white/35">SERVING CENTRAL ISTANBUL</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-caption uppercase tracking-[0.32em] text-white/35">ESTABLISHED 1996</div>
                    <div className="h-px w-32 bg-white/15" />
                  </div>
                </div>
              </Container>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-heading-xl tracking-tight text-white">
                <span className="block">KALİTE</span>
                <span className="-mt-8 block text-heading-xl-italic">HİZMET</span>
              </h1>

              <p className="mt-8 max-w-[620px] text-body-sm text-white/55">
                Aşhan; cateringden restoran işletmeciliğine, turizmden entegre tesis yönetimine uzanan çok disiplinli yapısıyla kaliteyi
                sürdürülebilir sistemlere dönüştürür.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro row (light) */}
      <section className="bg-[#f4f0e8] py-[120px]">
        <Container>
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h2 className="text-heading-3xl text-[#1c140f]">
                Aşhan, operasyonel mükemmelliğin mimarı
                <br />
                deneyimin en üst seviyesi.
              </h2>
              <p className="mt-5 max-w-[520px] text-body text-[#3b2a20]/70">
                28 yılı aşkın deneyimimizle operasyonel kabiliyetimizi paydaşlarımızın faydasına sunuyor, kaliteyi standart haline
                getiriyoruz.
              </p>

              {/* photo collage (Figma: layered cards) */}
              <div className="relative mt-12 h-[240px]">
                <div className="absolute left-0 top-8 h-[160px] w-[200px] -rotate-[7deg] overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                  <Image src="/figma/assets/images/hero/hero-food-1.png" alt="" fill className="object-cover" />
                </div>
                <div className="absolute left-[120px] top-0 h-[190px] w-[260px] rotate-[4deg] overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
                  <Image src="/figma/assets/images/about/about-food-1.png" alt="" fill className="object-cover" />
                </div>
                <div className="absolute left-[40px] top-[120px] h-[130px] w-[170px] rotate-[10deg] overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                  <Image src="/figma/assets/images/hero/hero-food-2.png" alt="" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-3xl bg-transparent pt-1">
                <div className="flex items-start gap-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/figma/assets/logos/brand/ashan-logo-star.svg"
                    alt=""
                    className="mt-1 h-8 w-8 opacity-80"
                  />
                  <div>
                    <div className="text-xs font-semibold tracking-wider text-[#8b6b55]">HAKKIMIZDA</div>
                    <p className="mt-4 text-sm leading-7 text-[#3b2a20]/80">
                      Figma Anasayfa (1440) referansı birebir uygulanıyor. Bu alandaki içerikler Umbraco headless bağlandığında
                      içerikten beslenecek.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/tr/kurumsal/hakkimizda"
                        className="inline-flex items-center justify-center rounded-full bg-[#bd9b60] px-6 py-3 text-xs font-semibold tracking-[0.28em] text-[#1c140f]"
                      >
                        DETAY
                      </Link>
                    </div>
                    <div className="mt-6">
                      <Link href="/ref/home-v2" className="text-xs font-semibold text-[#8b6b55] hover:underline">
                        Figma referans görselini aç →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Dark cards section */}
      <section className="bg-[#2a1f16] py-[120px] text-white">
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

      {/* Logo strip */}
      <section className="bg-[#f4f0e8] py-[96px]">
        <Container>
          <div className="text-center text-sm font-semibold text-[#3b2a20]/80">
            Ortak değerler etrafında şekillenen, farklı alanlarda güçlü markalar.
          </div>
          <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-4 md:grid-cols-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/assets/logos/partners/ciftci-ziraat-icon.svg" alt="Çiftçi Ziraat" className="h-10 w-auto opacity-80" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/assets/logos/partners/trz-gida-icon.svg" alt="TRZ Gıda" className="h-10 w-auto opacity-80" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/assets/logos/partners/aha-star.svg" alt="AHA" className="h-10 w-auto opacity-80" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/assets/logos/partners/hancioglu-icon.svg" alt="Hancıoğlu Çamburnü" className="h-10 w-auto opacity-80" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/assets/logos/brand/ashan-logo-star.svg" alt="Aşhan" className="h-10 w-auto opacity-80" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/figma/assets/logos/brand/clockwork-credit.svg" alt="Clockwork" className="h-6 w-auto opacity-70" />
          </div>
        </Container>
      </section>

      {/* Image row */}
      <section className="bg-[#f4f0e8] py-[120px]">
        <Container>
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="relative h-72 overflow-hidden rounded-3xl bg-zinc-200 md:col-span-7">
              <Image src="/figma/assets/images/hero/hero-food-2.png" alt="" fill className="object-cover" />
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
                    <Image src="/figma/assets/images/blog/blog-card-image.png" alt="" fill className="object-cover" />
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
