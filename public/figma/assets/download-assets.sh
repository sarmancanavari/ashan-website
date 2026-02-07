#!/bin/bash
# Aşhan Figma Asset Downloader
# Bu scripti Figma Dev Mode MCP Server açıkken terminalde çalıştırın.
# Figma masaüstü uygulamanız açık ve Aşhan projesi yüklü olmalıdır.

BASE_URL="http://localhost:3845/assets"
OUTPUT_DIR="$(dirname "$0")"

echo "🎨 Aşhan Asset Downloader"
echo "========================="
echo "Figma Dev Mode MCP Server'ın aktif olduğundan emin olun."
echo ""

# Test connection
echo "📡 Figma sunucusuna bağlanılıyor..."
if ! curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/22c4b95e8c686e964526072ac36011340e01b14b.svg" | grep -q "200"; then
  echo "❌ Figma Dev Mode sunucusuna bağlanılamadı!"
  echo "   Lütfen Figma masaüstü uygulamasının açık olduğundan"
  echo "   ve Dev Mode MCP Server'ın aktif olduğundan emin olun."
  exit 1
fi
echo "✅ Bağlantı başarılı!"
echo ""

# Create directories
mkdir -p "$OUTPUT_DIR/icons/navigation"
mkdir -p "$OUTPUT_DIR/icons/social"
mkdir -p "$OUTPUT_DIR/logos/brand"
mkdir -p "$OUTPUT_DIR/logos/partners"
mkdir -p "$OUTPUT_DIR/images/hero"
mkdir -p "$OUTPUT_DIR/images/blog"
mkdir -p "$OUTPUT_DIR/decorative"

download() {
  local hash=$1
  local dest=$2
  local name=$3
  printf "  ⬇️  %-40s" "$name"
  if curl -s -o "$OUTPUT_DIR/$dest" "$BASE_URL/$hash"; then
    echo "✅"
  else
    echo "❌"
  fi
}

# === ICONS - Navigation ===
echo "📁 İkonlar - Navigasyon"
download "22c4b95e8c686e964526072ac36011340e01b14b.svg" "icons/navigation/menu-hamburger.svg" "menu-hamburger.svg"
download "9c518194266105c9f17536c028ae2555eb988974.svg" "icons/navigation/scroll-up.svg" "scroll-up.svg"
download "35dc2506f1fdb5d3bcc63618b6a02d2ef1f8b52d.svg" "icons/navigation/checkbox-check.svg" "checkbox-check.svg"
download "c0889c35588d6c2bae542b8d0d4e5993e6d68a8e.svg" "icons/navigation/separator-line.svg" "separator-line.svg"
echo ""

# === ICONS - Social Media ===
echo "📁 İkonlar - Sosyal Medya"
download "bccb57113729c4e0b66f7e3215925a6a6ef6459c.svg" "icons/social/facebook.svg" "facebook.svg"
download "2fbac709c3100d7ddcbfd6b461fbd85d0b3e683c.svg" "icons/social/instagram.svg" "instagram.svg"
download "7b970530a7b7047e1245a1104a92d7b72fd09a28.svg" "icons/social/linkedin.svg" "linkedin.svg"
download "1af657b497e56d25c30eb9281ab4efebd1555c2b.svg" "icons/social/x-twitter.svg" "x-twitter.svg"
download "8d7099c60dc28dcbe72dfbe42f0a69ba8abf631c.svg" "icons/social/youtube.svg" "youtube.svg"
echo ""

