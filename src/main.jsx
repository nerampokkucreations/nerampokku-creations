import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  Menu,
  X,
  Play,
  Mail,
  Music2,
  Mic2,
  PenLine,
  Disc3,
  Piano,
  Headphones,
} from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import "./styles.css";

/* =========================================================
   GOOGLE APPS SCRIPT
========================================================= */

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz0c3-741kDNV46VajbM7YKon7cywAlrAZhpDL-g_EWeFbUkHQDNQbgA6ZNie6CeC3IiA/exec";

/* =========================================================
   MUSIC + WRITING IMAGE COLLECTION
========================================================= */

const images = {
  hero:
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=2200&q=90",

  music:
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=90",

  poetry:
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=90",

  studio:
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=90",

  vinyl:
    "https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=1200&q=90",

  headphones:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=90",

  notebook:
    "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=90",

  piano:
    "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=90",

  microphone:
    "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=90",

  studioTwo:
    "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=90",
};

/* =========================================================
   SELECTED CREATIONS
========================================================= */

const creations = [
  {
    type: "MUSIC",
    title: "Melodies & Memories",
    text:
      "An original Malayalam song shaped from melody, memory and emotion.",
    image: images.music,
  },
  {
    type: "LYRICS",
    title: "Words That Stay",
    text:
      "Lyrics and feelings written to find their own melody.",
    image: images.notebook,
  },
  {
    type: "POETRY",
    title: "Small Lines, Deep Feelings",
    text:
      "Poems born from quiet moments, memories and imagination.",
    image: images.poetry,
  },
  {
    type: "SOUND",
    title: "A World In Sound",
    text:
      "Sound, atmosphere and cinematic experiments.",
    image: images.studio,
  },
];

/* =========================================================
   NAVIGATION
========================================================= */

