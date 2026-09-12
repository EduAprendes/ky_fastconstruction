"use client";

import { useEffect, useState, type FormEvent } from "react";

const PHONE_DISPLAY = "(606) 219-7003";
const PHONE_TEL = "+16062197003";
const CONTACT_EMAIL = "Robertconstructionroof@gmail.com";

const galleryItems = [
  { src: "/assets/roof-ridge.jpeg", alt: "Completed shingle roof ridge detail", tag: "Roofing", caption: "Residential Project · Kentucky" },
  { src: "/assets/house-angle.jpeg", alt: "Residential roof and dormers", tag: "Roofing", caption: "Exterior Project · Kentucky" },
  { src: "/assets/roof-close.jpeg", alt: "Close view of finished shingles", tag: "Roof Detail", caption: "Residential Project" },
  { src: "/assets/house-back.jpeg", alt: "Rear view of finished residential roof", tag: "Completed Roof", caption: "Residential Project" },
];

const videoItems = [
  { key: "main", src: "/assets/work-process.jpeg", alt: "Roofing team working on a residential roof", category: "Roofing", title: "Roof Installation Process" },
  { key: "small-1", src: "/assets/roof-tarp.jpeg", alt: "Roof project in progress", category: "Remodeling", title: "Project Transformation" },
  { key: "small-2", src: "/assets/roof-detail.jpeg", alt: "Close-up roofing work detail", category: "Carpentry", title: "Behind the Build" },
];

const processSteps = [
  { title: "Tell us about your project", desc: "Call or send the estimate form." },
  { title: "We review the job", desc: "Share the details and scope." },
  { title: "Get your estimate", desc: "Review the proposed work." },
  { title: "Schedule the work", desc: "Choose a project date." },
  { title: "We get to work", desc: "Your project moves forward." },
];