# === LOGOS - Brand (Aşhan) ===
echo "📁 Logolar - Marka (Aşhan)"
download "42f64fbfa26365e5556d3166b724c4c29f0741db.svg" "logos/brand/ashan-logo-star.svg" "ashan-logo-star.svg"
download "80e299aaf3348e29dce9d92393e5a1955679b266.svg" "logos/brand/ashan-letter-a1.svg" "ashan-letter-a1.svg"
download "64bb11c481267ee196896cf3bf7449070f917ba1.svg" "logos/brand/ashan-letter-s.svg" "ashan-letter-s.svg"
download "545f7054b292e81fdfaa21451288aaaefdefa528.svg" "logos/brand/ashan-letter-h.svg" "ashan-letter-h.svg"
download "21c3677672390809bd6f298f4eb4090866a71ece.svg" "logos/brand/ashan-letter-a2.svg" "ashan-letter-a2.svg"
download "652a5b9fa6a27aa02773a256e5eaa470ba98dabb.svg" "logos/brand/ashan-letter-n.svg" "ashan-letter-n.svg"
download "db6aeabe0541d9a6b35a5735df759da0d9a88b44.svg" "logos/brand/ashan-logo-star-footer.svg" "ashan-logo-star-footer.svg"
download "d48937255889e2c1d63b13c06b48fd3987c7aa81.svg" "logos/brand/ashan-footer-letter-a1.svg" "ashan-footer-letter-a1.svg"
download "af45e3ba4f4fd2adbc06aad8e561e8b9ff96707e.svg" "logos/brand/ashan-footer-letter-s.svg" "ashan-footer-letter-s.svg"
download "1c6799864bbc654a39a63b20bc04665106faea40.svg" "logos/brand/ashan-footer-letter-h.svg" "ashan-footer-letter-h.svg"
download "75db7354e0377f2e113ec09009e68357241da35b.svg" "logos/brand/ashan-footer-letter-a2.svg" "ashan-footer-letter-a2.svg"
download "391700071a00421ec4bd7df097895688eaf21ace.svg" "logos/brand/ashan-footer-letter-n.svg" "ashan-footer-letter-n.svg"
download "38845209c8521fa7fbb8cf1a300339e0294689b5.svg" "logos/brand/clockwork-credit.svg" "clockwork-credit.svg"
echo ""

# === LOGOS - Partners ===
echo "📁 Logolar - Partnerler"
echo "  TRZ Gıda:"
download "7cef05c417cbe70b262f8a25de37899755a5083c.svg" "logos/partners/trz-gida-icon.svg" "trz-gida-icon.svg"
download "6377f1c0c4d90c509660e6b625c9a735ad15cc17.svg" "logos/partners/trz-gida-icon-top.svg" "trz-gida-icon-top.svg"
download "d9d60b80db1370b4f287506ae8f7e895ad39631e.svg" "logos/partners/trz-gida-t.svg" "trz-gida-t.svg"
download "4a98ce7964d7e3d0fac0c7ca68bba98c35b629e1.svg" "logos/partners/trz-gida-r.svg" "trz-gida-r.svg"
download "b8d8fc6ebfb69327b3adde96e36445bba3e84245.svg" "logos/partners/trz-gida-z.svg" "trz-gida-z.svg"
download "c62b238b5debaff418dc818d9d618700334d94c3.svg" "logos/partners/trz-gida-g.svg" "trz-gida-g.svg"
download "0e740ed3b392640013933e8624633eb1c183a974.svg" "logos/partners/trz-gida-i.svg" "trz-gida-i.svg"
download "28935e6e2b6d0ee1938cb4c46e68eb3f2e788ff8.svg" "logos/partners/trz-gida-d.svg" "trz-gida-d.svg"
download "a15ccc01d48deef7ff021f325f354e573ffae9ad.svg" "logos/partners/trz-gida-a.svg" "trz-gida-a.svg"

