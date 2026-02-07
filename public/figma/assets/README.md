# Aşhan - Figma Asset Export (v2)

**Export Tarihi:** 7 Şubat 2026
**Kaynak:** Figma Desktop - Aşhan Projesi
**Güncelleme:** Tüm sayfalar kontrol edildi, eksik assetler eklendi.

---

## Hızlı Başlangıç

### Assetleri İndirmek İçin

1. **Figma masaüstü uygulamasını** açın ve Aşhan projesini yükleyin
2. **Dev Mode MCP Server**'ın aktif olduğundan emin olun
   (Figma → Preferences → Enable Dev Mode MCP Server)
3. Terminal'de bu klasöre gidip şu komutu çalıştırın:

```bash
./download-assets.sh
```

---

## Klasör Yapısı

```
ashan-assets/
├── icons/
│   ├── navigation/          # Menü, kapatma, ok, checkbox, scroll, dropdown ikonları
│   └── social/              # Facebook, Instagram, LinkedIn, X, YouTube
├── logos/
│   ├── brand/               # Aşhan logosu (yıldız + harfler, navbar & footer)
│   └── partners/            # TRZ Gıda, Çiftçi Ziraat, AHA, Hancıoğlu Çamburnü
├── images/
│   ├── hero/                # Ana sayfa hero bölümü yemek görselleri (4 adet)
│   ├── menu/                # Menü arka plan görseli ve dekoratif yıldız
│   ├── about/               # Ana sayfa hakkımızda bölümü yemek fotoğrafları (3 adet)
│   ├── activities/          # Ana sayfa faaliyet alanları ikincil görselleri (2 adet)
│   ├── sustainability/      # Sürdürülebilirlik bölümü ana fotoğraf
│   ├── blog/                # Blog kartı görselleri (3 adet)
│   ├── faaliyet/            # Faaliyet Alanları sayfası tüm görselleri (12 adet)
│   └── hakkimizda/          # Hakkımızda sayfası fotoğrafları ve galeri (7 adet)
├── decorative/              # Organik yaprak, yıldız, arc dekoratif elementler
├── components/              # Bileşen referansları
├── screenshots/             # Figma referans ekran görüntüleri
├── asset-manifest.json      # Tüm assetlerin detaylı haritası
├── design-tokens.css        # CSS değişkenleri (renkler, fontlar, spacing)
├── download-assets.sh       # Otomatik indirme scripti
└── README.md                # Bu dosya
```

---

## Sayfalar

| Sayfa | Figma Node ID | Açıklama |
|-------|---------------|----------|
| Ana Sayfa v2 | `1:5` | Hero, hakkımızda, şirketler, faaliyet, sürdürülebilirlik, blog |
| Menü | `357:1236` | Açılır navigasyon menüsü (arka plan görsel + dekoratif yıldızlar) |
| Faaliyet Alanları | `128:5983` | Hero (5 görsel), catering, restoran, turizm, kartlar |
| Faaliyet Alanları - Detay | `128:6544` | Faaliyet detay sayfası |
| Hakkımızda | `153:6065` | Misyon, vizyon, galeri (7 fotoğraf), temel ilkeler |
| İletişim | `357:2215` | İletişim formu (input, dropdown, checkbox bileşenleri) |

---

## Asset Sayıları

| Kategori | SVG | PNG | Toplam |
|----------|-----|-----|--------|
| İkonlar (navigasyon + sosyal) | 13 | - | 13 |
| Logolar (marka + partner) | ~60 | - | ~60 |
| Görseller (tüm sayfalar) | - | ~35 | ~35 |
| Dekoratif elementler | 8 | - | 8 |
| **Toplam** | **~81** | **~35** | **~116** |

---

## Design Tokens

### Renkler

| Token | Hex | Kullanım |
|-------|-----|----------|
| `--primary-50` | `#f8f5ee` | İletişim sayfa arka planı |
| `--primary-100` | `#ede7d4` | Faaliyet bölümü açık arka plan |
| `--primary-200` | `#ddcfab` | Buton arka plan, açık altın |
| `--primary-400-main` | `#bd9b60` | Ana vurgu rengi, kenarlıklar |
| `--primary-500` | `#aa8248` | Link rengi, KVKK metni |
| `--primary-950` | `#311e17` | Koyu metin |
| `--secondary-100` | `#ececd5` | Hero metin rengi |
| `--secondary-900-main` | `#4b3d2a` | Koyu kahverengi |
| `--secondary-950` | `#302418` | Koyu arka plan (hero, footer) |
| `--neutral-50` | `#f6f5f5` | Çok açık gri (galeri metin) |
| `--neutral-300` | `#b2aeae` | Açık gri |
| `--neutral-500` | `#706a6b` | Orta gri |
| `--neutral-600` | `#5f5b5b` | İkincil metin |
| `--neutral-800` | `#464445` | Koyu gri metin |
| `--neutral-950-main` | `#1a1919` | Ana metin rengi |

### Fontlar

