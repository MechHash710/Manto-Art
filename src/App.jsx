import { useState, useEffect } from "react";

// ── Brand Constants ─────────────────────────────────────────
const C = {
  primary: "#C2703E",
  secondary: "#E8D5B7",
  accent: "#8A9A5B",
  dark: "#3D2B1F",
  light: "#F5F0E8",
  warm: "#D4A59A",
  cream: "#FAF7F2",
  white: "#FFFFFF",
};

const WHATSAPP = "5571981848206";

// ── Translations ─────────────────────────────────────────────
const translations = {
  pt: {
    waMessage: (p) => `Oi! Tenho interesse na peca "${p}" da Manto Art ♡`,
    nav: {
      home: "Inicio", pieces: "Pecas", about: "Sobre", contact: "Contato", cta: "Fale conosco",
    },
    hero: {
      tag: "croche artesanal em Itacaré",
      title1: "Feito a mao,",
      title2: "feito com alma.",
      desc: "Cada peca da Manto Art e tecida a mao com carinho e dedicacao. Sao horas de trabalho artesanal transformadas em roupas unicas que contam historias.",
      btnPieces: "Ver Pecas",
      btnWa: "Falar no WhatsApp",
    },
    values: ["100% Artesanal", "Fios Selecionados", "Peca Unica", "Itacaré, BA"],
    products: {
      tag: "colecao",
      title: "Nossas Pecas",
      desc: "Cada peca e unica — feita com fios selecionados e muito amor. Clique para conversar no WhatsApp e garantir a sua.",
      filters: { all: "Todas", tops: "Tops", conjuntos: "Conjuntos" },
      btn: "Quero essa peca",
      photoSoon: "foto em breve",
    },
    about: {
      tag: "nossa historia",
      title: "Sobre a Manto Art",
      p1: "A Manto Art nasceu do amor pelo croche e pela vontade de criar pecas que carregam alma. Cada ponto e dado com intencao, cada fio e escolhido com carinho.",
      p2: "Em Itacaré, entre o mar e a natureza, encontramos a inspiracao perfeita para criar roupas que sao mais que pecas — sao historias tecidas a mao.",
      badges: ["Autenticidade", "Acolhimento", "Sustentabilidade", "Slow Fashion"],
      photoPlaceholder: "sua foto aqui",
    },
    testimonials: {
      tag: "quem ja vestiu",
      title: "O que dizem",
      items: [
        { text: "A peca mais linda que ja tive! Cada detalhe e perfeito, da pra sentir o carinho em cada ponto.", name: "Marina S.", loc: "Itacaré" },
        { text: "Comprei o Top Areia e nao tiro mais. Todo mundo pergunta onde comprei. Super exclusivo!", name: "Juliana R.", loc: "Sao Paulo" },
        { text: "Presente pra minha mae, ela amou! A embalagem chegou linda, parecia um presente de boutique.", name: "Camila F.", loc: "Curitiba" },
      ],
    },
    contact: {
      tag: "vamos conversar?",
      title: "Fale com a gente",
      desc: "Quer saber mais sobre uma peca? Tem uma encomenda especial? Chama a gente no WhatsApp — a conversa e sempre pessoal e sem compromisso.",
      btn: "Chamar no WhatsApp",
      labelInstagram: "Instagram",
      labelLocal: "Local",
      labelHours: "Horario",
      hoursValue: "Seg-Sex, 9h-18h",
    },
    footer: { tagline: "Feito a mao, feito com alma." },
    productDescs: {
      1: "Top halter em croche azul e cru com listras horizontais e conchas naturais na barra. Perfeito para praia e ensaios de verao.",
      2: "Busto estruturado em vermelho com faixa em granny squares coloridos — verde, amarelo e vermelho. Feito inteiramente a mao.",
      3: "Caimento ajustado em verde esmeralda com detalhe floral em squares na barra. Protagonista de qualquer look.",
      4: "Top em tom terroso com trama densa e bolsa transversal preta feita a mao. Visual coeso e pronto para usar.",
      5: "Tom areia com trama central estruturada e conchas naturais na barra. Leve, elegante e versatil.",
      6: "Top frente unica em vermelho intenso com bolsa preta artesanal. Look de impacto para campanha e redes sociais.",
      7: "Mesmo modelo disponivel em multiplas cores sob encomenda. Mesmo ponto, mesmo acabamento — a sua cor.",
    },
  },

  en: {
    waMessage: (p) => `Hi! I'm interested in the piece "${p}" from Manto Art ♡`,
    nav: {
      home: "Home", pieces: "Pieces", about: "About", contact: "Contact", cta: "Get in touch",
    },
    hero: {
      tag: "handmade crochet in Itacaré",
      title1: "Made by hand,",
      title2: "made with soul.",
      desc: "Each Manto Art piece is hand-woven with care and dedication. Hours of artisan work transformed into unique garments that tell a story.",
      btnPieces: "See Pieces",
      btnWa: "Message on WhatsApp",
    },
    values: ["100% Handmade", "Selected Yarns", "One of a Kind", "Itacaré, BA"],
    products: {
      tag: "collection",
      title: "Our Pieces",
      desc: "Each piece is unique — made with selected yarns and a lot of love. Click to chat on WhatsApp and make it yours.",
      filters: { all: "All", tops: "Tops", conjuntos: "Sets" },
      btn: "I want this piece",
      photoSoon: "photo coming soon",
    },
    about: {
      tag: "our story",
      title: "About Manto Art",
      p1: "Manto Art was born from a love of crochet and the desire to create pieces that carry soul. Every stitch is placed with intention, every yarn chosen with care.",
      p2: "In Itacaré, surrounded by the sea and nature, we find the perfect inspiration to create garments that are more than pieces — they are stories woven by hand.",
      badges: ["Authenticity", "Warmth", "Sustainability", "Slow Fashion"],
      photoPlaceholder: "your photo here",
    },
    testimonials: {
      tag: "who has worn it",
      title: "What they say",
      items: [
        { text: "The most beautiful piece I've ever owned! Every detail is perfect, you can feel the love in every stitch.", name: "Marina S.", loc: "Itacaré" },
        { text: "I bought the Sand Top and never take it off. Everyone asks where I got it. So exclusive!", name: "Juliana R.", loc: "Sao Paulo" },
        { text: "A gift for my mom and she loved it! The packaging was gorgeous — it felt like a boutique present.", name: "Camila F.", loc: "Curitiba" },
      ],
    },
    contact: {
      tag: "let's talk?",
      title: "Get in touch",
      desc: "Want to know more about a piece? Have a special order? Message us on WhatsApp — the conversation is always personal and no-pressure.",
      btn: "Chat on WhatsApp",
      labelInstagram: "Instagram",
      labelLocal: "Location",
      labelHours: "Hours",
      hoursValue: "Mon–Fri, 9am–6pm",
    },
    footer: { tagline: "Made by hand, made with soul." },
    productDescs: {
      1: "Halter crochet top in blue and ecru with horizontal stripes and natural shell trim at the hem. Perfect for beach days and summer shoots.",
      2: "Structured bust in red with a granny-square band in green, yellow and red. Entirely hand-crafted — every square is individual.",
      3: "Fitted emerald green top with a floral square detail at the hem. The statement piece of any outfit.",
      4: "Earthy-tone top with dense weave and a handmade black crossbody bag. A complete, cohesive look ready to wear.",
      5: "Sand-toned top with a structured center weave and natural shells at the hem. Light, elegant and versatile.",
      6: "One-piece front red top with a handmade black bag. A bold look perfect for campaigns and social content.",
      7: "The same style available in multiple colors, made to order. Same stitch, same finish — your color choice.",
    },
  },

  es: {
    waMessage: (p) => `Hola! Me interesa la pieza "${p}" de Manto Art ♡`,
    nav: {
      home: "Inicio", pieces: "Piezas", about: "Sobre", contact: "Contacto", cta: "Contactar",
    },
    hero: {
      tag: "crochet artesanal en Itacaré",
      title1: "Hecho a mano,",
      title2: "hecho con alma.",
      desc: "Cada pieza de Manto Art es tejida a mano con carino y dedicacion. Son horas de trabajo artesanal transformadas en prendas unicas que cuentan historias.",
      btnPieces: "Ver Piezas",
      btnWa: "Escribir en WhatsApp",
    },
    values: ["100% Artesanal", "Hilos Seleccionados", "Pieza Unica", "Itacaré, BA"],
    products: {
      tag: "coleccion",
      title: "Nuestras Piezas",
      desc: "Cada pieza es unica — hecha con hilos seleccionados y mucho amor. Haz clic para conversar en WhatsApp y asegurar la tuya.",
      filters: { all: "Todas", tops: "Tops", conjuntos: "Conjuntos" },
      btn: "Quiero esta pieza",
      photoSoon: "foto pronto",
    },
    about: {
      tag: "nuestra historia",
      title: "Sobre Manto Art",
      p1: "Manto Art nacio del amor por el crochet y el deseo de crear piezas que lleven alma. Cada punto se da con intencion, cada hilo se elige con carino.",
      p2: "En Itacaré, entre el mar y la naturaleza, encontramos la inspiracion perfecta para crear ropa que es mas que prendas — son historias tejidas a mano.",
      badges: ["Autenticidad", "Calidez", "Sostenibilidad", "Slow Fashion"],
      photoPlaceholder: "tu foto aqui",
    },
    testimonials: {
      tag: "quienes ya lo usaron",
      title: "Lo que dicen",
      items: [
        { text: "La pieza mas linda que he tenido. Cada detalle es perfecto, se siente el carino en cada punto.", name: "Marina S.", loc: "Itacaré" },
        { text: "Compre el Top Arena y no me lo saco mas. Todos preguntan donde lo compre. Super exclusivo!", name: "Juliana R.", loc: "Sao Paulo" },
        { text: "Un regalo para mi mama y lo amo! El empaque llego hermoso, parecia un regalo de boutique.", name: "Camila F.", loc: "Curitiba" },
      ],
    },
    contact: {
      tag: "vamos a conversar?",
      title: "Hablemos",
      desc: "Quieres saber mas sobre una pieza? Tienes un pedido especial? Escribenos en WhatsApp — la conversacion es siempre personal y sin compromiso.",
      btn: "Escribir en WhatsApp",
      labelInstagram: "Instagram",
      labelLocal: "Ubicacion",
      labelHours: "Horario",
      hoursValue: "Lun–Vie, 9h–18h",
    },
    footer: { tagline: "Hecho a mano, hecho con alma." },
    productDescs: {
      1: "Top halter de crochet azul y crudo con rayas horizontales y conchas naturales en el borde. Perfecto para playa y sesiones de verano.",
      2: "Busto estructurado en rojo con banda en granny squares de colores — verde, amarillo y rojo. Hecho enteramente a mano.",
      3: "Cae ajustado en verde esmeralda con detalle floral en squares en el borde. La protagonista de cualquier look.",
      4: "Top en tono terroso con trama densa y bolso transversal negro hecho a mano. Look completo y listo para usar.",
      5: "Tono arena con trama central estructurada y conchas naturales en el borde. Ligero, elegante y versatil.",
      6: "Top frontal unico en rojo intenso con bolso negro artesanal. Un look de impacto para campanas y redes sociales.",
      7: "El mismo modelo disponible en multiples colores bajo pedido. Mismo punto, mismo acabado — tu color.",
    },
  },
};

