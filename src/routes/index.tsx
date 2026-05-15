import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, Music2, X, Check, Sparkles, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import workspaceImg from "@/assets/workspace.jpg";
import projectFashion from "@/assets/project-fashion.jpg";
import projectBeauty from "@/assets/project-beauty.jpg";
import projectTrainer from "@/assets/project-trainer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adam Nowacki | Profesjonalne strony internetowe w 24h" },
      {
        name: "description",
        content:
          "19-letni freelancer tworzący nowoczesne, sprzedające strony WWW. Ręcznie kodowane, gotowe w 24h. Pakiety od 299 zł.",
      },
    ],
  }),
  component: Index,
});

const EMAIL = "adamnowacki099@gmail.com";

function Index() {
  const buildMailto = (pkg: string) => {
    const subject = encodeURIComponent(`Zamówienie strony – pakiet ${pkg}`);
    const body = encodeURIComponent(
      `Cześć Adam,\n\nChcę zamówić stronę – pakiet ${pkg}.\n\nImię i nazwisko: \nBranża / opis projektu: \nTermin: \n\nPozdrawiam,`
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const selectPackage = (value: string) => {
    window.location.href = buildMailto(value);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm font-bold">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">A</span>
            adam.dev
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#o-mnie" className="transition-colors hover:text-foreground">O mnie</a>
            <a href="#portfolio" className="transition-colors hover:text-foreground">Portfolio</a>
            <a href="#cennik" className="transition-colors hover:text-foreground">Cennik</a>
            <a href="#zamowienie" className="transition-colors hover:text-foreground">Zamówienie</a>
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href={`mailto:${EMAIL}`}>
              <Mail /> Szybki kontakt
            </a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, oklch(0.62 0.19 255 / 0.25) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-36">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Adam Nowacki · 19 lat · dostępny od zaraz
          </div>
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Tworzę profesjonalne strony,{" "}
            <span className="bg-gradient-to-r from-primary to-primary/40 bg-clip-text text-transparent">
              które sprzedają
            </span>
            .
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Nowoczesny design, ręcznie dopracowany kod i Twoja strona gotowa w 24h. Bez zbędnego czekania.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full text-base">
              <a href="#cennik">
                Zobacz ofertę <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-base">
              <a href="#portfolio">Portfolio</a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8 text-sm md:max-w-xl">
            <Stat value="24h" label="Czas realizacji" />
            <Stat value="100%" label="Ręcznie robione" />
            <Stat value="299zł" label="Od" />
          </div>
        </div>
      </section>

      {/* O mnie */}
      <section id="o-mnie" className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={workspaceImg}
                alt="Stanowisko pracy – kodowanie nowoczesnych stron"
                width={800}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <SectionLabel>O mnie</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Młody, szybki i&nbsp;skupiony na efekcie.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Mam 19 lat i pasję do tworzenia stron, które naprawdę działają. Każdą stronę projektuję
              i koduję sam – bez generatorów, bez gotowców. Dzięki temu dostajesz profesjonalną
              witrynę w 24h, dopasowaną do Twojej marki, bez zbędnego kodu i bez przeciągania.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Ręczny kod", "Vibe coding", "Responsywność", "SEO", "Szybki kontakt"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <SectionLabel>Portfolio</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                Wybrane realizacje
              </h2>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ProjectCard
              tag="E-commerce"
              title="Strona dla sklepu odzieżowego"
              desc="Nowoczesny design z naciskiem na konwersję."
              image={projectFashion}
            />
            <ProjectCard
              tag="Landing"
              title="Landing page dla kosmetyczki"
              desc="Formularz rezerwacji wbudowany w sekcję hero."
              image={projectBeauty}
            />
            <ProjectCard
              tag="Wizytówka"
              title="Strona trenera personalnego"
              desc="Cennik, terminarz i social proof na jednym ekranie."
              image={projectTrainer}
            />
          </div>
        </div>
      </section>

      {/* Cennik */}
      <section id="cennik" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel className="justify-center">Cennik</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Wybierz swój pakiet
            </h2>
            <p className="mt-4 text-muted-foreground">
              Stałe ceny. Bez ukrytych kosztów. Płatność po akceptacji projektu.
            </p>
          </div>

          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
            {/* Podstawowy */}
            <div className="relative flex flex-col rounded-3xl border border-border bg-card p-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4" /> Pakiet Podstawowy
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight">299</span>
                <span className="text-muted-foreground">zł</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Idealny start dla małej firmy.</p>
              <ul className="mt-8 space-y-3 text-sm">
                <Feature>Strona jednostronicowa (landing page)</Feature>
                <Feature>Do 5 sekcji (hero, oferta, o mnie, galeria, kontakt)</Feature>
                <Feature>Formularz kontaktowy</Feature>
                <Feature>Dostosowanie do Twojej branży</Feature>
                <Feature>Responsywna (telefon i komputer)</Feature>
                <Feature>Gotowe w 24h</Feature>
                <Feature negative>Brak sklepu</Feature>
                <Feature negative>Brak logowania użytkowników</Feature>
              </ul>
              <Button
                onClick={() => selectPackage("podstawowy")}
                variant="outline"
                size="lg"
                className="mt-8 rounded-full"
              >
                Wybieram podstawowy <ArrowRight />
              </Button>
            </div>

            {/* Pro */}
            <div className="relative flex flex-col rounded-3xl border-2 border-primary bg-card p-8 shadow-[0_0_60px_-15px_oklch(0.62_0.19_255_/_0.5)]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Najpopularniejszy
              </span>
              <div className="flex items-center gap-2 text-sm text-primary">
                <Sparkles className="h-4 w-4" /> Pakiet Pro
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight">799</span>
                <span className="text-muted-foreground">zł</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Pełna witryna pod rozwój marki.</p>
              <ul className="mt-8 space-y-3 text-sm">
                <Feature>Wszystko z pakietu Podstawowego</Feature>
                <Feature>Strona wielostronicowa (do 5 podstron)</Feature>
                <Feature>Opcjonalnie sklep (do 10 produktów) lub panel logowania</Feature>
                <Feature>Optymalizacja SEO – lepsze pozycje w Google</Feature>
                <Feature>Własna domena (pomogę ogarnąć)</Feature>
                <Feature>Gotowe w 48h</Feature>
                <Feature>2 poprawki w cenie</Feature>
              </ul>
              <Button
                onClick={() => selectPackage("pro")}
                size="lg"
                className="mt-8 rounded-full"
              >
                Wybieram Pro <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="zamowienie" className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <SectionLabel>Kontakt</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Zacznijmy projekt
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Napisz do mnie maila – odpowiem w ciągu godziny z linkiem do płatności PayPal i kolejnymi krokami.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a href={buildMailto("Podstawowy / Pro")}>
              <Button size="lg" className="rounded-full px-8 text-base">
                <Mail /> Napisz do mnie
              </Button>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => selectPackage("Podstawowy – 299 zł")}
              className="rounded-2xl border border-border bg-card p-5 text-left transition-colors hover:border-primary/60"
            >
              <div className="text-sm text-muted-foreground">Pakiet</div>
              <div className="mt-1 font-semibold">Podstawowy – 299 zł</div>
              <div className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
                Zamów mailem <ArrowRight className="h-4 w-4" />
              </div>
            </button>
            <button
              type="button"
              onClick={() => selectPackage("Pro – 799 zł")}
              className="rounded-2xl border border-primary/40 bg-card p-5 text-left transition-colors hover:border-primary"
            >
              <div className="text-sm text-muted-foreground">Pakiet</div>
              <div className="mt-1 font-semibold">Pro – 799 zł</div>
              <div className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
                Zamów mailem <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <a href={`mailto:${EMAIL}`} className="text-sm text-muted-foreground hover:text-foreground">
            {EMAIL}
          </a>
          <div className="flex items-center gap-3">
            <SocialIcon href="https://instagram.com" label="Instagram">
              <Instagram className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon href="https://tiktok.com" label="TikTok">
              <Music2 className="h-4 w-4" />
            </SocialIcon>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Adam Nowacki – profesjonalne strony</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight md:text-3xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary ${className}`}>
      <span className="h-px w-6 bg-primary" />
      {children}
    </div>
  );
}

function ProjectCard({
  tag,
  title,
  desc,
  image,
}: {
  tag: string;
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          width={1024}
          height={768}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-lg border border-white/10 bg-black/50 px-3 py-1 text-xs uppercase tracking-widest text-white/90 backdrop-blur">
          {tag}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
        <a
          href="#"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5"
        >
          Zobacz live <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function Feature({
  children,
  negative,
}: {
  children: React.ReactNode;
  negative?: boolean;
}) {
  return (
    <li className={`flex items-start gap-3 ${negative ? "text-muted-foreground" : ""}`}>
      {negative ? (
        <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
      ) : (
        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      )}
      <span>{children}</span>
    </li>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </a>
  );
}
