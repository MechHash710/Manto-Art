import { useEffect, useState } from "react";

const C = {
  primary: "#C2703E",
  secondary: "#E8D5B7",
  accent: "#8A9A5B",
  dark: "#3D2B1F",
  light: "#F5F0E8",
  warm: "#D4A59A",
  cream: "#FAF7F2",
  white: "#FFFFFF",
  whatsapp: "#25D366",
};

const WHATSAPP = "5571981848206";
const INSTAGRAM = "https://www.instagram.com/mantoart";

const waLink = (product) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Oi! Tenho interesse na peca "${product}" da Manto Art e gostaria de saber valor, prazo e disponibilidade.`
  )}`;

const products = [
  {
    id: 1,
    name: "Top Concha Azul",
    tag: "Foto real",
    priceLabel: "Sob encomenda",
    cat: "tops",
    image: "/Fotos/WhatsApp Image 2026-04-19 at 15.17.02.jpeg",
    alt: "Top de croche azul e cru com detalhes de conchas aplicadas.",
    desc: "Top halter em croche com listras marcadas e acabamento com conchas. Ideal para praia, ensaios e looks de verao.",
  },
  {
    id: 2,
    name: "Top Granny Vermelho",
    tag: "Foto real",
    priceLabel: "Sob consulta",
    cat: "tops",
    image: "/Fotos/WhatsApp Image 2026-04-19 at 15.17.26.jpeg",
    alt: "Top vermelho de croche com barra em squares verdes e amarelos.",
    desc: "Modelo com busto estruturado e faixa em granny square. Uma peca vibrante, com presenca artesanal bem evidente.",
  },
  {
    id: 3,
    name: "Top Verde Esmeralda",
    tag: "Foto real",
    priceLabel: "Sob encomenda",
    cat: "tops",
    image: "/Fotos/WhatsApp Image 2026-04-19 at 15.17.48.jpeg",
    alt: "Top verde de croche com quadrados florais na barra.",
    desc: "Top com caimento ajustado, textura firme e detalhe floral na base. Funciona muito bem como peca protagonista do look.",
  },
  {
    id: 4,
    name: "Top Terra com Bolsa",
    tag: "Conjunto em destaque",
    priceLabel: "Consulte valor",
    cat: "conjuntos",
    image: "/Fotos/WhatsApp Image 2026-04-19 at 15.18.08.jpeg",
    alt: "Top marrom em croche com bolsa preta transversal artesanal.",
    desc: "Composicao pronta para anuncio: top em tom terroso com bolsa transversal artesanal. Excelente para vender a proposta completa.",
  },
  {
    id: 5,
    name: "Top Areia Natural",
    tag: "Foto real",
    priceLabel: "Sob encomenda",
    cat: "tops",
    image: "/Fotos/WhatsApp Image 2026-04-19 at 15.18.25.jpeg",
    alt: "Top cru em croche com detalhes de conchas na barra.",
    desc: "Modelo em tom cru com visual leve e sofisticado. Destaque para a trama central e os acabamentos com conchas.",
  },
  {
    id: 6,
    name: "Top Vermelho com Bolsa",
    tag: "Look completo",
    priceLabel: "Consulte valor",
    cat: "conjuntos",
    image: "/Fotos/WhatsApp Image 2026-04-19 at 15.18.53.jpeg",
    alt: "Top vermelho em croche com bolsa preta artesanal.",
    desc: "Visual forte e comercial, com top frente unica e bolsa preta aplicada. Uma combinacao pronta para campanha e encomenda.",
  },
  {
    id: 7,
    name: "Top Gota Color",
    tag: "Feito por encomenda",
    priceLabel: "Cores sob pedido",
    cat: "variacoes",
    image: "/Fotos/WhatsApp Image 2026-04-19 at 15.19.09.jpeg",
    alt: "Varios tops de croche no mesmo modelo, em cores diferentes.",
    desc: "Mesmo modelo em varias cores para mostrar possibilidade de personalizacao. Perfeito para destacar a proposta sob medida da marca.",
  },
];

const highlights = [
  "Fotos reais das pecas produzidas pela Manto Art",
  "Atendimento direto pelo WhatsApp para valor e encomenda",
  "Croche artesanal com visual autoral e acabamento manual",
];

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
        <path
          d="M22,-18 Q35,-25 38,-32 Q40,-38 36,-38 Q32,-38 34,-32"
          fill="none"
          stroke={C.primary}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <g transform="translate(-32, 18) rotate(-30)">
          <path d="M0,0 Q5,-12 0,-22 Q-5,-12 0,0Z" fill={C.accent} opacity="0.5" />
          <path d="M0,0 L0,-22" fill="none" stroke={C.accent} strokeWidth="0.8" opacity="0.7" />
        </g>
      </g>
      <text x="95" y="44" fontFamily="'Cormorant Garamond', serif" fontSize="36" fontWeight="600" fill={text} letterSpacing="3">
        Manto
      </text>
      <text x="225" y="44" fontFamily="'Caveat', cursive" fontSize="32" fill={C.primary}>
        Art
      </text>
      <text
        x="97"
        y="66"
        fontFamily="'Nunito Sans', sans-serif"
        fontSize="8.5"
        fill={text}
        opacity="0.5"
        letterSpacing="3.5"
      >
        FEITO A MAO, FEITO COM ALMA
      </text>
    </svg>
  );
}