| Font | Ağırlıklar | Kullanım |
|------|------------|----------|
| **Boska** | Medium (500), Light Italic (300i) | Başlıklar (72px, 56px, 40px, 24px, 188px hero) |
| **Overused Grotesk** | Book (350), Regular (400), Medium (500) | Gövde metni, etiketler, butonlar |

### Font Boyutları

| Token | Boyut | Kullanım |
|-------|-------|----------|
| `--text-xxs` | 11px | Copyright, alt bilgiler |
| `--text-xs` | 12px | Buton metni, etiketler |
| `--text-sm` | 14px | Temel ilkeler listesi |
| `--text-base` | 16px | Gövde metni |
| `--text-lg` | 18px | Büyük gövde metni |
| `--text-2xl` | 24px | Alt başlıklar (footer) |
| `--text-3xl` | 32px | Orta başlıklar |
| `--text-4xl` | 40px | Bölüm başlıkları |
| `--text-6xl` | 56px | Büyük başlıklar |
| `--text-8xl` | 72px | Sayfa başlıkları (İletişim vb.) |

---

## Temel Bileşenler

**Button** - 3 varyant:
- **Primary:** `bg: #ddcfab`, `text: #311e17`, `radius: 99px`
- **Secondary Dark:** `border: #bd9b60`, `text: #bd9b60`
- **Secondary Light:** `border: white`, `text: white`

**Input** - 3 varyant:
- **Standard:** Alt çizgi stili, `border-bottom: #ddcfab`
- **Phone:** Ülke kodu dropdown + telefon alanı
- **Select/Dropdown:** Alt çizgi + chevron ikon

**Checkbox:** `bg: #bd9b60`, `radius: 2px`, checkmark SVG

**Navbar:** Menu butonu (sol) | Logo (orta) | İletişime Geç butonu (sağ)

**Footer:** Koyu arka plan (`#302418`), bülten formu, sosyal medya, site haritası, yaprak şekli dekorasyon

---

## Logo Yapısı

Aşhan logosu SVG vektör parçalarından oluşmaktadır:

- **Yıldız/ikon:** `ashan-logo-star.svg` (üst sembol)
- **Harfler:** Her harf ayrı SVG (`a1`, `s`, `h`, `a2`, `n`)
- **Footer versiyonu:** Daha büyük boyutta aynı yapı

> **Not:** Tam logo için tüm parçaları birleştirmeniz gerekir. Alternatif olarak, Figma'dan doğrudan "Logo" frame'ini (node `1:188`) export edebilirsiniz.

---

## Partner Logoları

Her partner logosu birden fazla SVG vektör parçasından oluşur:

- **TRZ Gıda** - İkon + harf parçaları (9 SVG)
- **Çiftçi Ziraat** - İkon + harf parçaları (14 SVG)
- **AHA** - Çizgi elementleri + harf parçaları (12 SVG)
- **Hancıoğlu Çamburnü** - Yaprak ikonu + harf parçaları (20 SVG)

---

## Dekoratif Elementler

| Element | Dosyalar | Kullanım |
|---------|----------|----------|
| Organik yaprak şekli | `shape-mask.svg` + `shape-fill.svg` | Footer köşe, sayfa dekorasyonu |
| Yaprak şekli (alt) | `shape-mask-alt.svg` + `shape-fill-alt.svg` | Catering kartı varyantı |
| Arc/Yıldız | `arc-inner-shape.svg` + `arc-outer-ring.svg` | "ASHAN" yazılı dönen yıldız rozeti |
| Küçük yıldız | `star-small.svg` | Menü dekoratif yıldız |
| Büyük yıldız | `star-large-outline.svg` | Menü dekoratif yıldız (outline) |

---

## Sayfa Bazlı Görsel Haritası

### Ana Sayfa v2
- **Hero:** 4 yemek fotoğrafı (`images/hero/`)
- **Hakkımızda:** 3 yemek fotoğrafı (`images/about/`)
- **Faaliyet:** 2 ikincil görsel (`images/activities/`)
- **Sürdürülebilirlik:** 1 ana fotoğraf (`images/sustainability/`)
- **Blog:** 3 blog kartı görseli (`images/blog/`)

### Menü
- Arka plan bina görseli + yarım yıldız dekorasyonu (`images/menu/`)

### Faaliyet Alanları
- **Hero:** 5 görsel (arka plan + 4 küçük) (`images/faaliyet/faaliyet-hero-*`)
- **Toplu Yemek:** 3 görsel (`images/faaliyet/catering-*`)
- **Restoran:** 1 görsel (`images/faaliyet/restoran-main.png`)
- **Turizm:** 1 görsel (`images/faaliyet/turizm-otel-main.png`)
- **Kartlar:** 2 görsel (`images/faaliyet/activity-card-*`)

### Hakkımızda
- Ana fotoğraf, misyon görseli, temel ilkeler fotoğrafı (`images/hakkimizda/hakkimizda-*`)
- Galeri: 4 fotoğraf + merkez büyük görsel (`images/hakkimizda/gallery-*`)

### İletişim
- Sadece form bileşenleri (görsel yok, ikonlar `icons/navigation/` altında)
