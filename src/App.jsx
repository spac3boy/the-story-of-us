import React, { useCallback, useEffect, useRef, useState } from "react";
import DATA from "./data.js";

// Lightweight privacy only. Change this value before sharing the site.
export const ANNIVERSARY_PASSWORD = "allyouneedislove";
const RESET_TO_PASSWORD_ON_REFRESH = true;
const SONG_SRC = "/assets/audio/contigo-karla.mp3";
const SONG_TITLE = "Contigo, Karla";

/* accent -> palette mapping (CSS custom props per chapter) */
const ACCENTS = {
  rose:     { a: "var(--rose)",     deep: "var(--rose-deep)", tint: "var(--blush-tint)",    pa: "#f3e6dd", pb: "#f4dde2" },
  burgundy: { a: "var(--rose-deep)",deep: "var(--rose-deep)", tint: "var(--blush-tint)",    pa: "#efdcdf", pb: "#ead0d5" },
  lavender: { a: "var(--lavender)", deep: "#5f5398",          tint: "var(--lavender-tint)", pa: "#ece7f5", pb: "#e3dcf1" },
  amber:    { a: "var(--amber)",    deep: "#a96d28",          tint: "var(--amber-tint)",    pa: "#f6ecda", pb: "#f2e3cb" },
  sage:     { a: "var(--sage)",     deep: "#4f6b54",          tint: "#e4eee6",              pa: "#e8efe9", pb: "#dfeae1" },
};
const accentVars = (key) => {
  const c = ACCENTS[key] || ACCENTS.rose;
  return {
    "--accent": c.a, "--accent-deep": c.deep, "--accent-tint": c.tint,
    "--ph-a": c.pa, "--ph-b": c.pb, "--chip-accent": c.a,
  };
};

/* ---------- scroll reveal hook (rect-based, IO-free for reliability) ---------- */
function useReveal(active) {
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const reveal = () => {
      const h = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < h * 0.92 && r.bottom > -40) el.classList.add("in");
      });
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(reveal); };
    reveal();
    raf = requestAnimationFrame(reveal);
    const t1 = setTimeout(reveal, 250);
    const t2 = setTimeout(reveal, 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [active]);
}

const ANNIVERSARY_MONTH = 5; // June, zero-indexed for JavaScript dates.
const ANNIVERSARY_DAY = 1;
const FIRST_COUNTDOWN_YEAR = 2027;
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MS_PER_HOUR = 60 * 60 * 1000;
const MS_PER_MINUTE = 60 * 1000;
const MS_PER_SECOND = 1000;

function getNextAnniversary(now = new Date()) {
  let year = Math.max(now.getFullYear(), FIRST_COUNTDOWN_YEAR);
  let target = new Date(year, ANNIVERSARY_MONTH, ANNIVERSARY_DAY, 0, 0, 0, 0);
  if (now >= target) target = new Date(year + 1, ANNIVERSARY_MONTH, ANNIVERSARY_DAY, 0, 0, 0, 0);
  return target;
}

function getCountdown(now = new Date()) {
  const target = getNextAnniversary(now);
  const remaining = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(remaining / MS_PER_DAY);
  const hours = Math.floor((remaining % MS_PER_DAY) / MS_PER_HOUR);
  const minutes = Math.floor((remaining % MS_PER_HOUR) / MS_PER_MINUTE);
  const seconds = Math.floor((remaining % MS_PER_MINUTE) / MS_PER_SECOND);

  return { target, days, hours, minutes, seconds };
}

function AnniversaryCountdown() {
  const [countdown, setCountdown] = useState(() => getCountdown());

  useEffect(() => {
    const update = () => setCountdown(getCountdown());
    update();
    const timer = setInterval(update, MS_PER_SECOND);
    return () => clearInterval(timer);
  }, []);

  const targetYear = countdown.target.getFullYear();

  return (
    <div className="countdown reveal" aria-label={`Countdown to June 1, ${targetYear}`}>
      <p className="countdown-kicker">Next anniversary</p>
      <h3 className="countdown-title">June 1, {targetYear}</h3>
      <div className="countdown-grid">
        <div className="countdown-unit">
          <strong>{countdown.days}</strong>
          <span>days</span>
        </div>
        <div className="countdown-unit">
          <strong>{countdown.hours}</strong>
          <span>hours</span>
        </div>
        <div className="countdown-unit">
          <strong>{countdown.minutes}</strong>
          <span>minutes</span>
        </div>
        <div className="countdown-unit">
          <strong>{countdown.seconds}</strong>
          <span>seconds</span>
        </div>
      </div>
      <p className="countdown-note">The countdown resets every June 1.</p>
    </div>
  );
}