echo "  Çiftçi Ziraat:"
download "1c8912a1c528c1ae2280d01d4cf9d4579e20d0ac.svg" "logos/partners/ciftci-ziraat-icon.svg" "ciftci-ziraat-icon.svg"
download "175c0d083731be44edeb6fdcc489ba932f7f6772.svg" "logos/partners/ciftci-ziraat-icon-top.svg" "ciftci-ziraat-icon-top.svg"
download "476b29387307adc6496e4b92ede26f85274268fe.svg" "logos/partners/ciftci-ziraat-c1.svg" "ciftci-ziraat-c1.svg"
download "8bcc940b1368d42273a5a83be56121cea0d3af67.svg" "logos/partners/ciftci-ziraat-i1.svg" "ciftci-ziraat-i1.svg"
download "28c84ddefb445e41617842e617322c6150763373.svg" "logos/partners/ciftci-ziraat-f.svg" "ciftci-ziraat-f.svg"
download "362ca7cff9ee292adc4e82fdf37e4641ecf287bb.svg" "logos/partners/ciftci-ziraat-t1.svg" "ciftci-ziraat-t1.svg"
download "2cf81c524849052565bba0d01005041d08bc9574.svg" "logos/partners/ciftci-ziraat-c2.svg" "ciftci-ziraat-c2.svg"
download "c57b6937d63c84b57d331ae1e35df64ea2957b86.svg" "logos/partners/ciftci-ziraat-i2.svg" "ciftci-ziraat-i2.svg"
download "bd72ffdf3a1997260fdb4987ad9958db1e2a90fb.svg" "logos/partners/ciftci-ziraat-z.svg" "ciftci-ziraat-z.svg"
download "8fe254b2181458d5f570df6e42ee38cd022d5d01.svg" "logos/partners/ciftci-ziraat-i3.svg" "ciftci-ziraat-i3.svg"
download "87127ab7feea30ab94825797799163897bcdd3d1.svg" "logos/partners/ciftci-ziraat-r.svg" "ciftci-ziraat-r.svg"
download "f7b29697bed0a2b31e8aa32ac08331e433ffa164.svg" "logos/partners/ciftci-ziraat-a1.svg" "ciftci-ziraat-a1.svg"
download "cd71dd89dee5a7a72f3593db5a044a3ef32a55ed.svg" "logos/partners/ciftci-ziraat-a2.svg" "ciftci-ziraat-a2.svg"
download "11e2d6c072f23467a33aa2d194227f555ccde4a7.svg" "logos/partners/ciftci-ziraat-t2.svg" "ciftci-ziraat-t2.svg"

echo "  AHA:"
download "9da24e4304eb378740f73a542e591700362afc64.svg" "logos/partners/aha-a1.svg" "aha-a1.svg"
download "73b1a73ac718200403dae73577558cf25a40f323.svg" "logos/partners/aha-a1-stroke.svg" "aha-a1-stroke.svg"
download "8143b521ab6d5bfd0a64049559a16cebbfca74be.svg" "logos/partners/aha-h-left.svg" "aha-h-left.svg"
download "ecb09740e4f2aed09d3cfb114353cae80a46e1b1.svg" "logos/partners/aha-h-left-stroke.svg" "aha-h-left-stroke.svg"
download "275d36bc21f57855c66031c687df49cabec3adb0.svg" "logos/partners/aha-h-right.svg" "aha-h-right.svg"
download "c932f9d268f2d00dbe81760cfbaa599c615c5ab9.svg" "logos/partners/aha-h-right-stroke.svg" "aha-h-right-stroke.svg"
download "1506948c1152e3f6cc50d71ce04300d423439e9d.svg" "logos/partners/aha-lines-left.svg" "aha-lines-left.svg"
download "a4cfde103c4e8b8ea53ed4c8b483b0ebc0c889e4.svg" "logos/partners/aha-lines-left-stroke.svg" "aha-lines-left-stroke.svg"
download "963d3829bd88fc03ccbf5d6000d42407d1e2b76b.svg" "logos/partners/aha-star.svg" "aha-star.svg"
download "8e3dd80062e5cfd7972a9688763c1a519bf86aeb.svg" "logos/partners/aha-star-stroke.svg" "aha-star-stroke.svg"
download "9de68d27b971abd5237a9d192360f1ca0863293f.svg" "logos/partners/aha-lines-top.svg" "aha-lines-top.svg"
download "5320f2b19f995ac02bbb174797e832168bc07674.svg" "logos/partners/aha-lines-top-stroke.svg" "aha-lines-top-stroke.svg"

