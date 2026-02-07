# Aşhan - Figma Asset Export

**Export Tarihi:** 7 Şubat 2026
**Kaynak:** Figma Desktop - Aşhan Projesi

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
│   ├── navigation/          # Menü, ok, checkbox, scroll ikonları
│   └── social/              # Facebook, Instagram, LinkedIn, X, YouTube
├── logos/
│   ├── brand/               # Aşhan logosu (yıldız + harfler, navbar & footer)
│   └── partners/            # TRZ Gıda, Çiftçi Ziraat, AHA, Hancıoğlu Çamburnü
├── images/
│   ├── hero/                # Ana sayfa hero bölümü yemek görselleri
│   └── blog/                # Blog kartı görseli
├── decorative/              # Organik yaprak şekli, arc/yıldız dekoratif element
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
| Ana Sayfa v2 | `1:5` | Hero, hakkımızda, şirketler, blog |
| Menü | `357:1236` | Açılır navigasyon menüsü |
| Faaliyet Alanları | `128:5983` | Faaliyet alanları listesi |
| Faaliyet Alanları - Detay | `128:6544` | Faaliyet detay sayfası |
| Hakkımızda | `153:6065` | Şirket hakkında bilgi |
| İletişim | `357:2215` | İletişim formu |

---

## Design Tokens

### Renkler

| Token | Hex | Kullanım |
|-------|-----|----------|
| `--primary-200` | `#ddcfab` | Buton arka plan, açık altın |
| `--primary-400-main` | `#bd9b60` | Ana vurgu rengi, kenarlıklar |
| `--primary-500` | `#aa8248` | Link rengi |
| `--primary-950` | `#311e17` | Koyu metin |
| `--secondary-100` | `#ececd5` | Hero metin rengi |
| `--secondary-950` | `#302418` | Koyu arka plan (hero, footer) |
| `--neutral-600` | `#5f5b5b` | İkincil metin |
| `--neutral-950-main` | `#1a1919` | Ana metin rengi |

### Fontlar

| Font | Ağırlıklar | Kullanım |
|------|------------|----------|
| **Boska** | Medium (500), Light Italic (300i) | Başlıklar |
| **Overused Grotesk** | Book (350), Regular (400), Medium (500) | Gövde metni, etiketler |

### Temel Bileşenler

**Button** - 3 varyant:
- **Primary:** `bg: #ddcfab`, `text: #311e17`, `radius: 99px`
- **Secondary Dark:** `border: #bd9b60`, `text: #bd9b60`
- **Secondary Light:** `border: white`, `text: white`

**Input:** Alt çizgi stili, `border-bottom: #ddcfab`

**Navbar:** Menu butonu (sol) | Logo (orta) | İletişime Geç butonu (sağ)

**Footer:** Koyu arka plan (`#302418`), bülten formu, sosyal medya, site haritası

---

## Logo Yapısı

Aşhan logosu SVG vektör parçalarından oluşmaktadır:

- **Yıldız/ikon:** `ashan-logo-star.svg` (üst sembol)
- **Harfler:** Her harf ayrı SVG (`a1`, `s`, `h`, `a2`, `n`)
- **Footer versiyonu:** Daha büyük boyutta aynı yapı

> **Not:** Tam logo için tüm parçaları birleştirmeniz gerekir. Alternatif olarak, Figma'dan doğrudan "Logo" frame'ini (node `1:188`) export edebilirsiniz.

---

## Partner Logoları

Her partner logosu da birden fazla SVG vektör parçasından oluşur:

- **TRZ Gıda** - İkon + harf parçaları
- **Çiftçi Ziraat** - İkon + harf parçaları
- **AHA** - Çizgi elementleri + harf parçaları
- **Hancıoğlu Çamburnü** - Yaprak ikonu + harf parçaları

---

## Dekoratif Elementler

| Element | Dosya | Kullanım |
|---------|-------|----------|
| Organik yaprak şekli | `shape-mask.svg` + `shape-fill.svg` | Footer köşe, sayfa dekorasyonu |
| Arc/Yıldız | `arc-inner-shape.svg` + `arc-outer-ring.svg` | "ASHAN" yazılı dönen yıldız rozeti |