// ── Products (static, descriptions come from translations) ───
const products = [
  { id: 1, name: "Top Concha Azul",       cat: "tops",      image: "/fotos/WhatsApp Image 2026-04-19 at 15.17.02.jpeg", colors: ["#7BAFD4", "#E8D5B7"] },
  { id: 2, name: "Top Granny Vermelho",   cat: "tops",      image: "/fotos/WhatsApp Image 2026-04-19 at 15.17.26.jpeg", colors: ["#C2703E", "#8A9A5B"] },
  { id: 3, name: "Top Verde Esmeralda",   cat: "tops",      image: "/fotos/WhatsApp Image 2026-04-19 at 15.17.48.jpeg", colors: ["#8A9A5B", "#E8D5B7"] },
  { id: 4, name: "Top Terra com Bolsa",   cat: "conjuntos", image: "/fotos/WhatsApp Image 2026-04-19 at 15.18.08.jpeg", colors: ["#C2703E", "#3D2B1F"] },
  { id: 5, name: "Top Areia Natural",     cat: "tops",      image: "/fotos/WhatsApp Image 2026-04-19 at 15.18.25.jpeg", colors: ["#E8D5B7", "#D4A59A"] },
  { id: 6, name: "Top Vermelho com Bolsa",cat: "conjuntos", image: "/fotos/WhatsApp Image 2026-04-19 at 15.18.53.jpeg", colors: ["#C2703E", "#3D2B1F"] },
  { id: 7, name: "Top Gota — Varias Cores",cat:"tops",      image: "/fotos/WhatsApp Image 2026-04-19 at 15.19.09.jpeg", colors: ["#C2703E", "#8A9A5B"] },
];