echo "  Hancıoğlu Çamburnü:"
download "1ba9ab2ab221c3bc88d383029aad4232c07618ca.svg" "logos/partners/hancioglu-h.svg" "hancioglu-h.svg"
download "dc5bf2bd885b633764273dec6539e81cb92f6bd6.svg" "logos/partners/hancioglu-a1.svg" "hancioglu-a1.svg"
download "3a911376d41d0e5813f3268e95a644d86c0ad72c.svg" "logos/partners/hancioglu-n.svg" "hancioglu-n.svg"
download "e4fae7313b5d4afec6388aeef5dc395f3a6d705a.svg" "logos/partners/hancioglu-c1.svg" "hancioglu-c1.svg"
download "8c6e4d0333f6729b81c87533f71a9214341d4b8f.svg" "logos/partners/hancioglu-i1.svg" "hancioglu-i1.svg"
download "bb04d1ca089dff2cef9c22c53d69067374e38a11.svg" "logos/partners/hancioglu-o.svg" "hancioglu-o.svg"
download "06fc714f6595dcf8390d6e7e498db304c6c70693.svg" "logos/partners/hancioglu-g.svg" "hancioglu-g.svg"
download "3e8123d5c2058a8961e3ffa3d811c6d99dface53.svg" "logos/partners/hancioglu-l.svg" "hancioglu-l.svg"
download "48c5d2f08c321e1709aac08879e1b5ae935699aa.svg" "logos/partners/hancioglu-u1.svg" "hancioglu-u1.svg"
download "8428797b62b4f56b872153f854fe2cfcfced6957.svg" "logos/partners/hancioglu-c2.svg" "hancioglu-c2.svg"
download "9b6f79c64e012ffa0dfb50a64e1e3e7bf7e4d496.svg" "logos/partners/hancioglu-a2.svg" "hancioglu-a2.svg"
download "f6c79b95afe783ef65f0b8f179a6768d71ea62d7.svg" "logos/partners/hancioglu-m.svg" "hancioglu-m.svg"
download "31d0f768b1af46cbf799411f875ae7cf79918e4d.svg" "logos/partners/hancioglu-b.svg" "hancioglu-b.svg"
download "4b808b4165fb97f860e9b50af365485a4363449e.svg" "logos/partners/hancioglu-u2.svg" "hancioglu-u2.svg"
download "1c37d7a8691e01ec5e4fdabb3cfb10bb29522d90.svg" "logos/partners/hancioglu-r.svg" "hancioglu-r.svg"
download "159a66a9e2e6ef227eceb4b0b7f7308127117aad.svg" "logos/partners/hancioglu-n2.svg" "hancioglu-n2.svg"
download "b34dd25ca82b8f37adfc4770b287ac21382b6f11.svg" "logos/partners/hancioglu-u3.svg" "hancioglu-u3.svg"
download "c8faacfb62a7a4a48ee00414859d5a63cabd6990.svg" "logos/partners/hancioglu-icon.svg" "hancioglu-icon.svg"
download "bccfd163bbcd8d678d00f6d88c9fb8e6dd5569fa.svg" "logos/partners/hancioglu-leaf-left.svg" "hancioglu-leaf-left.svg"
download "45beaad57b246e4c75163226a209b9cef4ef1c00.svg" "logos/partners/hancioglu-baseline.svg" "hancioglu-baseline.svg"
echo ""

# === IMAGES - Hero ===
echo "📁 Görseller - Hero"
download "e30e705478e836a24c1fbd352e217d15585a3bd6.png" "images/hero/hero-food-1.png" "hero-food-1.png"
download "dff73e87af2c9a8e2482471a98011d264f05b91f.png" "images/hero/hero-food-2.png" "hero-food-2.png"
download "fe47613f78b1e246bf9154692289073884d25326.png" "images/hero/hero-food-3.png" "hero-food-3.png"
download "1eede1ad694dc9a8848ae135040e66098321549d.png" "images/hero/hero-food-4.png" "hero-food-4.png"
echo ""

# === IMAGES - Blog ===
echo "📁 Görseller - Blog"
download "9d920f30e9c906020988c4a040718d5ce4e394ff.png" "images/blog/blog-card-image.png" "blog-card-image.png"
echo ""

# === DECORATIVE ===
echo "📁 Dekoratif Elementler"
download "68905e01a0e835d4a0437aece6d6892b615c03fb.svg" "decorative/shape-mask.svg" "shape-mask.svg"
download "f6074c6dfebf028decf14d1c5fb6093067e61a0b.svg" "decorative/shape-fill.svg" "shape-fill.svg"
download "a60cc626c557fe0a3f9f46b303bc677b02367db2.svg" "decorative/arc-inner-shape.svg" "arc-inner-shape.svg"
download "0b6c71c1ecd001632dd1ee661a13ef195549b52c.svg" "decorative/arc-outer-ring.svg" "arc-outer-ring.svg"
echo ""

echo "========================="
echo "✅ İndirme tamamlandı!"
echo "📂 Dosyalar: $OUTPUT_DIR"
echo ""
echo "Klasör yapısı:"
find "$OUTPUT_DIR" -name "*.svg" -o -name "*.png" | sort | while read f; do
  echo "  $(echo $f | sed "s|$OUTPUT_DIR/||")"
done