const nav = [
  "Home",
  "Creations",
  "Music",
  "Poetry",
  "Stories",
  "Journal",
  "About",
];

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);

    const target = document.getElementById(
      id.toLowerCase()
    );

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="nav">

      <button
        className="logo"
        onClick={() => go("home")}
      >
        NERAMPOKKU <span>CREATIONS</span>
      </button>

      <nav>
        {nav.map((item) => (
          <button
            key={item}
            onClick={() => go(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <button
        className="nav-cta"
        onClick={() => go("collaboration")}
      >
        LET'S CREATE
        <ArrowUpRight size={15} />
      </button>

      <button
        className="menu"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>

      {open && (
        <div className="mobile-menu">

          <button
            className="close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>

          {nav.map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
            >
              {item}
            </button>
          ))}

        </div>
      )}

    </header>
  );
}

/* =========================================================
   MUSIC
========================================================= */

function Music() {

  const songs = [
    {
      number: "01",
      title: "കിങ്ങിണിപ്പൂച്ച",
      description:
        "A new Malayalam musical creation from Nerampokku Creations.",
      image:
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=90",
      youtube: null,
      status: "COMING SOON",
    },

    {
      number: "02",
      title: "തിത്തകതോം തക തിന്തിമി തോം",
      description:
        "An original Malayalam song celebrating the colours, memories and spirit of Onam.",
      image:
        "https://img.youtube.com/vi/9vqwAwTqHk0/maxresdefault.jpg",
      youtube:
        "https://youtu.be/9vqwAwTqHk0?si=qDKnJ2g2Ev5-xwPH",
      status: "WATCH ON YOUTUBE",
    },

    {
      number: "03",
      title: "ഓണമലരുകൾ",
      description:
        "A nostalgic journey through the warmth, memories and timeless beauty of Onam.",
      image:
        "https://img.youtube.com/vi/ETE13rh0_I4/hqdefault.jpg",
      youtube:
        "https://youtu.be/ETE13rh0_I4?si=qjHHu5wmgC6rloHu",
      status: "WATCH ON YOUTUBE",
    },

    {
      number: "04",
      title: "മുല്ലയാറ്റിനോരത്തെ മഞ്ഞമ്മ",
      description:
        "A heartfelt Christian devotional song dedicated to Manjumatha Basilica, Pallippuram.",
      image:
        "https://img.youtube.com/vi/Rz57WbxzDdo/hqdefault.jpg",
      youtube:
        "https://youtu.be/Rz57WbxzDdo?si=Sl3BJgI_X5gaVTCn",
      status: "WATCH ON YOUTUBE",
    },
  ];

  return (
    <section
      id="music"
      className="section music"
    >

      <div className="music-section-header">

        <div className="eyebrow">
          MUSIC / YOUTUBE
        </div>

        <div className="music-header-row">

          <h2>
            Published
            <i> Songs.</i>
          </h2>

          <p>
            Original songs, melodies and musical
            stories published by Nerampokku Creations.
          </p>

        </div>

      </div>

      <div className="song-list">

        {songs.map((song) => (

          <article
            className="song-card"
            key={song.number}
          >

            <div className="song-number">
              {song.number}
            </div>

            <div className="song-artwork">

              <img
                src={song.image}
                alt={song.title}
              />

              <div className="song-artwork-overlay" />

              {song.youtube ? (
                <a
                  href={song.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="song-play"
                  aria-label={`Watch ${song.title} on YouTube`}
                >
                  <Play
                    size={17}
                    fill="currentColor"
                  />
                </a>
              ) : (
                <div
                  className="song-play coming-soon-play"
                  aria-label="Coming soon"
                >
                  <Music2 size={17} />
                </div>
              )}

            </div>

            <div className="song-info">

              <span className="song-type">
                {song.status === "COMING SOON"
                  ? "UPCOMING MALAYALAM SONG"
                  : "ORIGINAL MALAYALAM SONG"}
              </span>

              <h3>
                {song.title}
              </h3>

              <p>
                {song.description}
              </p>

            </div>

            {song.youtube ? (

              <a
                href={song.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="song-youtube"
              >
                <FaYoutube size={17} />

                <span>
                  WATCH ON YOUTUBE
                </span>

                <ArrowUpRight size={16} />
              </a>

            ) : (

              <div className="song-youtube coming-soon-link">
                <Music2 size={17} />

                <span>
                  COMING SOON
                </span>
              </div>

            )}

          </article>

        ))}

      </div>

      <div className="music-bottom">

        <span>
          NERAMPOKKU CREATIONS
        </span>

        <div className="music-bottom-line" />

        <span>
          ORIGINAL MUSIC &amp; SONGWRITING
        </span>

      </div>

    </section>
  );
}

/* =========================================================
   LATEST CREATION
========================================================= */

const latestCreation = {
  type: "MUSIC",
  label: "COMING SOON • NEW SONG",
  title: "കിങ്ങിണിപ്പൂച്ച",
  subtitle: "UPCOMING MALAYALAM SONG",
  message:
    "A new melody is on its way. കിങ്ങിണിപ്പൂച്ച is coming soon from Nerampokku Creations — a new song shaped by words, music and emotion.",
  artwork: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1200&q=90",
  buttonText: "COMING SOON",
  link: null,
};

/* =========================================================
   RELEASE NOTIFICATION
========================================================= */

function ReleaseNotification({ onClose }) {

  const creation = latestCreation;

  const handleAction = () => {

    if (creation.link) {
      window.open(
        creation.link,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <aside
      className="release-floating"
      aria-label="Latest creation"
    >

      <div className="release-floating-top">

        <div className="release-floating-status">

          <span className="release-live-dot" />

          <span>
            {creation.label}
          </span>

        </div>

        <button
          className="release-floating-close"
          onClick={onClose}
          aria-label="Close new creation notification"
        >
          <X
            size={15}
            strokeWidth={1.8}
          />
        </button>

      </div>

      <div className="release-floating-content">

        <div className="release-floating-artwork">

          <img
            src={creation.artwork}
            alt={creation.title}
          />

          <div className="release-floating-artwork-overlay" />

          <div className="release-floating-play">
            <Play
              size={13}
              fill="currentColor"
              strokeWidth={1.5}
            />
          </div>

        </div>

        <div className="release-floating-info">

          <span className="release-floating-brand">
            NERAMPOKKU CREATIONS
          </span>

          <h3>
            {creation.title}
          </h3>

          <p className="release-floating-subtitle">
            {creation.subtitle}
          </p>

          <p className="release-floating-message">
            {creation.message}
          </p>

        </div>

      </div>

      {creation.link ? (
        <button
          className="release-floating-action"
          onClick={handleAction}
        >
          <span>{creation.buttonText}</span>

          <ArrowUpRight
            size={15}
            strokeWidth={1.8}
          />
        </button>
      ) : (
        <div className="release-floating-action coming-soon-action">
          <span>{creation.buttonText}</span>

          <Music2
            size={15}
            strokeWidth={1.7}
          />
        </div>
      )}


      <div className="release-floating-footer">

        <span>DISCOVER</span>
        <i />
        <span>FEEL</span>
        <i />
        <span>CREATE</span>

      </div>

    </aside>
  );
}

/* =========================================================
   FEEDBACK BUTTON + MODAL
========================================================= */

function Feedback({ onClose }) {

  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const submitFeedback = async (event) => {

    event.preventDefault();

    if (!rating) {
      setStatus("rating");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {

      const response = await fetch(
        WEB_APP_URL,
        {
          method: "POST",
          body: JSON.stringify({
            type: "feedback",
            email,
            rating,
            message,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }

    } catch (error) {

      console.error(
        "Feedback error:",
        error
      );

      setStatus("error");

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="feedback-modal-backdrop"
      onClick={onClose}
    >

      <div
        className="feedback-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <button
          className="feedback-modal-close"
          onClick={onClose}
          aria-label="Close feedback"
        >
          <X size={18} />
        </button>

        {status === "success" ? (

          <div className="feedback-success">

            <div className="feedback-success-icon">
              ✓
            </div>

            <span className="feedback-success-label">
              FEEDBACK RECEIVED
            </span>

            <h3>
              Thank you for
              <br />
              <i>sharing your thought.</i>
            </h3>

            <p>
              Every thought matters.<br /> Your words help inspire what comes next.
            </p>

            <button
              className="feedback-success-button"
              onClick={onClose}
            >
              CLOSE
              <ArrowUpRight size={15} />
            </button>

          </div>

        ) : (

          <form
            className="feedback-form"
            onSubmit={submitFeedback}
          >
            <div className="feedback-form-header">
              <div className="feedback-eyebrow">
                A NOTE FROM YOU
              </div>

              <h2>
                How did this
                <br />
                <i>space feel?</i>
              </h2>

              <p className="feedback-intro">
                A song, a line, a memory — if something
                stayed with you, leave a little note.
              </p>

            </div>

            <div className="feedback-section">
              <div className="feedback-rating-top">
                <span className="feedback-rating-label">
                  YOUR EXPERIENCE
                </span>

                <span className="feedback-rating-value">
                  {rating ? ` ${rating} / 5` : " SELECT A RATING"}
                </span>
              </div>

              <div className="feedback-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={
                      star <= rating
                        ? "feedback-star active"
                        : "feedback-star"
                    }
                    onClick={() => {
                      setRating(star);
                      setStatus("");
                    }}
                    aria-label={`Rate ${star} out of 5`}
                    aria-pressed={star === rating}
                  >
                    <span>★</span>
                  </button>
                ))}
              </div>

            </div>

            <div className="feedback-field">
                <label htmlFor="feedback-email">
                  YOUR EMAIL <span>(optional)</span>
                </label>

                <input
                  id="feedback-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                />
              </div>

            <div className="feedback-section">
              <div className="feedback-field-header">
                <label htmlFor="feedback-message">
                  YOUR NOTE
                </label>


                <span className="feedback-counter">
                  {" "+message.length}/500
                </span>
              </div>

              <textarea
                id="feedback-message"
                name="feedbackMessage"
                className="feedback-textarea"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  setStatus("");
                }}
                placeholder="Tell me what stayed with you..."
                rows={5}
                maxLength={500}
              />


            </div>

            {status === "rating" && (<div className="feedback-form-error">
              Please select a rating before sending. </div>
            )}

            {status === "error" && (<div className="feedback-form-error">
              Something went wrong. Please try again. </div>
            )}

            <div className="feedback-submit-area">
              <p>
                Your feedback helps shape what comes next.
              </p>

              <button
                type="submit"
                className="feedback-submit"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting
                    ? "SENDING..."
                    : "SEND FEEDBACK"}
                </span>

                {!isSubmitting && (
                  <ArrowUpRight size={15} />
                )}

                {isSubmitting && (
                  <span className="feedback-loader" />
                )}
              </button>

            </div>
          </form>


        )}

      </div>

    </div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {

  const [showRelease, setShowRelease] =
    useState(true);

  const [showFeedback, setShowFeedback] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [formStatus, setFormStatus] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  /* =======================================================
     CONTACT FORM
  ======================================================= */

  const handleContactSubmit = async (
    event
  ) => {

    event.preventDefault();

    setIsSubmitting(true);
    setFormStatus("");

    try {

      const response = await fetch(
        WEB_APP_URL,
        {
          method: "POST",
          body: JSON.stringify({
            type: "contact",
            ...formData,
          }),
        }
      );

      const result =
        await response.json();

      if (result.success) {

        setFormStatus("success");

        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });

      } else {

        setFormStatus("error");

      }

    } catch (error) {

      console.error(
        "Contact form error:",
        error
      );

      setFormStatus("error");

    } finally {

      setIsSubmitting(false);

    }
  };

  return (
    <>
      {/* ===================================================
          RELEASE NOTIFICATION
      =================================================== */}

      {showRelease && (
        <ReleaseNotification
          onClose={() =>
            setShowRelease(false)
          }
        />
      )}

      {/* ===================================================
          FEEDBACK BUTTON
      =================================================== */}

      <button
        className="feedback-floating-button"
        onClick={() =>
          setShowFeedback(true)
        }
        aria-label="Share feedback"
      >
        <span>
          SHARE A THOUGHT
        </span>

        <ArrowUpRight size={15} />
      </button>

      {showFeedback && (
        <Feedback
          onClose={() =>
            setShowFeedback(false)
          }
        />
      )}

      <Navbar />

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section
          id="home"
          className="hero"
        >

          <div
            className="hero-bg"
            style={{
              backgroundImage:
                `url(${images.hero})`,
            }}
          />

          <div className="hero-overlay" />

          <div className="hero-content">

            <div className="eyebrow">
              INDEPENDENT MUSIC & WRITING STUDIO
            </div>

            <h1>
              NERAMPOKKU
              <em> CREATIONS</em>
            </h1>

            <p className="hero-title">
              Where thoughts become lyrics,
              <br />
              feelings become melodies,
              <br />
              and moments become songs.
            </p>

            <p className="hero-sub">
              Original songs. Lyrics. Poetry. Stories.
              <br />
              A creative world built around moments
              worth hearing.
            </p>

            <div className="actions">

              <button
                className="primary"
                onClick={() =>
                  document
                    .getElementById(
                      "creations"
                    )
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                ENTER THE STUDIO
                <ArrowDown size={16} />
              </button>

              <button
                className="ghost"
                onClick={() =>
                  document
                    .getElementById(
                      "music"
                    )
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                LISTEN NOW
                <Play size={15} />
              </button>

            </div>

          </div>

          <div className="scroll">
            SCROLL TO DISCOVER
            <ArrowDown size={14} />
          </div>

        </section>

        {/* =================================================
            INTRO
        ================================================= */}


        <section
          id="about"
          className="section intro"
        >
          <div className="eyebrow">
            THE IDEA
          </div>

          <div className="intro-grid">

            <div className="intro-heading">
              <h2>
                Where thoughts
                <br />
                find a <i>voice.</i>
              </h2>

              <p className="intro-tagline">
                Where thoughts find a voice, feelings find a
                form, and imagination comes alive.
              </p>
            </div>

            <div className="intro-copy">

              <p>
                Welcome to <strong>Nerampokku Creations</strong> —
                a creative space for songs, stories, poems,
                quotes, memories, emotions, and ideas.
              </p>

              <p>
                Every creation begins with a thought, feeling,
                memory, or spark of imagination — brought to life
                through words, music, stories, and creativity.
              </p>

              <div className="line" />

              <div className="creative-list">
                <span>🎵 Original Songs & Melodies</span>
                <span>📖 Stories & Storytelling</span>
                <span>🖋️ Poems & Poetry</span>
                <span>💭 Quotes & Thoughts</span>
                <span>✨ Creative & Inspiring Content</span>
              </div>

              <p className="intro-emotion">
                Some make you smile. Some touch your heart.
                Some bring back memories. And some leave you
                with a thought worth keeping.
              </p>

            </div>

          </div>

          <div className="intro-footer">

            <div>
              <span className="intro-discover">
                DISCOVER. FEEL. IMAGINE. CREATE.
              </span>

              <p>
                Something new is always waiting for you.
              </p>
            </div>

            <div className="intro-brand">
              <strong>NERAMPOKKU CREATIONS</strong>
              <span>Where Thoughts Become Feelings.</span>
            </div>

          </div>
        </section>


        {/* =================================================
            CREATIVE WORLD
        ================================================= */}

        <section
          id="creations"
          className="section universe"
        >

          <div className="eyebrow">
            ENTER THE CREATIVE WORLD
          </div>

          <div className="section-head">

            <h2>
              Where words
              <i> find sound.</i>
            </h2>

            <p>
              A space for songs, lyrics, poetry,
              songwriting and everything that happens
              between a thought and a melody.
            </p>

          </div>

          <div className="universe-grid">

            {[
              {
                name: "MUSIC",
                description:
                  "Melodies that carry emotions.",
                image: images.music,
                icon: Music2,
              },
              {
                name: "LYRICS",
                description:
                  "Words written to be heard.",
                image: images.notebook,
                icon: PenLine,
              },
              {
                name: "POETRY",
                description:
                  "Feelings shaped into poetry.",
                image: images.poetry,
                icon: PenLine,
              },
              {
                name: "SONGWRITING",
                description:
                  "Where a line becomes a song.",
                image: images.piano,
                icon: Piano,
              },
              {
                name: "JOURNAL",
                description:
                  "Notes, memories and unfinished ideas.",
                image: images.vinyl,
                icon: Disc3,
              },
              {
                name: "SOUND",
                description:
                  "Textures, rhythms and atmosphere.",
                image: images.headphones,
                icon: Headphones,
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <article
                  className={`world w${index + 1}`}
                  key={item.name}
                >

                  <div
                    className="world-img"
                    style={{
                      backgroundImage:
                        `url(${item.image})`,
                    }}
                  />

                  <div className="world-overlay" />

                  <div className="world-content">

                    <div className="world-top">

                      <span>
                        {item.name}
                      </span>

                      <Icon size={20} />

                    </div>

                    <h3>
                      {item.description}
                    </h3>

                    <ArrowUpRight />

                  </div>

                </article>
              );
            })}

          </div>

        </section>

        {/* =================================================
            MUSIC
        ================================================= */}

        <Music />

        {/* =================================================
            SELECTED CREATIONS
        ================================================= */}

        <section className="section selected">

          <div className="eyebrow">
            SELECTED CREATIONS
          </div>

          <div className="section-head">

            <h2>
              Made from
              <i> feeling.</i>
            </h2>

          </div>

          <div className="selected-grid">

            {creations.map(
              (creation, index) => (

                <article
                  className={`creation c${index + 1}`}
                  key={creation.title}
                >

                  <div className="creation-image">

                    <img
                      src={creation.image}
                      alt={creation.title}
                    />

                    <div className="creation-icon">

                      {creation.type ===
                        "MUSIC" && (
                          <Music2 />
                        )}

                      {creation.type ===
                        "LYRICS" && (
                          <PenLine />
                        )}

                      {creation.type ===
                        "POETRY" && (
                          <PenLine />
                        )}

                      {creation.type ===
                        "SOUND" && (
                          <Headphones />
                        )}

                    </div>

                  </div>

                  <div className="creation-info">

                    <span>
                      {creation.type}
                    </span>

                    <h3>
                      {creation.title}
                    </h3>

                    <p>
                      {creation.text}
                    </p>

                    <b>
                      EXPLORE
                      <ArrowUpRight size={15} />
                    </b>

                  </div>

                </article>

              )
            )}

          </div>

        </section>

        {/* =================================================
            POETRY
        ================================================= */}

        <section
          id="poetry"
          className="poetry"
        >

          <div className="poetry-inner">

            <div className="poetry-top">

              <div className="eyebrow">
                WORDS THAT STAY
              </div>

              <div className="poetry-meta">
                <span>LYRICS</span>
                <span>•</span>
                <span>POETRY</span>
                <span>•</span>
                <span>THOUGHTS</span>
              </div>

            </div>

            <div className="poetry-content">

              <div className="poetry-title-row">

                <h2>
                  Where thoughts
                  <br />
                  become <i>poetry.</i>
                </h2>

                <div className="poetry-icon">
                  <PenLine
                    size={20}
                    strokeWidth={1.4}
                  />
                </div>

              </div>

              <div className="poem">

                <span>
                  “മനസ്സ് ഒരു കൂട് ആണ്.
                </span>

                <span>
                  തോന്നലുകൾ അതിലെ പക്ഷികളും.
                </span>

                <span>
                  ഇടക്കൊക്കെ ആ പക്ഷികളെ
                  <br />
                  സ്വതന്ത്രമായി പറത്തി വിടണം.
                </span>

                <span>
                  കാടും മേടും കടലും കരയും
                  <br />
                  നാടും നഗരവും ഒക്കെ ചുറ്റി
                  സഞ്ചരിച്ചു
                </span>

                <span>
                  അവ കൂട്ടിലേക്ക് തന്നെ തിരിച്ചു വരും.
                </span>

                <span>
                  വെറും കയ്യോടെ ആയിരിക്കില്ല.
                  <br />
                  വരുമ്പോൾ കുറേ അക്ഷരങ്ങളും ഉണ്ടാകും.
                </span>

                <span>
                  ചിതറിയ ആ അക്ഷരങ്ങളെ
                  <br />
                  ഒന്ന് ചേർത്ത് വച്ച് നോക്കുക.
                </span>

                <span>
                  അവിടെ കവിത വിരിയുന്നത് കാണാം.
                </span>

                <span className="poem-ending">
                  മനസ്സിന്റെ തോന്നലുകളിൽ നിന്ന്
                  <br />
                  ഹൃദയം കൊണ്ടെഴുതുന്ന കവിത!”
                </span>

              </div>

              <div className="poetry-footer">

                <p className="poem-description">
                  Some words do not ask to be
                  understood.
                  <br />
                  They simply ask to be felt.
                </p>

                <button
                  className="poem-button"
                  onClick={() =>
                    document
                      .getElementById(
                        "journal"
                      )
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                  }
                >
                  EXPLORE THE JOURNAL
                  <ArrowUpRight size={15} />
                </button>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            JOURNAL
        ================================================= */}

        <section
          id="journal"
          className="section journal"
        >

          <div className="eyebrow">
            FROM THE JOURNAL
          </div>

          <div className="journal-grid">

            <div className="journal-feature">

              <img
                src={images.notebook}
                alt="Songwriting journal"
              />

              <div>

                <span>
                  THE SONGWRITING PROCESS
                </span>

                <h2>
                  The Story Behind a Melody
                </h2>

                <p>
                  Where a feeling becomes a line,
                  and a line slowly finds its melody.
                </p>

                <button>
                  READ STORY
                  <ArrowUpRight size={15} />
                </button>

              </div>

            </div>

            <div className="journal-list">

              {[
                {
                  title:
                    "When Memories Become Lyrics",
                  icon: PenLine,
                },
                {
                  title:
                    "A Thought That Became a Song",
                  icon: Music2,
                },
                {
                  title:
                    "Notes From a Quiet Evening",
                  icon: Mic2,
                },
              ].map(
                (item, index) => {

                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                    >

                      <div className="journal-number">
                        0{index + 1}
                      </div>

                      <div>

                        <span>
                          JOURNAL / SONGWRITING
                        </span>

                        <h3>
                          {item.title}
                        </h3>

                      </div>

                      <Icon size={20} />

                    </article>
                  );
                }
              )}

            </div>

          </div>

        </section>

        {/* =================================================
            MUSIC DESK
        ================================================= */}

        <section className="section gallery">

          <div className="eyebrow">
            THE MUSIC DESK
          </div>

          <div className="gallery-heading">

            <h2>
              Written,
              <i> recorded.</i>
            </h2>

            <p>
              Behind every song is a notebook,
              a microphone, a melody and a moment.
            </p>

          </div>

          <div className="gallery-grid">

            {[
              {
                image: images.notebook,
                title: "Songwriting Desk",
              },
              {
                image: images.studio,
                title: "Studio Session",
              },
              {
                image: images.microphone,
                title: "The Microphone",
              },
              {
                image: images.piano,
                title: "Piano & Melody",
              },
              {
                image: images.vinyl,
                title: "Vinyl & Memory",
              },
              {
                image: images.headphones,
                title: "Headphones & Sound",
              },
            ].map((item) => (

              <figure key={item.title}>

                <img
                  src={item.image}
                  alt={item.title}
                />

                <figcaption>

                  <span>
                    {item.title}
                  </span>

                  <ArrowUpRight size={16} />

                </figcaption>

              </figure>

            ))}

          </div>

        </section>

        {/* =================================================
            CREATOR
        ================================================= */}

        <section className="creator">

          <div
            className="creator-photo"
            style={{
              backgroundImage:
                `url(${images.microphone})`,
            }}
          >

            <div className="creator-photo-overlay">

              <span>
                BEHIND THE WORK
              </span>

              <Music2 size={28} />

            </div>

          </div>

          <div className="creator-copy">

            <div className="eyebrow">
              THE CREATOR
            </div>

            <h3 className="creator-name">
              Sam <span>Thomas K.B</span>
            </h3>

            <p className="role">
              Lyricist <span>•</span> Composer{" "}
              <span>•</span> Poet <span>•</span>{" "}
              Writer
            </p>

            <p className="creator-intro">
              I believe the simplest moments can
              become the most meaningful creations.
            </p>

            <p>
              A melody, a few words, an old memory,
              or a passing thought — Nerampokku is
              where I turn those moments into
              something you can listen to, read,
              feel and remember.
            </p>

            <p>
              This is more than a collection of
              creations. It is a little piece of my
              world, shared with anyone who finds
              something of their own in it.
            </p>

            <div className="creator-footer">

              <div className="signature">
                Sam Thomas K.B
              </div>

              <div className="creator-mark">
                <span>WRITE</span>
                <span>CREATE</span>
                <span>SHARE</span>
              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            PHILOSOPHY
        ================================================= */}

        <section
          className="philosophy"
          style={{
            backgroundImage:
              `url(${images.studioTwo})`,
          }}
        >

          <div className="philosophy-overlay" />

          <div className="philosophy-content">

            <span>
              THE PHILOSOPHY
            </span>

            <h2>
              Write what you feel.
              <br />
              Compose what you remember.
              <br />
              Share what deserves to be heard.
            </h2>

            <div className="philosophy-icons">

              <Music2 />
              <PenLine />
              <Mic2 />

            </div>

          </div>

        </section>

        {/* =================================================
            CONTACT
        ================================================= */}

        <section
          id="collaboration"
          className="section contact"
        >

          <div className="eyebrow">
            LET'S MAKE SOMETHING MEANINGFUL
          </div>

          <div className="contact-grid">

            <div>

              <h2>
                Have a story
                <br />
                <i>to turn into a song?</i>
              </h2>

              <p>
                From songs and lyrics to songwriting,
                poetry, creative collaborations and
                visual ideas — let's create something
                meaningful.
              </p>

              <div className="contact-links">

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nerampokkucreations@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label="Email Nerampokku Creations"
                >
                  <Mail size={18} />
                  <span>EMAIL</span>
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://www.youtube.com/@NerampokkuCreations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label="Visit Nerampokku Creations on YouTube"
                >
                  <FaYoutube size={19} />
                  <span>YOUTUBE</span>
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="https://www.instagram.com/__nerampokku_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label="Visit Nerampokku Creations on Instagram"
                >
                  <FaInstagram size={19} />
                  <span>INSTAGRAM</span>
                  <ArrowUpRight size={15} />
                </a>

              </div>

            </div>

            {formStatus === "success" ? (

              <div className="contact-success">

                <div className="success-icon">
                  ✓
                </div>

                <span className="success-eyebrow">
                  MESSAGE RECEIVED
                </span>

                <h3>
                  Thank you for
                  <br />
                  <i>reaching out.</i>
                </h3>

                <p>
                  Your idea has been received
                  successfully. I’ll get back to
                  you as soon as possible.
                </p>

                <div className="success-line" />

                <button
                  type="button"
                  className="success-again"
                  onClick={() =>
                    setFormStatus("")
                  }
                >
                  SEND ANOTHER MESSAGE
                  <ArrowUpRight size={15} />
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleContactSubmit}
              >

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      name: event.target.value,
                    })
                  }
                  autoComplete="name"
                  required
                />

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      email: event.target.value,
                    })
                  }
                  autoComplete="email"
                  required
                />

                <select
                  id="project-type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      projectType:
                        event.target.value,
                    })
                  }
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    I'm interested in
                  </option>

                  <option>
                    Songwriting
                  </option>

                  <option>
                    Music
                  </option>

                  <option>
                    Poetry
                  </option>

                  <option>
                    Stories
                  </option>

                  <option>
                    Creative Collaboration
                  </option>

                  <option>
                    Brand Collaboration
                  </option>

                  <option>
                    Visual Creation
                  </option>

                  <option>
                    Other
                  </option>

                </select>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your idea..."
                  rows="5"
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      message:
                        event.target.value,
                    })
                  }
                />

                <button
                  type="submit"
                  className="primary"
                  disabled={isSubmitting}
                >

                  <span>
                    {isSubmitting
                      ? "SENDING..."
                      : "START A CONVERSATION"}
                  </span>

                  {!isSubmitting && (
                    <ArrowUpRight size={16} />
                  )}

                  {isSubmitting && (
                    <span className="submit-loader" />
                  )}

                </button>

                {formStatus === "error" && (

                  <div
                    className="form-error"
                    role="alert"
                  >
                    Something went wrong.
                    Please try again.
                  </div>

                )}

              </form>

            )}

          </div>

        </section>

      </main>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <div className="footer-brand">
          NERAMPOKKU{" "}
          <span>CREATIONS</span>
        </div>

        <p>
          Where words find a melody.
        </p>

        <div className="footer-row">

          <div>
            © 2026 Nerampokku Creations.
            All rights reserved.
          </div>

          <div>
            Music • Lyrics • Poetry • Stories
          </div>

        </div>

      </footer>

    </>
  );
}

/* =========================================================
   RENDER
========================================================= */

createRoot(
  document.getElementById("root")
).render(
  <App />
);

