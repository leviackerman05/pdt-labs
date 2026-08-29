import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  GithubLogo,
  List,
  Moon,
  Plus,
  Sun,
  X,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { faqs, projects, services, type Project } from "./data";

const easing = [0.22, 1, 0.36, 1] as const;
const contactEmail = "singhpriyansh2000@gmail.com";

function Header({ dark, onTheme }: { dark: boolean; onTheme: () => void }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="PDT Labs home" onClick={closeMenu}>
        <span className="brand-mark">P</span>
        <span>PDT Labs</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
      </nav>

      <div className="header-actions">
        <button className="icon-button" type="button" onClick={onTheme} aria-label={`Use ${dark ? "light" : "dark"} theme`}>
          {dark ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
        </button>
        <a className="button button-small desktop-cta" href="#contact">
          Start a project <ArrowUpRight size={16} weight="bold" />
        </a>
        <button
          className="icon-button menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {[
              ["Work", "#work"],
              ["Services", "#services"],
              ["Process", "#process"],
              ["Pricing", "#pricing"],
              ["FAQ", "#faq"],
              ["Start a project", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label} <ArrowRight size={18} />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroRoute() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="route-board"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.32, duration: 0.8, ease: easing }}
      aria-label="PDT Labs delivery route: scope, build, and ship"
    >
      <div className="route-line" aria-hidden="true">
        <span className="route-progress" />
      </div>

      {[
        { number: "01", label: "Scope", detail: "Clear promise" },
        { number: "02", label: "Build", detail: "Senior execution" },
        { number: "03", label: "Ship", detail: "Real users" },
      ].map((stage, index) => (
        <motion.div
          key={stage.number}
          className={`route-stage stage-${index + 1}`}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55 + index * 0.16, duration: 0.48, ease: easing }}
        >
          <span>{stage.number}</span>
          <strong>{stage.label}</strong>
          <small>{stage.detail}</small>
        </motion.div>
      ))}

      <motion.a
        className="route-window route-nest"
        href="https://nest-expenses.vercel.app/"
        target="_blank"
        rel="noreferrer"
        initial={reduceMotion ? false : { opacity: 0, rotate: -5, y: 20 }}
        animate={{ opacity: 1, rotate: -2.5, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: easing }}
        aria-label="Open Nest"
      >
        <span className="window-bar"><i /><i /><i /><b>Nest</b></span>
        <img src="/projects/nest.webp" alt="Nest expense tracker landing page" width="1440" height="1000" />
      </motion.a>

      <motion.a
        className="route-window route-dictate"
        href="https://dictate-macos.vercel.app/"
        target="_blank"
        rel="noreferrer"
        initial={reduceMotion ? false : { opacity: 0, rotate: 4, y: 20 }}
        animate={{ opacity: 1, rotate: 2.5, y: 0 }}
        transition={{ delay: 0.95, duration: 0.7, ease: easing }}
        aria-label="Open Dictate"
      >
        <span className="window-bar"><i /><i /><i /><b>Dictate</b></span>
        <img src="/projects/dictate.webp" alt="Dictate local-first macOS app landing page" width="1440" height="1000" />
      </motion.a>

      <motion.div
        className="route-ticket"
        initial={reduceMotion ? false : { opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.12, duration: 0.5, ease: easing }}
      >
        <span>Founding offer</span>
        <strong>First 3 projects</strong>
        <small>2 weeks of launch support</small>
      </motion.div>
    </motion.div>
  );
}

