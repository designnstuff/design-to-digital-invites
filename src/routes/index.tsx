import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";
import img15 from "@/assets/g-15anos.jpg";
import imgCasamento from "@/assets/g-casamento.jpg";
import imgCha from "@/assets/g-cha.jpg";
import imgFormatura from "@/assets/g-formatura.jpg";
import { whatsappLink, INSTAGRAM_URL } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Convites Digitais — Convites cinematográficos e interativos" },
      {
        name: "description",
        content:
          "Convites digitais personalizados: vídeos cinematográficos, páginas interativas e experiências completas para 15 anos, casamentos, aniversários e mais.",
      },
      { property: "og:title", content: "Convites Digitais — Uma celebração inesquecível começa pelo convite" },
      {
        property: "og:description",
        content: "Convites digitais personalizados que transformam o primeiro momento da sua festa em uma experiência especial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#experiencias", label: "Experiências" },
  { href: "#modelos", label: "Modelos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
];

const experiences = [
  {
    n: "I",
    title: "Cinematográfico",
    text: "Um convite personalizado entregue em vídeo, com animação, música, efeitos visuais, os detalhes do evento e uma abertura memorável.",
    cta: "Conhecer convite cinematográfico",
  },
  {
    n: "II",
    title: "Interativo",
    text: "Um convite personalizado publicado como página na web, com botões clicáveis e as informações úteis do evento. Conforme o pacote, pode incluir confirmação de presença, localização, galeria de fotos e outros recursos.",
    cta: "Conhecer convite interativo",
  },
  {
    n: "III",
    title: "Experiência Completa",
    text: "A combinação premium de um vídeo cinematográfico com um convite interativo, unindo narrativa visual e recursos práticos.",
    cta: "Quero a experiência completa",
    featured: true,
  },
];

// Para adicionar novos modelos, basta incluir um item nesta lista.
const gallery = [
  { cat: "15 anos", title: "Modelo exemplo — 15 anos", img: img15, span: "md:row-span-2" },
  { cat: "Casamento", title: "Modelo exemplo — Casamento", img: imgCasamento, span: "" },
  { cat: "Aniversário infantil", title: "Modelo exemplo — Aniversário infantil", img: imgCha, span: "" },
  { cat: "Chá de bebê", title: "Modelo exemplo — Chá de bebê", img: imgCha, span: "" },
  { cat: "Formatura", title: "Modelo exemplo — Formatura", img: imgFormatura, span: "" },
];

const steps = [
  { t: "Escolha o estilo do convite.", d: "Cinematográfico, interativo ou a experiência completa." },
  { t: "Envie os dados e as referências da celebração.", d: "Nomes, data, local, cores e o clima que você imagina." },
  { t: "Aprove a prévia personalizada.", d: "Você acompanha a criação e aprova antes da versão final." },
  { t: "Receba seu convite pronto para compartilhar.", d: "Pronto para enviar pelo WhatsApp e redes sociais." },
];

const reasons = [
  "Criação personalizada para sua celebração.",
  "Design pensado nos detalhes.",
  "Experiências visuais que surpreendem.",
  "Praticidade para compartilhar pelo celular.",
  "Atendimento próximo durante o processo criativo.",
];

// Respostas editáveis — revisar com as condições reais do serviço.
const faq = [
  {
    q: "Qual é a diferença entre o convite cinematográfico e o interativo?",
    a: "O cinematográfico é um vídeo com animação, música e efeitos, ideal para emocionar. O interativo é uma página na web onde os convidados encontram as informações do evento e podem usar recursos como localização e confirmação de presença, conforme o pacote.",
  },
  {
    q: "Como funciona a personalização?",
    a: "Cada convite é criado a partir das informações e referências da sua celebração: cores, estilo, fotos e o clima desejado.",
  },
  {
    q: "Quais informações preciso enviar?",
    a: "Em geral: nomes, data, horário, local e referências visuais. A lista completa é combinada no atendimento. [Texto a confirmar]",
  },
  {
    q: "Posso solicitar alterações?",
    a: "Sim, você aprova uma prévia antes da versão final. As condições de ajustes são combinadas no atendimento. [Texto a confirmar]",
  },
  {
    q: "Como recebo meu convite?",
    a: "O convite é entregue em formato digital, pronto para compartilhar pelo celular. [Texto a confirmar]",
  },
  {
    q: "Como faço para encomendar?",
    a: "É só nos chamar pelo WhatsApp. Vamos conversar sobre a sua celebração e indicar o formato ideal.",
  },
];