/* ---------- photo placeholder ---------- */
function Photo({ photo = {}, priority = false, onOpen }) {
  const label = photo.label || "Anniversary photo";

  if (photo.src) {
    return (
      <button
        className="ph photo-thumb"
        type="button"
        style={{
          "--photo-src": `url(${photo.src})`,
          "--photo-fit": photo.thumbFit || "cover",
          "--photo-position": photo.thumbPosition || "center",
        }}
        onClick={() => onOpen?.(photo)}
        aria-label={`Open full image: ${label}`}
      >
        <img
          src={photo.src}
          alt={label}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </button>
    );
  }

  return (
    <div className="ph">
      <span className="ph-label">
        <span className="frame" aria-hidden="true"></span>
        {label}
      </span>
    </div>
  );
}

function PhotoLightbox({ photo, onClose }) {
  useEffect(() => {
    if (!photo) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [photo, onClose]);

  if (!photo?.src) return null;

  const label = photo.label || "Anniversary photo";

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close" type="button" onClick={onClose} aria-label="Close full image">
          Close
        </button>
        <img className="lightbox-image" src={photo.src} alt={label} />
        <p className="lightbox-caption">{label}</p>
      </div>
    </div>
  );
}

function MusicPlayer({ active, playSignal }) {
  const audioRef = useRef(null);
  const [collapsed, setCollapsed] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [message, setMessage] = useState("Ready when you are.");

  const playSong = useCallback(async (restart = false) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (restart) audio.currentTime = 0;

    try {
      await audio.play();
      setIsPlaying(true);
      setMessage("Playing now.");
    } catch {
      setIsPlaying(false);
      setMessage("Tap play to start the song.");
      setCollapsed(false);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onPlay = () => {
      setIsPlaying(true);
      setMessage("Playing now.");
    };
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) audio.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    if (!active || playSignal === 0) return;
    playSong();
  }, [active, playSignal, playSong]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      playSong();
    } else {
      audio.pause();
      setMessage("Paused.");
    }
  };

  return (
    <aside className={"music-player" + (collapsed ? " is-collapsed" : "")} aria-label="Anniversary song player">
      <audio ref={audioRef} src={SONG_SRC} loop preload="auto" />
      <button
        className="music-toggle"
        type="button"
        onClick={() => setCollapsed((value) => !value)}
        aria-expanded={!collapsed}
      >
        <span className="music-pulse" aria-hidden="true"></span>
        <span>{collapsed ? "Song" : "Hide"}</span>
      </button>
      <div className="music-body">
        <div className="music-copy">
          <p className="music-kicker">Now playing</p>
          <h2>{SONG_TITLE}</h2>
          <span>{message}</span>
        </div>
        <div className="music-controls">
          <button type="button" onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
          <button type="button" onClick={() => playSong(true)}>Restart</button>
          <button type="button" onClick={() => setIsMuted((value) => !value)}>{isMuted ? "Unmute" : "Mute"}</button>
        </div>
      </div>
    </aside>
  );
}

/* ---------- password gate ---------- */
function Gate({ onUnlock }) {
  const [val, setVal] = useState("");
  const [error, setError] = useState("");
  const [leaving, setLeaving] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => { const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 700); return () => clearTimeout(t); }, []);

  const submit = (e) => {
    e.preventDefault();
    if (val.trim().toLocaleLowerCase() !== ANNIVERSARY_PASSWORD.toLocaleLowerCase()) {
      setError("Almost. Try the magic words again.");
      inputRef.current?.focus();
      return;
    }

    setLeaving(true);
    setTimeout(onUnlock, 850);
  };

  return (
    <div className={"gate" + (leaving ? " is-leaving" : "")}>
      <div className="gate-card">
        <div className="gate-seal" aria-hidden="true">♥</div>
        <p className="gate-kicker">Not so fast.</p>
        <h1 className="gate-title">Enter the magic words.</h1>
        <p className="gate-sub">Thirteen years, a thousand little moments, and one story that belongs to us.</p>
        <p className="gate-prompt">A little love unlocks the story.</p>
        <form className="gate-field" onSubmit={submit}>
          <input
            ref={inputRef}
            className="gate-input"
            type="password"
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
              if (error) setError("");
            }}
            placeholder="the magic words…"
            aria-label="magic words"
            aria-invalid={Boolean(error)}
            aria-describedby={error ? "gate-error" : undefined}
          />
          <button className="gate-btn" type="submit">Come in →</button>
        </form>
        {error && <p className="gate-error" id="gate-error">{error}</p>}
        <p className="gate-hint">Hint: <b>{DATA.couple.magicWordHint}</b></p>
      </div>
    </div>
  );
}

