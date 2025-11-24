"use client";

import { useEffect, useMemo, useState } from "react";

type GalleryItem = {
  title: string;
  description: string;
  accent: string;
  id: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "sentinel",
    title: "Sentinel of the Himalayas",
    description:
      "Silhouetted guardians echo against misty peaks, harnessing frigid winds to veil their approach.",
    accent: "linear-gradient(120deg, rgba(0,144,153,0.8), rgba(0,42,69,0.9))"
  },
  {
    id: "desert-phantoms",
    title: "Desert Phantoms",
    description:
      "Shadowy patrols drifting over moonlit dunes, footfalls erased by the Thar's nocturnal hush.",
    accent: "linear-gradient(120deg, rgba(255,130,0,0.75), rgba(92,31,0,0.9))"
  },
  {
    id: "monsoon-veil",
    title: "Monsoon Veil",
    description:
      "Lightning fractures the skyline as commandos dissolve into rain-washed alleyways.",
    accent: "linear-gradient(120deg, rgba(0,174,108,0.75), rgba(0,37,20,0.9))"
  },
  {
    id: "night-skyline",
    title: "Urban Nightfall",
    description:
      "Humvees glide beneath neon reflections, a spectral vanguard shielding the sleeping city.",
    accent: "linear-gradient(120deg, rgba(102,102,255,0.75), rgba(16,16,64,0.95))"
  }
];

const timeline = [
  {
    year: "1947",
    label: "Independence",
    detail: "Foundations of a professional force dedicated to sovereignty."
  },
  {
    year: "1971",
    label: "Operation Meghdoot",
    detail: "High-altitude mastery in the unforgiving Siachen glacier."
  },
  {
    year: "1999",
    label: "Kargil Resolve",
    detail: "Silhouettes etched against ridgelines reclaimed under fire."
  },
  {
    year: "2004",
    label: "UN Peacekeeping",
    detail: "Shadows of hope cast across global conflict zones."
  },
  {
    year: "Today",
    label: "Modern Vanguard",
    detail:
      "Integrated tech, stealth units, and precision response safeguarding the nation."
  }
];

const mantra = [
  "Valor in Silence",
  "Stealth in Motion",
  "Courage in Shadows",
  "Resolve in Unity",
  "Guardians of the Dawn"
];

export default function Page() {
  const [mantraIndex, setMantraIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMantraIndex((prev) => (prev + 1) % mantra.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const activeMantra = useMemo(() => mantra[mantraIndex], [mantraIndex]);

  return (
    <main className="page">
      <section className="hero">
        <div className="hero__layer hero__layer--grid" />
        <div className="hero__layer hero__layer--glow" />
        <div className="hero__content">
          <header className="hero__header">
            <span className="hero__badge">Shadow Legion</span>
            <h1>Indian Army Shadow Art Direction</h1>
            <p>
              A cinematic concept suite celebrating the Indian Army through a
              silhouette-first visual narrative. Discover a palette where
              darkness frames valor and luminescence captures the soul of the
              soldier.
            </p>
          </header>
          <div className="hero__mantra">
            <span>Mantra</span>
            <h2 key={activeMantra} className="hero__mantra-text">
              {activeMantra}
            </h2>
          </div>
        </div>
        <div className="hero__aureole" />
      </section>

      <section className="palette">
        <h2>Shadow Palette</h2>
        <p>
          Crafted gradients merge deep obsidian with ritual saffron and verdant
          tones. Each hue evokes strategic landscapes — mountains, deserts,
          urban nightscapes, and monsoon drenched streets.
        </p>
        <div className="palette__swatches">
          <GradientSwatch
            name="Obsidian Ember"
            from="#05060F"
            to="#962D1E"
            description="Embers of the battlefield against stealth armour."
          />
          <GradientSwatch
            name="Midnight Saffron"
            from="#040512"
            to="#DC9E00"
            description="Golden insignia illuminated by the night."
          />
          <GradientSwatch
            name="Dawn Sentinel"
            from="#02131A"
            to="#00837F"
            description="First light breaking through Himalayan fog."
          />
          <GradientSwatch
            name="Rainfall Echo"
            from="#02030A"
            to="#1F4A7A"
            description="Street reflections from monsoon operations."
          />
        </div>
      </section>

      <section className="gallery">
        <div className="gallery__intro">
          <h2>Concept Frames</h2>
          <p>
            Ideate murals, posters, and motion frames with atmospheric depth.
            These compositions use layered gradients, low-poly silhouettes, and
            controlled flares to dramatize presence while retaining stealth.
          </p>
        </div>
        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className="gallery__card"
              style={{ backgroundImage: item.accent }}
            >
              <div className="gallery__overlay" />
              <div className="gallery__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="gallery__tag">Shadow Concept</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="timeline">
        <h2>Echoes Through Time</h2>
        <div className="timeline__track">
          {timeline.map((entry) => (
            <div key={entry.year} className="timeline__node">
              <div className="timeline__pulse" />
              <div className="timeline__label">
                <span>{entry.year}</span>
                <h3>{entry.label}</h3>
                <p>{entry.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta__glow" />
        <div className="cta__content">
          <h2>Design Execution Toolkit</h2>
          <ul>
            <li>Vector silhouettes with layered gradient masks.</li>
            <li>Noise overlays and particle shaders for drama.</li>
            <li>Typography pairing: Monument Extended & Inter.</li>
            <li>Motion cues driven by parallax shadow streaks.</li>
          </ul>
          <button
            className="cta__button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Return to the Summit
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>Conceptual tribute inspired by the valor of the Indian Army.</p>
      </footer>
    </main>
  );
}

type GradientSwatchProps = {
  name: string;
  from: string;
  to: string;
  description: string;
};

function GradientSwatch({ name, from, to, description }: GradientSwatchProps) {
  return (
    <div className="swatch">
      <div
        className="swatch__preview"
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <span />
      </div>
      <div className="swatch__meta">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="swatch__codes">
          <code>{from}</code>
          <code>{to}</code>
        </div>
      </div>
    </div>
  );
}