function ProjectCase({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className={`project-case project-${index + 1}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.62, ease: easing }}
    >
      <a className="project-image" href={project.liveUrl} target="_blank" rel="noreferrer">
        <img
          src={project.image}
          alt={`${project.name} live product homepage`}
          width="1440"
          height="1000"
          loading="lazy"
          style={{ objectPosition: project.imagePosition }}
        />
        <span>View live <ArrowUpRight size={18} weight="bold" /></span>
      </a>
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <div className="project-heading">
          <h3>{project.name}</h3>
          <span>0{index + 1}</span>
        </div>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.name} capabilities`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">Live product <ArrowUpRight size={15} /></a>
          <a href={project.repoUrl} target="_blank" rel="noreferrer"><GithubLogo size={17} /> Source</a>
        </div>
      </div>
    </motion.article>
  );
}

function ContactForm() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const project = String(data.get("project") ?? "");
    const subject = encodeURIComponent(`PDT Labs project enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject:\n${project}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        <span>Your name</span>
        <input name="name" autoComplete="name" required placeholder="Ada Lovelace" />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required placeholder="ada@company.com" />
      </label>
      <label className="full-field">
        <span>What do you want to ship?</span>
        <textarea name="project" required rows={4} placeholder="A short description, what exists today, and your ideal timing." />
      </label>
      <button className="button button-dark full-field" type="submit">
        Compose project email <ArrowUpRight size={18} weight="bold" />
      </button>
      <p className="form-note full-field">This opens your email app. No information is stored on this website.</p>
    </form>
  );
}

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("pdt-theme");
    return saved ? saved === "dark" : false;
  });
  const [openService, setOpenService] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("pdt-theme", dark ? "dark" : "light");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#121412" : "#f4f5f3");
  }, [dark]);

  return (
    <div id="top" className="site-shell">
      <Header dark={dark} onTheme={() => setDark((value) => !value)} />

      <main>
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <motion.p
                className="eyebrow"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Founder-led product studio · Bengaluru to anywhere
              </motion.p>
              <motion.h1
                id="hero-title"
                initial={reduceMotion ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.72, ease: easing }}
              >
                From rough idea to <em>shipped product.</em>
              </motion.h1>
              <motion.div
                className="hero-support"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: easing }}
              >
                <p>
                  PDT Labs helps founders and growing businesses turn unclear briefs, fragile prototypes, and outdated websites into useful software people can trust.
                </p>
                <div className="hero-actions">
                  <a className="button" href="#contact">Start a project <ArrowUpRight size={18} weight="bold" /></a>
                  <a className="text-link" href="#work">See shipped work <ArrowDown size={17} weight="bold" /></a>
                </div>
              </motion.div>
            </div>
            <HeroRoute />
          </div>
        </section>

        <section className="proof-rail" aria-label="Studio proof points">
          <div><span>06</span><p>years in production software</p></div>
          <div><span>04</span><p>products built and tested with real users</p></div>
          <div><span>01</span><p>senior builder from scope to release</p></div>
          <p className="proof-note">Strategy, product, engineering, infrastructure.</p>
        </section>

        <section id="work" className="work section-pad section-rule" aria-labelledby="work-title">
          <div className="section-intro">
            <p className="eyebrow">Selected work · Real products, real constraints</p>
            <h2 id="work-title">Proof lives in the product.</h2>
            <p>Four independent launches, each with a different user, platform, and growth problem.</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => <ProjectCase key={project.name} project={project} index={index} />)}
          </div>
        </section>

        <section id="services" className="services section-pad section-rule" aria-labelledby="services-title">
          <div className="services-lead">
            <p className="eyebrow">Ways to work together</p>
            <h2 id="services-title">Buy momentum, not a mystery process.</h2>
            <p>Every engagement starts with a written scope, a delivery window, and a clear definition of done.</p>
          </div>
          <div className="service-list">
            {services.map((service, index) => {
              const expanded = openService === index;
              return (
                <article className={`service-row ${expanded ? "is-open" : ""}`} key={service.name}>
                  <button type="button" aria-expanded={expanded} onClick={() => setOpenService(expanded ? null : index)}>
                    <span className="service-number">0{index + 1}</span>
                    <strong>{service.name}</strong>
                    <span>{service.duration}</span>
                    <span>{service.price}</span>
                    <Plus className="service-plus" size={22} weight="bold" aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div
                        className="service-detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: easing }}
                      >
                        <p>{service.summary}</p>
                        <ul>
                          {service.deliverables.map((item) => <li key={item}><Check size={16} weight="bold" /> {item}</li>)}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </section>

        <section id="process" className="process section-rule" aria-labelledby="process-title">
          <div className="process-heading section-pad">
            <p className="eyebrow">The delivery route</p>
            <h2 id="process-title">One direct line from question to release.</h2>
          </div>
          <ol className="process-steps">
            {[
              ["01", "Scope", "We reduce the request to the smallest useful release and make the tradeoffs visible."],
              ["02", "Shape", "The flow, system boundaries, visual direction, and acceptance criteria become concrete."],
              ["03", "Build", "Implementation happens in short reviewable passes, with working software shared early."],
              ["04", "Ship", "The product is tested, documented, released, and handed over with a practical next-step list."],
            ].map(([number, title, copy]) => (
              <motion.li
                key={number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: easing }}
              >
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </motion.li>
            ))}
          </ol>
        </section>

        <section id="pricing" className="pricing section-pad section-rule" aria-labelledby="pricing-title">
          <div className="pricing-top">
            <div>
              <p className="eyebrow">Founding client pricing</p>
              <h2 id="pricing-title">Small enough to start. Serious enough to ship.</h2>
            </div>
            <div className="founding-note">
              <span>First 3 projects</span>
              <p>Founding rates include two weeks of post-launch support for eligible builds.</p>
            </div>
          </div>
          <div className="pricing-table" role="table" aria-label="PDT Labs starting prices">
            {services.map((service) => (
              <div className="pricing-row" role="row" key={service.name}>
                <strong role="cell">{service.name}</strong>
                <span role="cell">{service.duration}</span>
                <span role="cell">{service.price}</span>
                <a role="cell" href="#contact" aria-label={`Discuss the ${service.name} service`}><ArrowRight size={21} weight="bold" /></a>
              </div>
            ))}
          </div>
          <p className="pricing-disclaimer">Starting prices are indicative. Your fixed quote follows a short scope call and written brief.</p>
        </section>

        <section id="faq" className="faq section-pad section-rule" aria-labelledby="faq-title">
          <div className="faq-heading">
            <p className="eyebrow">Useful answers</p>
            <h2 id="faq-title">Before you send the brief.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const expanded = openFaq === index;
              return (
                <article key={faq.question}>
                  <button type="button" aria-expanded={expanded} onClick={() => setOpenFaq(expanded ? null : index)}>
                    <span>0{index + 1}</span><strong>{faq.question}</strong><Plus size={20} weight="bold" />
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24 }}
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </section>

        <section id="contact" className="contact section-pad" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Founding client offer available</p>
            <h2 id="contact-title">What should exist a few weeks from now?</h2>
            <p>Send the rough version. The first reply will help turn it into a useful scope.</p>
            <a href={`mailto:${contactEmail}`}>{contactEmail} <ArrowUpRight size={17} weight="bold" /></a>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">P</span><span>PDT Labs</span></a>
        <p>Independent product engineering by Priyansh Singh.</p>
        <div>
          <a href="https://github.com/leviackerman05" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
          <a href="https://priyansh-singh.vercel.app/" target="_blank" rel="noreferrer">Engineer profile <ArrowUpRight size={14} /></a>
          <a href="#top">Back to top <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