/* ---------- surprise reveal ---------- */
function Unveil({ onFinish, onAdvance }) {
  const pages = [
    {
      kicker: "Karla,",
      title: "I made this for you.",
      copy:
        "Not because thirteen years can fit on a website, but because I wanted to give you a place to feel how much of our life we have already made together.",
      button: "Keep going",
    },
    {
      kicker: "Before you scroll,",
      title: "this is our story as I see it.",
      copy:
        "The places, the tiny ordinary days, the girls, the moves, the chaos, the laughter, the parts we survived, and all the parts I would choose again.",
      button: "One more",
    },
    {
      kicker: "Happy anniversary, love.",
      title: "Thirteen years of us.",
      copy:
        "When you are ready, come open the timeline. And when we get to the last chapter, let’s add today together.",
      button: "Open the timeline",
    },
  ];
  const [index, setIndex] = useState(0);
  const page = pages[index];
  const isLast = index === pages.length - 1;

  const advance = () => {
    onAdvance?.();
    if (isLast) {
      onFinish();
      return;
    }
    setIndex((current) => current + 1);
  };

  return (
    <section className="unveil" aria-live="polite">
      <div className="unveil-card">
        <div className="unveil-mark" aria-hidden="true">♥</div>
        <p className="unveil-kicker">{page.kicker}</p>
        <h1 className="unveil-title">{page.title}</h1>
        <p className="unveil-copy">{page.copy}</p>
        <div className="unveil-actions">
          <div className="unveil-dots" aria-label={`Message ${index + 1} of ${pages.length}`}>
            {pages.map((_, i) => (
              <span key={i} className={i === index ? "active" : ""}></span>
            ))}
          </div>
          <button className="unveil-btn" type="button" onClick={advance}>
            {page.button} →
          </button>
        </div>
        <p className="unveil-sign">from Michael</p>
      </div>
    </section>
  );
}