function Ornament() {
  return (
    <div className="mx-auto flex w-40 items-center gap-3 text-gold" aria-hidden>
      <span className="gold-rule flex-1" />
      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0 L10 5 L5 10 L0 5Z" fill="currentColor" /></svg>
      <span className="gold-rule flex-1" />
    </div>
  );
}

function SectionHead({ eyebrow, title, light }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className={`text-4xl leading-tight md:text-5xl ${light ? "text-plum-foreground" : "text-primary"}`}>{title}</h2>
      <div className="mt-6"><Ornament /></div>
    </div>
  );
}

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition hover:bg-primary/90";
const btnGhost =
  "inline-flex items-center justify-center rounded-full border border-primary/30 px-7 py-3.5 text-sm font-medium tracking-wide text-primary transition hover:border-gold hover:text-accent-foreground";

function Index() {
  const [open, setOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const wa = whatsappLink();

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#inicio" className="font-serif text-2xl italic text-primary">Convites Digitais</a>
          <nav className="hidden gap-8 text-sm text-muted-foreground lg:flex" aria-label="Principal">
            {nav.map((n) => <a key={n.href} href={n.href} className="transition hover:text-primary">{n.label}</a>)}
          </nav>
          <a href={wa} className="hidden rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground lg:inline-flex">Falar pelo WhatsApp</a>
          <button className="text-sm text-primary lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menu">
            {open ? "Fechar" : "Menu"}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-border bg-background px-5 py-6 lg:hidden">
            {nav.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-serif text-2xl text-primary">{n.label}</a>)}
            <a href={wa} className={btnPrimary}>Falar pelo WhatsApp</a>
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="relative pt-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:px-8 md:py-24 lg:grid-cols-2">
            <div className="reveal text-center lg:text-left">
              <p className="eyebrow mb-6">Convites cinematográficos & interativos</p>
              <h1 className="text-5xl leading-[1.02] text-primary md:text-7xl">
                Uma celebração <em className="text-gold">inesquecível</em> começa pelo convite.
              </h1>
              <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Convites digitais personalizados que transformam o primeiro momento da sua festa em uma experiência especial.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a href={wa} className={btnPrimary}>Quero criar meu convite</a>
                <a href="#modelos" className={btnGhost}>Conheça os modelos</a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-t-full border border-gold/40" aria-hidden />
              <div className="shimmer-frame relative aspect-[4/5] overflow-hidden rounded-t-full">
                <img src={hero} alt="Convite com selo de cera ao lado de um celular exibindo o convite digital" width={1280} height={1600} className="slow-zoom h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/80 to-transparent p-6 text-center">
                  <p className="eyebrow">Prévia</p>
                  <p className="font-serif text-xl italic text-plum-foreground">Seu vídeo-convite aqui</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section id="experiencias" className="bg-champagne/50 px-5 py-24 md:px-8">
          <SectionHead eyebrow="Experiências" title="Três formas de anunciar o seu momento" />
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {experiences.map((e) => (
              <article key={e.title} className={`flex flex-col rounded-sm border p-8 transition hover:-translate-y-1 ${e.featured ? "border-plum bg-plum text-plum-foreground" : "border-border bg-card"}`}>
                <span className="font-serif text-3xl italic text-gold">{e.n}</span>
                <h3 className={`mt-6 text-3xl ${e.featured ? "text-plum-foreground" : "text-primary"}`}>{e.title}</h3>
                <p className={`mt-4 flex-1 leading-relaxed ${e.featured ? "text-plum-foreground/80" : "text-muted-foreground"}`}>{e.text}</p>
                <a href={whatsappLink(`Olá! Quero saber mais sobre o convite ${e.title}.`)} className="mt-8 border-b border-gold pb-1 text-sm tracking-wide self-start">
                  {e.cta} →
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section id="modelos" className="px-5 py-24 md:px-8">
          <SectionHead eyebrow="Modelos" title="Convites para cada celebração" />
          <div className="mx-auto grid max-w-6xl auto-rows-[320px] gap-5 md:grid-cols-3">
            {gallery.map((g) => (
              <figure key={g.cat} className={`group relative overflow-hidden rounded-sm ${g.span}`}>
                <img src={g.img} alt={`Prévia ilustrativa — ${g.cat}`} loading="lazy" width={896} height={1152} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-plum/85 via-plum/10 to-transparent p-6">
                  <p className="eyebrow">{g.cat}</p>
                  <p className="mt-1 font-serif text-2xl text-plum-foreground">{g.title}</p>
                  <a href="#contato" className="mt-4 self-start rounded-full border border-plum-foreground/50 px-5 py-2 text-xs tracking-widest text-plum-foreground uppercase transition hover:bg-plum-foreground hover:text-plum">Ver modelo</a>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">Imagens ilustrativas — substituir pelos modelos reais.</p>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="bg-plum px-5 py-24 md:px-8">
          <SectionHead eyebrow="Como funciona" title="Do seu sonho ao convite pronto" light />
          <ol className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.t} className="text-center md:text-left">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold font-serif text-2xl text-gold mx-auto md:mx-0">{i + 1}</span>
                <h3 className="mt-6 text-2xl text-plum-foreground">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-plum-foreground/70">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Why */}
        <section className="px-5 py-24 md:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-4">Por que nós</p>
              <h2 className="text-4xl leading-tight text-primary md:text-5xl">Cada detalhe, criado para a <em className="text-gold">sua</em> história.</h2>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-5 py-5">
                  <span className="text-gold" aria-hidden>✦</span>
                  <span className="text-lg text-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="bg-blush/40 px-5 py-24 text-center md:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow mb-6">Sobre</p>
            <p className="font-serif text-3xl leading-snug text-primary md:text-4xl">
              A Convites Digitais é um estúdio criativo que transforma os detalhes de cada evento em experiências digitais memoráveis.
            </p>
            <div className="my-8"><Ornament /></div>
            <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground">
              Acreditamos que a emoção de uma festa começa no momento em que o convite chega. Por isso, criamos cada peça com cuidado, ouvindo a sua história e traduzindo-a em imagem, movimento e música.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="px-5 py-24 md:px-8">
          <SectionHead eyebrow="Dúvidas" title="Perguntas frequentes" />
          <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
            {faq.map((f, i) => (
              <div key={f.q}>
                <button className="flex w-full items-center justify-between gap-6 py-6 text-left" onClick={() => setFaqOpen(faqOpen === i ? null : i)} aria-expanded={faqOpen === i}>
                  <span className="font-serif text-xl text-primary md:text-2xl">{f.q}</span>
                  <span className="text-2xl text-gold">{faqOpen === i ? "−" : "+"}</span>
                </button>
                {faqOpen === i && <p className="reveal pb-6 leading-relaxed text-muted-foreground">{f.a}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section id="contato" className="relative overflow-hidden bg-plum px-5 py-28 text-center md:px-8">
          <div className="absolute inset-0 opacity-20" aria-hidden>
            <img src={hero} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="relative mx-auto max-w-2xl">
            <Ornament />
            <h2 className="mt-8 text-4xl leading-tight text-plum-foreground md:text-6xl">Sua celebração merece um convite à altura.</h2>
            <p className="mt-6 text-lg text-plum-foreground/80">Vamos criar uma experiência especial para anunciar esse momento?</p>
            <a href={wa} className="mt-10 inline-flex rounded-full bg-gold px-9 py-4 text-sm font-medium tracking-wide text-accent-foreground transition hover:opacity-90">Falar pelo WhatsApp</a>
          </div>
        </section>
      </main>

      <footer className="bg-background px-5 py-14 md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#inicio" className="font-serif text-2xl italic text-primary">Convites Digitais</a>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground" aria-label="Rodapé">
            {nav.map((n) => <a key={n.href} href={n.href} className="hover:text-primary">{n.label}</a>)}
          </nav>
          <div className="flex gap-6 text-sm">
            <a href={INSTAGRAM_URL} className="text-primary hover:text-gold">Instagram</a>
            <a href={wa} className="text-primary hover:text-gold">WhatsApp</a>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Convites Digitais. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