// ── Logo SVG ────────────────────────────────────────────────
function Logo({ size = 200, variant = "dark" }) {
  const text = variant === "dark" ? C.dark : C.light;
  return (
    <svg viewBox="0 0 320 100" width={size} xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(50, 50)">
        <circle cx="0" cy="0" r="28" fill="none" stroke={C.primary} strokeWidth="2.5" />
        <path d="M-20,-20 Q0,-5 20,-20" fill="none" stroke={C.primary} strokeWidth="1.5" opacity="0.6" />
        <path d="M-24,-10 Q0,5 24,-10" fill="none" stroke={C.primary} strokeWidth="1.5" opacity="0.5" />
        <path d="M-24,5 Q0,18 24,5" fill="none" stroke={C.primary} strokeWidth="1.5" opacity="0.4" />
        <path d="M-20,16 Q0,28 20,16" fill="none" stroke={C.primary} strokeWidth="1.5" opacity="0.3" />
        <path d="M-10,-28 Q-15,0 -10,28" fill="none" stroke={C.primary} strokeWidth="1" opacity="0.3" />
        <path d="M10,-28 Q15,0 10,28" fill="none" stroke={C.primary} strokeWidth="1" opacity="0.3" />
        <path d="M22,-18 Q35,-25 38,-32 Q40,-38 36,-38 Q32,-38 34,-32" fill="none" stroke={C.primary} strokeWidth="2" strokeLinecap="round" />
        <g transform="translate(-32, 18) rotate(-30)">
          <path d="M0,0 Q5,-12 0,-22 Q-5,-12 0,0Z" fill={C.accent} opacity="0.5" />
          <path d="M0,0 L0,-22" fill="none" stroke={C.accent} strokeWidth="0.8" opacity="0.7" />
        </g>
      </g>
      <text x="95" y="44" fontFamily="'Cormorant Garamond', serif" fontSize="36" fontWeight="600" fill={text} letterSpacing="3">Manto</text>
      <text x="225" y="44" fontFamily="'Caveat', cursive" fontSize="32" fill={C.primary}>Art</text>
      <text x="97" y="66" fontFamily="'Nunito Sans', sans-serif" fontSize="8.5" fill={text} opacity="0.5" letterSpacing="3.5">FEITO A MAO, FEITO COM ALMA</text>
    </svg>
  );
}