/* ---------- hero ---------- */
function Hero({ onPhotoOpen }) {
  const h = DATA.hero, a = DATA.anniversary;
  return (
    <header className="hero">
      <div className="wrap">
        <span className="hero-kicker reveal">♥ &nbsp;{a.label}</span>
        <h1 className="hero-title reveal">
          {h.title[0]} <em>{h.title[1]}</em> {h.title[2]}
        </h1>
        <p className="hero-sub reveal">{h.subtitle}</p>
        <div className="hero-date reveal">
          <span>{a.start}</span>
          <span className="arrow">→</span>
          <span>{a.end}</span>
        </div>

        <figure className="hero-figure reveal" style={{ margin: 0 }}>
          <div className="hero-photo">
            <Photo photo={h.photo} priority onOpen={onPhotoOpen} />
            <figcaption className="hero-caption">{h.caption}</figcaption>
          </div>
        </figure>

        <div className="hero-stats reveal">
          {h.stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ---------- sticky nav with scrollspy ---------- */
function Navbar({ chapters, active, onJump }) {
  const railRef = useRef(null);

  /* keep the active chip in view within the rail */
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const el = rail.querySelector(`[data-chip="${active}"]`);
    if (el) {
      const left = el.offsetLeft - rail.offsetWidth / 2 + el.offsetWidth / 2;
      rail.scrollTo({ left, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">the story of <span>us</span></div>
        <div className="chips" ref={railRef}>
          {chapters.map((c) => (
            <button
              key={c.id}
              data-chip={c.id}
              className={"chip" + (active === c.id ? " active" : "")}
              style={accentVars(c.accent)}
              onClick={() => onJump(c.id)}
            >
              <span className="dot"></span>
              {c.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ---------- one memory card ---------- */
function Memory({ m, onPhotoOpen }) {
  const n = m.photos.length;
  const cols = n >= 3 ? "cols-3" : n === 2 ? "cols-2" : "cols-1";
  return (
    <article className="memory reveal">
      <div className={"memory-photos " + cols}>
        {m.photos.map((p, i) => <Photo key={i} photo={p} onOpen={onPhotoOpen} />)}
      </div>
      <div className="memory-text">
        <span className="memory-kicker"><span className="dot"></span>{m.kicker}</span>
        <h3 className="memory-title">{m.title}</h3>
        <p className="memory-caption">{m.caption}</p>
        <div className="memory-meta">
          <span><span className="ic">◷</span>{m.date}</span>
          <span><span className="ic">⚲</span>{m.location}</span>
        </div>
      </div>
    </article>
  );
}

/* ---------- chapter section ---------- */
function Chapter({ c, refCb, onPhotoOpen }) {
  return (
    <section className="chapter" id={c.id} ref={refCb} style={accentVars(c.accent)} data-screen-label={"Chapter " + c.num}>
      <div className="chapter-intro">
        <div className="chapter-num reveal">
          <small>Chapter</small>
          {c.num}
        </div>
        <h2 className="chapter-title reveal">{c.title}</h2>
        <span className="chapter-years reveal">{c.years}</span>
        <p className="chapter-summary reveal">{c.summary}</p>

        <div className="guide reveal">
          <div className="guide-row">
            <span className="pill">{c.photoCount}</span>
            <span>to add here</span>
          </div>
          <div className="guide-label">Photos that belong here</div>
          <div className="tags">
            {c.tags.map((t, i) => <span className="tag" key={i}>{t}</span>)}
          </div>
        </div>
      </div>

      <div className="chapter-body">
        {c.memories.map((m, i) => <Memory key={i} m={m} onPhotoOpen={onPhotoOpen} />)}
      </div>
    </section>
  );
}

/* ---------- closing ---------- */
function Closing() {
  const c = DATA.closing;
  return (
    <section className="closing">
      <p className="closing-kicker reveal">{c.kicker}</p>
      <h2 className="closing-title reveal">
        {c.title[0]} <em>{c.title[1]}</em>
      </h2>
      <p className="closing-copy reveal">{c.copy}</p>
      <AnniversaryCountdown />
      <div className="closing-sign reveal">
        <span className="heart">♥</span>
        <span>{c.signoff.from}</span>
        <b>{c.signoff.names}</b>
      </div>
    </section>
  );
}

/* ---------- app ---------- */
function App() {
  const [unlocked, setUnlocked] = useState(() => !RESET_TO_PASSWORD_ON_REFRESH && sessionStorage.getItem("mk13_unlocked") === "1");
  const [introDone, setIntroDone] = useState(() => !RESET_TO_PASSWORD_ON_REFRESH && sessionStorage.getItem("mk13_intro_seen") === "1");
  const [active, setActive] = useState(DATA.chapters[0].id);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [musicPlaySignal, setMusicPlaySignal] = useState(0);
  const secRefs = useRef({});

  useReveal(unlocked && introDone);

  const refCb = useCallback((id) => (el) => { if (el) secRefs.current[id] = el; }, []);

  /* scrollspy (rect-based) — pick the section crossing 40% of viewport */
  useEffect(() => {
    if (!unlocked || !introDone) return;
    const onScroll = () => {
      const line = window.innerHeight * 0.4;
      let best = null, bestDist = Infinity;
      Object.entries(secRefs.current).forEach(([id, el]) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= line && r.bottom >= line) { best = id; bestDist = -1; return; }
        if (bestDist !== -1) {
          const d = Math.abs(r.top - line);
          if (d < bestDist) { bestDist = d; best = id; }
        }
      });
      if (best) setActive(best);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [unlocked, introDone]);

  const jump = (id) => {
    const el = secRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const unlock = () => {
    sessionStorage.setItem("mk13_unlocked", "1");
    sessionStorage.removeItem("mk13_intro_seen");
    setUnlocked(true);
    setIntroDone(false);
    setMusicPlaySignal((value) => value + 1);
  };

  const finishIntro = () => {
    sessionStorage.setItem("mk13_intro_seen", "1");
    setIntroDone(true);
    setMusicPlaySignal((value) => value + 1);
  };

  return (
    <>
      {!unlocked && <Gate onUnlock={unlock} />}
      {unlocked && <MusicPlayer active={unlocked} playSignal={musicPlaySignal} />}
      {unlocked && !introDone && <Unveil onFinish={finishIntro} onAdvance={() => setMusicPlaySignal((value) => value + 1)} />}
      {unlocked && introDone && (
        <div className="site">
          <Hero onPhotoOpen={setSelectedPhoto} />
          <Navbar chapters={DATA.chapters} active={active} onJump={jump} />
          <main className="chapters">
            <div className="wrap">
              <p className="section-eyebrow reveal">The timeline</p>
              <h2 className="section-head reveal">Eight chapters, one story</h2>
              <p className="section-deck reveal">
                Organized by the seasons that changed us — not just the years that passed.
              </p>
              {DATA.chapters.map((c) => (
                <Chapter key={c.id} c={c} refCb={refCb(c.id)} onPhotoOpen={setSelectedPhoto} />
              ))}
            </div>
          </main>
          <Closing />
          <footer className="footer">
            A living keepsake for {DATA.couple.names[0]} &amp; {DATA.couple.names[1]} · {DATA.anniversary.start} → {DATA.anniversary.end}
          </footer>
          <PhotoLightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
        </div>
      )}
    </>
  );
}

export default App;