function CrochetPattern({ opacity = 0.03 }) {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity, pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
    >
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

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, margin: "52px 0" }}>
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

function WhatsAppFloat() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setPulse((prev) => !prev), 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <a
      href={waLink("Catalogo Manto Art")}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 1000,
        width: 58,
        height: 58,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: C.whatsapp,
        boxShadow: `0 8px 26px rgba(37, 211, 102, ${pulse ? "0.45" : "0.28"})`,
        transform: pulse ? "scale(1.05)" : "scale(1)",
        transition: "all 0.25s ease",
      }}
      aria-label="Conversar no WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

function ProductCard({ product }) {
  return (
    <article
      style={{
        background: C.white,
        borderRadius: 20,
        overflow: "hidden",
        border: `1px solid ${C.secondary}60`,
        boxShadow: "0 12px 30px rgba(61, 43, 31, 0.05)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden", background: C.light }}>
        <img
          src={product.image}
          alt={product.alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            top: 14,
            left: 14,
            background: "rgba(250, 247, 242, 0.92)",
            color: C.dark,
            borderRadius: 999,
            padding: "7px 12px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 0.6,
            textTransform: "uppercase",
            backdropFilter: "blur(6px)",
          }}
        >
          {product.tag}
        </div>
      </div>

      <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
          <h3
            style={{
              margin: 0,
              color: C.dark,
              fontSize: 23,
              lineHeight: 1.1,
              fontWeight: 600,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {product.name}
          </h3>
          <span style={{ color: C.primary, fontSize: 13, fontWeight: 700, whiteSpace: "nowrap" }}>{product.priceLabel}</span>
        </div>

        <p style={{ margin: 0, color: "#6B5D4F", fontSize: 13, lineHeight: 1.7 }}>{product.desc}</p>

        <a
          href={waLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "auto",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            textDecoration: "none",
            borderRadius: 12,
            padding: "13px 16px",
            color: C.white,
            background: `linear-gradient(135deg, ${C.primary}, #D4844A)`,
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 0.4,
            boxShadow: `0 8px 18px ${C.primary}30`,
          }}
        >
          Quero saber mais
        </a>
      </div>
    </article>
  );
}