export default function Home() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState<string | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setLightboxSrc(null);
        setVideoTitle(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleEstimateSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Free Estimate Request - KY Fast Construction");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nAddress: ${data.get("address")}\n\nI'm interested in a free estimate from KY Fast Construction.`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <main>
        <section className="hero" id="top">
          <header className="site-header">
            <div className="container header-inner">
              <a className="brand" href="#top" aria-label="KY Fast Construction home">
                KY FAST <small>CONSTRUCTION</small>
              </a>
              <nav aria-label="Primary navigation">
                <a href="#services">Services</a>
                <a href="#work">Our Work</a>
                <a href="#process">Process</a>
                <a href="#local">About</a>
                <a href="#contact">Contact</a>
              </nav>
              <a className="header-call" href={`tel:${PHONE_TEL}`}>
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </header>

          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow">Local Contractor · Monticello, KY</div>
              <h1>
                KY Fast Construction.
                <br />
                Roofing, Remodeling &amp; Carpentry Built to Last.
              </h1>
              <p>
                Reliable construction and home improvement services for homeowners in Monticello and
                surrounding Kentucky communities.
              </p>
              <div className="service-inline">
                <span>Roofing</span>
                <span>Carpentry</span>
                <span>Remodeling</span>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#estimate">
                  Get a Free Estimate
                </a>
                <a className="btn btn-ghost" href={`tel:${PHONE_TEL}`}>
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <aside className="estimate-card" id="estimate" aria-label="Request a free estimate">
              <h2>Request a Free Estimate</h2>
              <p>Tell us about your project and we&apos;ll get in touch.</p>
              <form className="estimate-form" onSubmit={handleEstimateSubmit}>
                <input id="name" name="name" type="text" placeholder="Name" required aria-label="Name" />
                <input id="phone" name="phone" type="tel" placeholder="Phone" required aria-label="Phone" />
                <input id="email" name="email" type="email" placeholder="Email" required aria-label="Email" />
                <input id="address" name="address" type="text" placeholder="Address" required aria-label="Address" />
                <button className="submit" type="submit">
                  REQUEST MY ESTIMATE
                </button>
                <p className="form-note">
                  Or call <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                </p>
              </form>
            </aside>
          </div>
        </section>

        <div className="ops">
          <div className="container ops-inner">
            <div className="ops-item">
              <b>Local Service</b>
              <span>Monticello, Kentucky</span>
            </div>
            <div className="ops-item">
              <b>Services</b>
              <span>Roofing · Carpentry · Remodeling</span>
            </div>
            <div className="ops-item">
              <b>Direct Contact</b>
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
            </div>
          </div>
        </div>

        <section className="services" id="services">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">What We Build</div>
                <h2>Built for the way you live.</h2>
              </div>
              <p>
                From protecting your home with a dependable roof to transforming the spaces inside it, KY
                Fast Construction handles projects with attention to the details that matter.
              </p>
            </div>
            <div className="service-list">
              <div className="service-row">
                <div className="service-num">01</div>
                <div className="service-name">Roofing</div>
                <p className="service-desc">
                  Roof installation, replacement and roofing improvements designed to protect your home.
                </p>
                <div className="service-arrow">↗</div>
              </div>
              <div className="service-row">
                <div className="service-num">02</div>
                <div className="service-name">Remodeling</div>
                <p className="service-desc">
                  Interior and exterior improvements that give your home new functionality and a refreshed
                  look.
                </p>
                <div className="service-arrow">↗</div>
              </div>
              <div className="service-row">
                <div className="service-num">03</div>
                <div className="service-name">Carpentry</div>
                <p className="service-desc">
                  Practical, detailed carpentry work built around the needs of your property.
                </p>
                <div className="service-arrow">↗</div>
              </div>
            </div>
          </div>
        </section>

        <section className="work" id="work">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Project Gallery</div>
                <h2>
                  Real work.
                  <br />
                  Real homes.
                </h2>
              </div>
              <p>
                A closer look at projects completed by KY Fast Construction. Tap any photo to view it
                larger.
              </p>
            </div>
            <div className="gallery" aria-label="KY Fast Construction project gallery">
              {galleryItems.map((item) => (
                <figure key={item.src} onClick={() => setLightboxSrc(item.src)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.alt} />
                  <figcaption>
                    <strong>{item.tag}</strong>
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="watch" id="videos">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Watch the Work</div>
                <h2>See the work in progress.</h2>
              </div>
              <p>
                See how projects come together — from the first day on site to the finished result. These
                modules are ready for your real project videos.
              </p>
            </div>
            <div className="video-layout">
              <article
                className="video-main"
                onClick={() => setVideoTitle(videoItems[0].title)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={videoItems[0].src} alt={videoItems[0].alt} />
                <div className="play">▶</div>
                <div className="video-caption">
                  <small>{videoItems[0].category}</small>
                  <strong>{videoItems[0].title}</strong>
                </div>
              </article>
              <div className="video-stack">
                {videoItems.slice(1).map((item) => (
                  <article
                    key={item.key}
                    className="video-small"
                    onClick={() => setVideoTitle(item.title)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.src} alt={item.alt} />
                    <div className="play">▶</div>
                    <div className="video-caption">
                      <small>{item.category}</small>
                      <strong>{item.title}</strong>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="process" id="process">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Simple Process</div>
                <h2>A straightforward way to get your project started.</h2>
              </div>
              <p>
                Start with a call or estimate request. From there, the project can move through review,
                pricing, scheduling and construction.
              </p>
            </div>
            <div className="timeline">
              {processSteps.map((step, i) => (
                <div className="step" key={step.title}>
                  <div className="dot">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="local" id="local">
          <div className="local-wrap">
            <div className="local-copy">
              <div className="eyebrow">Proudly Serving</div>
              <div className="local-kicker">
                Monticello,
                <br />
                Kentucky
              </div>
              <p className="muted">
                Local construction, roofing, remodeling and carpentry services for homeowners in
                Monticello and surrounding communities.
              </p>
            </div>
            <div
              className="local-photo"
              role="img"
              aria-label="Completed KY Fast Construction residential exterior project"
            />
          </div>
        </section>

        <section className="cta-final" id="contact">
          <div className="container cta-inner">
            <div className="cta-copy">
              <div className="eyebrow">KY Fast Construction</div>
              <h2>
                Have a project in mind?
                <br />
                Let&apos;s take a look at it.
              </h2>
              <p>Call KY Fast Construction or request your free estimate online.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={`tel:${PHONE_TEL}`}>
                  Call {PHONE_DISPLAY}
                </a>
                <a className="btn btn-ghost" href="#estimate">
                  Request a Free Estimate
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">KY FAST CONSTRUCTION</div>
            <p>
              Roofing · Carpentry · Remodeling
              <br />
              Monticello, Kentucky
            </p>
          </div>
          <div>
            <div className="footer-title">Contact</div>
            <div className="footer-links">
              <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>
          <div>
            <div className="footer-title">Quick Links</div>
            <div className="footer-links">
              <a href="#services">Services</a>
              <a href="#work">Our Work</a>
              <a href="#videos">Videos</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <a
        className="whatsapp"
        href="https://wa.me/16062197003?text=Hi%2C%20I%27m%20interested%20in%20getting%20an%20estimate%20from%20KY%20Fast%20Construction."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with KY Fast Construction on WhatsApp"
      >
        W
      </a>
      <a className="sticky-call" href={`tel:${PHONE_TEL}`}>
        <small>Call Now</small>
        <span>{PHONE_DISPLAY}</span>
      </a>

      <div
        className={`lightbox${lightboxSrc ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Project photo"
        onClick={(e) => {
          if (e.target === e.currentTarget) setLightboxSrc(null);
        }}
      >
        <button aria-label="Close" onClick={() => setLightboxSrc(null)}>
          ×
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {lightboxSrc && <img src={lightboxSrc} alt="Expanded project photo" />}
      </div>

      <div
        className={`video-modal${videoTitle ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Project video"
        onClick={(e) => {
          if (e.target === e.currentTarget) setVideoTitle(null);
        }}
      >
        <button aria-label="Close" onClick={() => setVideoTitle(null)}>
          ×
        </button>
        <div className="video-placeholder">
          <div>
            <h3>{videoTitle ?? "Project Video"}</h3>
            <p>Video-ready module. Replace this placeholder with the project&apos;s YouTube, Vimeo or MP4 URL when available.</p>
          </div>
        </div>
      </div>
    </>
  );
}