function LogoIcon({ size = 50 }) {
  return (
    <svg viewBox="0 0 60 60" width={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="22" fill="none" stroke={C.primary} strokeWidth="2" />
      <path d="M12,12 Q28,25 44,12" fill="none" stroke={C.primary} strokeWidth="1.2" opacity="0.5" />
      <path d="M8,22 Q28,35 48,22" fill="none" stroke={C.primary} strokeWidth="1.2" opacity="0.4" />
      <path d="M10,34 Q28,46 46,34" fill="none" stroke={C.primary} strokeWidth="1.2" opacity="0.3" />
      <path d="M44,14 Q52,8 54,2 Q55,-2 52,-2 Q49,-2 50,2" fill="none" stroke={C.primary} strokeWidth="1.8" strokeLinecap="round" />
      <g transform="translate(4,44) rotate(-30)">
        <path d="M0,0 Q4,-9 0,-16 Q-4,-9 0,0Z" fill={C.accent} opacity="0.45" />
      </g>
    </svg>
  );
}

function CrochetPattern({ opacity = 0.03 }) {
  return (
    <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="crochet" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="8" fill="none" stroke={C.primary} strokeWidth="0.5" />
          <circle cx="0" cy="0" r="8" fill="none" stroke={C.primary} strokeWidth="0.5" />
          <circle cx="40" cy="0" r="8" fill="none" stroke={C.primary} strokeWidth="0.5" />
          <circle cx="0" cy="40" r="8" fill="none" stroke={C.primary} strokeWidth="0.5" />
          <circle cx="40" cy="40" r="8" fill="none" stroke={C.primary} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#crochet)" />
    </svg>
  );
}

function ProductImage({ image, colors, name, photoSoon }) {
  if (image) {
    return (
      <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden" }}>
        <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }
  return (
    <div style={{
      width: "100%", aspectRatio: "3/4", borderRadius: 12,
      background: `linear-gradient(145deg, ${colors[0]}25, ${colors[1]}40)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <svg viewBox="0 0 200 260" width="100%" height="100%" style={{ position: "absolute" }}>
        <circle cx="100" cy="130" r="60" fill="none" stroke={colors[0]} strokeWidth="1" opacity="0.2" />
        <circle cx="100" cy="130" r="45" fill="none" stroke={colors[0]} strokeWidth="0.8" opacity="0.15" />
        <circle cx="100" cy="130" r="30" fill="none" stroke={colors[1]} strokeWidth="0.6" opacity="0.15" />
        <path d="M60,90 Q100,60 140,90" fill="none" stroke={colors[0]} strokeWidth="0.8" opacity="0.1" />
        <path d="M50,130 Q100,100 150,130" fill="none" stroke={colors[0]} strokeWidth="0.8" opacity="0.1" />
        <path d="M60,170 Q100,140 140,170" fill="none" stroke={colors[0]} strokeWidth="0.8" opacity="0.1" />
      </svg>
      <div style={{ zIndex: 1, textAlign: "center" }}>
        <LogoIcon size={36} />
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 14, color: C.primary, marginTop: 8, opacity: 0.6 }}>{photoSoon}</div>
      </div>
    </div>
  );
}

function WhatsAppFloat({ waLink }) {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const t = setInterval(() => { setPulse(p => !p); }, 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <a href={waLink("Geral")} target="_blank" rel="noopener noreferrer" style={{
      position: "fixed", bottom: 24, right: 24, zIndex: 1000,
      width: 56, height: 56, borderRadius: "50%",
      background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: `0 4px 20px rgba(37,211,102,${pulse ? "0.5" : "0.3"})`,
      transition: "box-shadow 0.3s, transform 0.2s",
      transform: pulse ? "scale(1.05)" : "scale(1)",
      textDecoration: "none",
    }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, margin: "48px 0" }}>
      <div style={{ height: 1, flex: 1, maxWidth: 120, background: `linear-gradient(90deg, transparent, ${C.secondary})` }} />
      <svg width="24" height="24" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" fill="none" stroke={C.primary} strokeWidth="1" opacity="0.4" />
        <circle cx="12" cy="12" r="4" fill="none" stroke={C.primary} strokeWidth="0.8" opacity="0.3" />
        <circle cx="12" cy="12" r="1.5" fill={C.primary} opacity="0.3" />
      </svg>
      <div style={{ height: 1, flex: 1, maxWidth: 120, background: `linear-gradient(90deg, ${C.secondary}, transparent)` }} />
    </div>
  );
}

// ── Language Switcher ────────────────────────────────────────
function LangSwitcher({ lang, setLang }) {
  const langs = ["pt", "en", "es"];
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      {langs.map((l, i) => (
        <span key={l} style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <button
            onClick={() => setLang(l)}
            style={{
              background: "none", border: "none", cursor: "pointer", padding: "2px 4px",
              fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase",
              fontFamily: "'Nunito Sans', sans-serif",
              color: lang === l ? C.primary : "#A89880",
              borderBottom: lang === l ? `1.5px solid ${C.primary}` : "1.5px solid transparent",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >{l}</button>
          {i < langs.length - 1 && <span style={{ color: "#D4C4B0", fontSize: 10 }}>|</span>}
        </span>
      ))}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════════════════════════════
export default function MantoArtSite() {
  const [filter, setFilter] = useState("all");
  const [lang, setLang] = useState("pt");

  const t = translations[lang];
  const waLink = (product) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t.waMessage(product))}`;

  const filteredProducts = filter === "all" ? products : products.filter(p => p.cat === filter);
  const categories = [
    { id: "all",       label: t.products.filters.all },
    { id: "tops",      label: t.products.filters.tops },
    { id: "conjuntos", label: t.products.filters.conjuntos },
  ];

  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif", color: C.dark, background: C.cream, minHeight: "100vh", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Nunito+Sans:wght@300;400;600;700&family=Caveat:wght@400;500;600&display=swap" rel="stylesheet" />
      <WhatsAppFloat waLink={waLink} />

      {/* ── NAVBAR ──────────────────────────────────────── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: `${C.cream}F2`, backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${C.secondary}60`,
        padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <Logo size={160} variant="dark" />
          <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            {[
              { id: "home",    label: t.nav.home },
              { id: "pecas",   label: t.nav.pieces },
              { id: "sobre",   label: t.nav.about },
              { id: "contato", label: t.nav.contact },
            ].map(item => (
              <a key={item.id} href={`#${item.id}`} style={{
                textDecoration: "none", fontSize: 13, fontWeight: 600,
                color: C.dark, letterSpacing: 1, textTransform: "uppercase",
                borderBottom: `2px solid transparent`, paddingBottom: 2, transition: "border-color 0.2s",
              }}
              onMouseOver={e => e.target.style.borderBottomColor = C.primary}
              onMouseOut={e => e.target.style.borderBottomColor = "transparent"}
              >{item.label}</a>
            ))}
            <LangSwitcher lang={lang} setLang={setLang} />
            <a href={waLink("Geral")} target="_blank" rel="noopener noreferrer" style={{
              background: C.primary, color: C.white, textDecoration: "none",
              padding: "8px 20px", borderRadius: 24, fontSize: 12, fontWeight: 700,
              letterSpacing: 0.5, boxShadow: `0 2px 12px ${C.primary}30`,
            }}
            onMouseOver={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = `0 4px 16px ${C.primary}50`; }}
            onMouseOut={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = `0 2px 12px ${C.primary}30`; }}
            >{t.nav.cta}</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section id="home" style={{
        position: "relative", overflow: "hidden",
        padding: "80px 24px 100px", textAlign: "center",
        background: `linear-gradient(180deg, ${C.light} 0%, ${C.cream} 100%)`,
      }}>
        <CrochetPattern opacity={0.04} />
        <div style={{ position: "absolute", top: "15%", left: "8%", width: 120, height: 120, borderRadius: "50%", border: `1px solid ${C.primary}15`, animation: "float 6s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "20%", right: "10%", width: 80, height: 80, borderRadius: "50%", border: `1px solid ${C.accent}15`, animation: "float 8s ease-in-out infinite reverse" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: C.accent, marginBottom: 16, letterSpacing: 1 }}>
            {t.hero.tag}
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 500, color: C.dark, lineHeight: 1.1, margin: "0 0 20px" }}>
            {t.hero.title1}<br />
            <span style={{ color: C.primary, fontStyle: "italic" }}>{t.hero.title2}</span>
          </h1>
          <p style={{ fontSize: 16, color: "#6B5D4F", lineHeight: 1.8, maxWidth: 500, margin: "0 auto 36px", fontWeight: 300 }}>
            {t.hero.desc}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#pecas" style={{
              background: C.primary, color: C.white, textDecoration: "none",
              padding: "14px 36px", borderRadius: 30, fontSize: 14, fontWeight: 700,
              letterSpacing: 1, boxShadow: `0 4px 20px ${C.primary}35`,
            }}>{t.hero.btnPieces}</a>
            <a href={waLink("Geral")} target="_blank" rel="noopener noreferrer" style={{
              background: "transparent", color: C.primary, textDecoration: "none",
              padding: "14px 36px", borderRadius: 30, fontSize: 14, fontWeight: 700,
              letterSpacing: 1, border: `2px solid ${C.primary}40`,
            }}>{t.hero.btnWa}</a>
          </div>
        </div>

        <svg viewBox="0 0 1440 60" style={{ position: "absolute", bottom: -1, left: 0, width: "100%" }} preserveAspectRatio="none">
          <path d="M0,30 Q360,60 720,30 T1440,30 L1440,60 L0,60 Z" fill={C.cream} />
        </svg>
        <style>{`@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }`}</style>
      </section>

      {/* ── VALUES BAR ─────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "center", gap: "clamp(16px, 4vw, 48px)", padding: "32px 24px", flexWrap: "wrap" }}>
        {[
          { icon: "🧶", text: t.values[0] },
          { icon: "🌿", text: t.values[1] },
          { icon: "♡",  text: t.values[2] },
          { icon: "📍", text: t.values[3] },
        ].map((v, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#8B7355", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>
            <span style={{ fontSize: 16 }}>{v.icon}</span>
            {v.text}
          </div>
        ))}
      </div>

      <Divider />

      {/* ── PRODUCTS ────────────────────────────────────── */}
      <section id="pecas" style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: C.accent, marginBottom: 4 }}>{t.products.tag}</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 500, color: C.dark, margin: "0 0 12px" }}>{t.products.title}</h2>
          <p style={{ fontSize: 14, color: "#8B7355", maxWidth: 480, margin: "0 auto" }}>{t.products.desc}</p>
        </div>

        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 36, flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setFilter(cat.id)} style={{
              padding: "8px 20px", borderRadius: 20, border: "none", cursor: "pointer",
              fontSize: 12, fontWeight: 600, letterSpacing: 0.5, fontFamily: "'Nunito Sans', sans-serif",
              background: filter === cat.id ? C.primary : `${C.secondary}60`,
              color: filter === cat.id ? C.white : C.dark, transition: "all 0.2s",
            }}>{cat.label}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 24 }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{
              background: C.white, borderRadius: 16, overflow: "hidden",
              border: `1px solid ${C.secondary}50`, transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${C.primary}12`; }}
            onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <ProductImage image={product.image} colors={product.colors} name={product.name} photoSoon={t.products.photoSoon} />
              <div style={{ padding: "18px 20px 22px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: C.dark, margin: "0 0 8px" }}>{product.name}</h3>
                <p style={{ fontSize: 12, color: "#8B7355", lineHeight: 1.6, margin: "0 0 16px" }}>{t.productDescs[product.id]}</p>
                <a href={waLink(product.name)} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  width: "100%", padding: "12px 0", borderRadius: 10,
                  background: `linear-gradient(135deg, ${C.primary}, #D4844A)`,
                  color: C.white, textDecoration: "none", fontSize: 13, fontWeight: 700, letterSpacing: 0.5,
                  boxShadow: `0 3px 12px ${C.primary}25`,
                }}
                onMouseOver={e => e.currentTarget.style.boxShadow = `0 5px 20px ${C.primary}40`}
                onMouseOut={e => e.currentTarget.style.boxShadow = `0 3px 12px ${C.primary}25`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.products.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── ABOUT ───────────────────────────────────────── */}
      <section id="sobre" style={{ padding: "60px 24px 80px", background: `linear-gradient(180deg, ${C.cream} 0%, ${C.light} 100%)`, position: "relative" }}>
        <CrochetPattern opacity={0.03} />
        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: C.accent, marginBottom: 4 }}>{t.about.tag}</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 500, color: C.dark, margin: 0 }}>{t.about.title}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "center" }}>
            <div style={{
              aspectRatio: "4/5", borderRadius: 20,
              background: `linear-gradient(145deg, ${C.secondary}60, ${C.warm}40)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: `2px dashed ${C.primary}25`, position: "relative", overflow: "hidden",
            }}>
              <CrochetPattern opacity={0.06} />
              <div style={{ textAlign: "center", zIndex: 1 }}>
                <LogoIcon size={60} />
                <div style={{ fontFamily: "'Caveat', cursive", fontSize: 16, color: C.primary, marginTop: 12, opacity: 0.6 }}>{t.about.photoPlaceholder}</div>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 15, color: "#5C4E3F", lineHeight: 2, margin: "0 0 20px", fontWeight: 300 }}>{t.about.p1}</p>
              <p style={{ fontSize: 15, color: "#5C4E3F", lineHeight: 2, margin: "0 0 24px", fontWeight: 300 }}>{t.about.p2}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {t.about.badges.map((v, i) => (
                  <span key={i} style={{ padding: "8px 18px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: C.white, color: C.dark, border: `1px solid ${C.secondary}` }}>{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────── */}
      <section style={{ padding: "60px 24px 80px", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: C.accent, marginBottom: 4 }}>{t.testimonials.tag}</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 500, color: C.dark, margin: 0 }}>{t.testimonials.title}</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {t.testimonials.items.map((item, i) => (
            <div key={i} style={{ background: C.white, borderRadius: 16, padding: 28, border: `1px solid ${C.secondary}50` }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, color: C.primary, opacity: 0.2, lineHeight: 1, marginBottom: -10 }}>"</div>
              <p style={{ fontSize: 14, color: "#5C4E3F", lineHeight: 1.8, margin: "0 0 16px", fontStyle: "italic" }}>{item.text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${C.warm}, ${C.secondary})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: C.white }}>{item.name[0]}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.dark }}>{item.name}</div>
                  <div style={{ fontSize: 11, color: "#8B7355" }}>{item.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── CONTACT ─────────────────────────────────────── */}
      <section id="contato" style={{ padding: "60px 24px 80px", background: `linear-gradient(180deg, ${C.cream}, ${C.light})`, textAlign: "center", position: "relative" }}>
        <CrochetPattern opacity={0.03} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Caveat', cursive", fontSize: 20, color: C.accent, marginBottom: 4 }}>{t.contact.tag}</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 44px)", fontWeight: 500, color: C.dark, margin: "0 0 16px" }}>{t.contact.title}</h2>
          <p style={{ fontSize: 15, color: "#6B5D4F", lineHeight: 1.8, margin: "0 0 32px", fontWeight: 300 }}>{t.contact.desc}</p>
          <a href={waLink("Geral")} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: "#25D366", color: C.white, textDecoration: "none",
            padding: "16px 40px", borderRadius: 30, fontSize: 16, fontWeight: 700,
            letterSpacing: 0.5, boxShadow: "0 4px 24px rgba(37,211,102,0.3)",
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t.contact.btn}
          </a>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
            {[
              { label: t.contact.labelInstagram, value: "@mantodoencanto" },
              { label: t.contact.labelLocal,     value: "Itacaré, BA" },
              { label: t.contact.labelHours,     value: t.contact.hoursValue },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 2, color: C.primary, fontWeight: 700, marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 14, color: C.dark, fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer style={{ background: C.dark, padding: "48px 24px 32px", textAlign: "center" }}>
        <Logo size={180} variant="light" />
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: C.secondary, margin: "12px 0 24px", opacity: 0.7 }}>{t.footer.tagline}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32 }}>
          {["Instagram", "WhatsApp"].map(s => (
            <a key={s} href={s === "WhatsApp" ? waLink("Geral") : "#"} target="_blank" rel="noopener noreferrer" style={{
              fontSize: 12, color: C.secondary, textDecoration: "none",
              letterSpacing: 1, fontWeight: 600, textTransform: "uppercase", opacity: 0.6,
            }}
            onMouseOver={e => e.target.style.opacity = "1"}
            onMouseOut={e => e.target.style.opacity = "0.6"}
            >{s}</a>
          ))}
        </div>
        <div style={{ height: 1, background: `${C.secondary}15`, maxWidth: 300, margin: "0 auto 20px" }} />
        <p style={{ fontSize: 10, color: C.secondary, opacity: 0.4, margin: 0 }}>
          Manto Art · Itacaré, BA · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