export default function MantoArtSite() {
  const [filter, setFilter] = useState("all");

  const filteredProducts = filter === "all" ? products : products.filter((product) => product.cat === filter);

  const categories = [
    { id: "all", label: "Todas" },
    { id: "tops", label: "Tops" },
    { id: "conjuntos", label: "Com bolsa" },
    { id: "variacoes", label: "Variacoes" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Nunito Sans', sans-serif",
        color: C.dark,
        background: C.cream,
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;600;700&family=Caveat:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <WhatsAppFloat />

      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(250, 247, 242, 0.94)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${C.secondary}60`,
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            minHeight: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <Logo size={160} variant="dark" />
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
            {[
              ["#home", "Inicio"],
              ["#pecas", "Pecas"],
              ["#sobre", "Sobre"],
              ["#contato", "Contato"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                style={{
                  textDecoration: "none",
                  color: C.dark,
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {label}
              </a>
            ))}
            <a
              href={waLink("Catalogo Manto Art")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: C.primary,
                color: C.white,
                borderRadius: 999,
                padding: "10px 18px",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              Fale conosco
            </a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        style={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(180deg, ${C.light} 0%, ${C.cream} 100%)`,
          padding: "72px 24px 90px",
        }}
      >
        <CrochetPattern opacity={0.04} />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 36,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ color: C.accent, fontSize: 22, fontFamily: "'Caveat', cursive", marginBottom: 14 }}>
              anuncios com pecas reais da marca
            </div>
            <h1
              style={{
                margin: "0 0 18px",
                color: C.dark,
                fontSize: "clamp(42px, 7vw, 74px)",
                lineHeight: 1.02,
                fontWeight: 500,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Croche autoral
              <br />
              <span style={{ color: C.primary, fontStyle: "italic" }}>feito para vestir e vender bem.</span>
            </h1>

            <p style={{ margin: "0 0 28px", color: "#6B5D4F", fontSize: 16, lineHeight: 1.9, maxWidth: 540 }}>
              O catalogo agora usa fotos reais das pecas produzidas pela Manto Art. Isso deixa a vitrine mais confiavel,
              mais comercial e muito mais proxima do que a cliente vai receber.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 28 }}>
              <a
                href="#pecas"
                style={{
                  textDecoration: "none",
                  background: C.primary,
                  color: C.white,
                  padding: "14px 28px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 700,
                  boxShadow: `0 10px 24px ${C.primary}28`,
                }}
              >
                Ver catalogo real
              </a>
              <a
                href={waLink("Catalogo Manto Art")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  border: `1.5px solid ${C.primary}40`,
                  color: C.primary,
                  background: "rgba(255,255,255,0.65)",
                  padding: "14px 28px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                Pedir no WhatsApp
              </a>
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              {highlights.map((item) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "#5C4E3F", fontSize: 14 }}>
                  <span style={{ color: C.primary, fontWeight: 700 }}>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: 16,
              alignItems: "stretch",
            }}
          >
            <img
              src="/Fotos/WhatsApp Image 2026-04-19 at 15.18.25.jpeg"
              alt="Top cru em croche da Manto Art."
              style={{
                width: "100%",
                height: "100%",
                minHeight: 420,
                objectFit: "cover",
                borderRadius: 26,
                boxShadow: "0 24px 40px rgba(61, 43, 31, 0.12)",
              }}
            />
            <div style={{ display: "grid", gap: 16 }}>
              <img
                src="/Fotos/WhatsApp Image 2026-04-19 at 15.17.02.jpeg"
                alt="Top azul em croche com detalhes de conchas."
                style={{
                  width: "100%",
                  height: 202,
                  objectFit: "cover",
                  borderRadius: 22,
                  boxShadow: "0 18px 34px rgba(61, 43, 31, 0.08)",
                }}
              />
              <img
                src="/Fotos/WhatsApp Image 2026-04-19 at 15.18.53.jpeg"
                alt="Top vermelho com bolsa preta artesanal."
                style={{
                  width: "100%",
                  height: 202,
                  objectFit: "cover",
                  borderRadius: 22,
                  boxShadow: "0 18px 34px rgba(61, 43, 31, 0.08)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section style={{ padding: "0 24px", maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.75), rgba(232, 213, 183, 0.38))`,
            border: `1px solid ${C.secondary}75`,
            borderRadius: 24,
            padding: "24px 22px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 18,
          }}
        >
          {[
            ["7", "fotos reais no catalogo"],
            ["sob consulta", "valores ajustados no atendimento"],
            ["feito a mao", "cada peca com identidade propria"],
            ["Florianopolis", "producao artesanal da marca"],
          ].map(([value, label]) => (
            <div key={label}>
              <div style={{ color: C.primary, fontSize: 26, fontWeight: 700, fontFamily: "'Cormorant Garamond', serif" }}>{value}</div>
              <div style={{ color: "#6B5D4F", fontSize: 13, lineHeight: 1.6 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      <section id="pecas" style={{ padding: "0 24px 80px", maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 34 }}>
          <div style={{ color: C.accent, fontSize: 21, fontFamily: "'Caveat', cursive", marginBottom: 6 }}>catalogo atualizado</div>
          <h2
            style={{
              margin: "0 0 12px",
              color: C.dark,
              fontSize: "clamp(34px, 5vw, 48px)",
              fontWeight: 500,
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Pecas anunciadas com fotos reais
          </h2>
          <p style={{ margin: "0 auto", maxWidth: 620, color: "#6B5D4F", fontSize: 14, lineHeight: 1.8 }}>
            Em vez de mockups ou imagens ilustrativas, a vitrine agora mostra as pecas prontas. Isso melhora a credibilidade
            do anuncio e ajuda a cliente a visualizar textura, modelagem e estilo.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              style={{
                border: "none",
                cursor: "pointer",
                borderRadius: 999,
                padding: "10px 18px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.5,
                background: filter === category.id ? C.primary : "rgba(232, 213, 183, 0.62)",
                color: filter === category.id ? C.white : C.dark,
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))",
            gap: 24,
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Divider />

      <section
        id="sobre"
        style={{
          position: "relative",
          padding: "60px 24px 80px",
          background: `linear-gradient(180deg, ${C.cream} 0%, ${C.light} 100%)`,
        }}
      >
        <CrochetPattern opacity={0.03} />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ color: C.accent, fontSize: 21, fontFamily: "'Caveat', cursive", marginBottom: 8 }}>sobre a marca</div>
            <h2
              style={{
                margin: "0 0 18px",
                color: C.dark,
                fontSize: "clamp(34px, 5vw, 48px)",
                fontWeight: 500,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Uma vitrine mais fiel ao trabalho artesanal
            </h2>
            <p style={{ color: "#5C4E3F", fontSize: 15, lineHeight: 1.95, margin: "0 0 18px" }}>
              A Manto Art nasceu para transformar croche em peca de desejo. Com as fotos reais das criacoes, o site passa a
              comunicar melhor o que a marca entrega: textura, acabamento, modelagem e identidade propria.
            </p>
            <p style={{ color: "#5C4E3F", fontSize: 15, lineHeight: 1.95, margin: 0 }}>
              O resultado e um anuncio mais honesto e mais forte comercialmente, porque a cliente enxerga o produto como ele e
              de verdade.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 14,
            }}
          >
            <img
              src="/Fotos/WhatsApp Image 2026-04-19 at 15.17.48.jpeg"
              alt="Top verde artesanal da Manto Art."
              style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 22 }}
            />
            <img
              src="/Fotos/WhatsApp Image 2026-04-19 at 15.18.08.jpeg"
              alt="Top marrom com bolsa preta artesanal."
              style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 22 }}
            />
            <img
              src="/Fotos/WhatsApp Image 2026-04-19 at 15.17.26.jpeg"
              alt="Top vermelho em croche com granny square."
              style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 22 }}
            />
            <img
              src="/Fotos/WhatsApp Image 2026-04-19 at 15.19.09.jpeg"
              alt="Variacoes de tops coloridos feitos em croche."
              style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 22 }}
            />
          </div>
        </div>
      </section>

      <Divider />

      <section id="contato" style={{ padding: "0 24px 90px", maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            background: `linear-gradient(180deg, rgba(255,255,255,0.78), rgba(232,213,183,0.3))`,
            border: `1px solid ${C.secondary}75`,
            borderRadius: 28,
            padding: "40px 24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <CrochetPattern opacity={0.035} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ color: C.accent, fontSize: 21, fontFamily: "'Caveat', cursive", marginBottom: 8 }}>vamos conversar</div>
            <h2
              style={{
                margin: "0 0 14px",
                color: C.dark,
                fontSize: "clamp(32px, 5vw, 44px)",
                fontWeight: 500,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Peca valor, prazo e personalizacao
            </h2>
            <p style={{ maxWidth: 560, margin: "0 auto 26px", color: "#6B5D4F", fontSize: 15, lineHeight: 1.85 }}>
              Se alguma peca chamou sua atencao, o caminho mais rapido e chamar no WhatsApp. Assim voce confirma valor,
              disponibilidade, cor e possibilidade de encomenda.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <a
                href={waLink("Catalogo Manto Art")}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  background: C.whatsapp,
                  color: C.white,
                  borderRadius: 999,
                  padding: "15px 28px",
                  fontSize: 15,
                  fontWeight: 700,
                  boxShadow: "0 10px 24px rgba(37, 211, 102, 0.25)",
                }}
              >
                Chamar no WhatsApp
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.8)",
                  color: C.dark,
                  border: `1px solid ${C.secondary}`,
                  borderRadius: 999,
                  padding: "15px 28px",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Ver Instagram
              </a>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap", marginTop: 28 }}>
              <div>
                <div style={{ color: C.primary, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Instagram</div>
                <div style={{ color: C.dark, fontSize: 14, fontWeight: 600 }}>@mantoart</div>
              </div>
              <div>
                <div style={{ color: C.primary, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Local</div>
                <div style={{ color: C.dark, fontSize: 14, fontWeight: 600 }}>Florianopolis, SC</div>
              </div>
              <div>
                <div style={{ color: C.primary, fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Atendimento</div>
                <div style={{ color: C.dark, fontSize: 14, fontWeight: 600 }}>Direto pelo WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: C.dark, padding: "48px 24px 32px", textAlign: "center" }}>
        <Logo size={180} variant="light" />
        <p style={{ margin: "10px 0 20px", color: C.secondary, fontFamily: "'Caveat', cursive", fontSize: 20, opacity: 0.8 }}>
          Feito a mao, feito com alma.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 24 }}>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{ color: C.secondary, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>
            Instagram
          </a>
          <a href={waLink("Catalogo Manto Art")} target="_blank" rel="noopener noreferrer" style={{ color: C.secondary, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>
            WhatsApp
          </a>
        </div>
        <div style={{ width: "100%", maxWidth: 280, height: 1, background: "rgba(232, 213, 183, 0.18)", margin: "0 auto 18px" }} />
        <p style={{ margin: 0, color: "rgba(232, 213, 183, 0.48)", fontSize: 11 }}>
          Manto Art · Florianopolis, SC · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
