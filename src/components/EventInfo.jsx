import React from "react";
import { useParams, Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Krutiverse Hackathon",
    subtitle: "A Great Fundraising Opportunity to Showcase Your Talent",
    date: "24 March, 2026",
    accentFrom: "#f97316", accentTo: "#a855f7",
    registration: "https://forms.gle/XghiHw85MWDSuBNJ6",
    about: [
      {
        heading: "About the Event",
        description: [
          "🚀 What is Hackathon Krutiverse?",
          "Hackathon Krutiverse is an 10-hour coding marathon where innovators, developers, designers, and problem-solvers collaborate to build impactful solutions.",
          "",
          "💡 Why Participate?",
          "- Solve real-world problems with cutting-edge technology",
          "- Work in teams and showcase problem-solving skills",
          "- Gain mentorship from industry experts",
          "- Win exciting prizes and recognition",
          "- Network with like-minded tech enthusiasts",
        ],
      },
    ],
    highlights: [
      "Creativity & Functionality",
      "Team Collaboration",
      "Exciting Prizes & Recognition",
      "Innovative Challenges",
      "Networking Opportunities",
      "8 Hours Non-Stop Coding",
    ],
    contacts: [
      { name: "Aditya Korde",     phone: "+91 8446950836" },
      { name: "Aniket Kadu",      phone: "+91 8767158314" },
      { name: "Chhagan Rakhade",  phone: "+9 19158396794" },
      { name: "Himanshu Dhenge",  phone: "+91 9322913858" },
    ],
  },
  {
    id: 2,
    title: "Project Expo",
    subtitle: "Showcase Your Innovative Technical Projects",
    date: "24 March, 2026",
    accentFrom: "#06b6d4", accentTo: "#6366f1",
     registration: "https://forms.gle/fvdqevFSYk9bhBqJ6",
    about: [
      {
        heading: "About the Event",
        description: [
          "🎯 What is Project Expo?",
          "Project Expo provides a platform for students to present their innovative technical projects and working prototypes.",
          "",
          "💡 Why Participate?",
          "- Get your project evaluated by experts",
          "- Gain valuable feedback and mentorship",
          "- Showcase your innovation",
          "- Win exciting prizes",
        ],
      },
    ],
    highlights: [
      "Innovative Projects",
      "Expert Evaluation",
      "Industry Interaction",
      "Exciting Prizes",
    ],
    contacts: [
      { name: "Tushar Gajekeshwar", phone: "+91 8805892426" },
      { name: "Prajwal Mesare",     phone: "+91 7709764347" },
      { name: "Krushna Kayande",    phone: "+91 8766007638" },
      { name: "Shreyash Gahane",    phone: "+91 8605251707" },
    ],
  },
  {
    id: 3,
    title: "E-Sports Championship",
    subtitle: "Battle in Top-Tier Gaming Tournaments",
    date: "25 March, 2026",
    accentFrom: "#10b981", accentTo: "#06b6d4",
    registration: "https://forms.gle/7ptdP8uYdvVZtf8F8",
    about: [
      {
        heading: "About the Event",
        description: [
          "🎮 What is the E-Sports Championship?",
          "This event brings together gaming enthusiasts to compete in exciting tournaments.",
          "",
          "🔥 Games Included",
          "- BGMI",
          "- Free Fire",
          "",
          "💡 Why Participate?",
          "- Compete with skilled gamers",
          "- Win prizes and trophies",
          "- Experience competitive gaming",
        ],
      },
    ],
    highlights: [
      "Battle Royale Matches",
      "FPS Gaming Competition",
      "Cash Prizes",
      "Squad Mode",
      "Pro Gamer Competition",
    ],
    contacts: [
      { name: "Mahesh Ingle (BGMI)",      phone: "+91 9623742970" },
      { name: "Harshal Mogre (Free Fire)", phone: "+91 9579508742" },
      { name: "Chetan Parse",             phone: "+91 9322476335" },
      { name: "Priyanshu Patle",          phone: "+91 7038836841" },
    ],
  },
  {
    id: 7,
    title: "Vibe Coding Challenge",
    subtitle: "Fast-paced Coding Competition",
    date: "25 March, 2026",
    accentFrom: "#f59e0b", accentTo: "#f97316",
    registration: "https://forms.gle/Y7Yydv2j4DbyTr979",
    about: [
      {
        heading: "About the Event",
        description: [
          "💻 What is Vibe Coding?",
          "A competitive programming challenge where participants solve coding problems under time pressure.",
          "",
          "💡 Why Participate?",
          "- Test your programming skills",
          "- Compete with other coders",
          "- Improve problem-solving ability",
        ],
      },
    ],
    highlights: [
      "Competitive Programming",
      "Algorithmic Challenges",
      "Fast Problem Solving",
      "Exciting Prizes",
    ],
    contacts: [
      { name: "Anuj Moon",       phone: "+91 9156675249" },
      { name: "Khushbu Khandait",phone: "+91 8080364319" },
      { name: "Sudhanshu Kumar", phone: "+91 9699921161" },
      { name: "Sachika Singh",   phone: "+91 9594288342" },
    ],
  },
  {
    id: 4,
    title: "Open Mic Talent Show",
    subtitle: "Showcase Your Talent Through Poetry, Music & Comedy",
    date: "25 March, 2026",
    accentFrom: "#ec4899", accentTo: "#f97316",
    registration: "https://forms.gle/n3EFvmZ6FNuVXjDo8",
    about: [
      {
        heading: "About the Event",
        description: [
          "🎤 Open Mic provides a stage for students to showcase their talents.",
          "",
          "Participants can perform:",
          "- Poetry",
          "- Singing",
          "- Stand-up comedy",
          "- Storytelling",
        ],
      },
    ],
    highlights: [
      "Poetry & Storytelling",
      "Music Performances",
      "Stand-Up Comedy",
      "Creative Talent Showcase",
    ],
    contacts: [
      { name: "Sarang Kachare", phone: "+91 9325489326" },
      { name: "Vedant Nanoti",  phone: "+91 9960116568" },
      { name: "Aakash Sanap", phone: "+91 93569 89736" },
      { name: "Vaibhav ambhere", phone: "+91 8668608638" },
    ],

  },
  {
    id: 5,
    title: "Reel & Short Film",
    subtitle: "Present Your Creative Video Stories",
    date: "25 March, 2026",
    accentFrom: "#a855f7", accentTo: "#ec4899",
    registration: "https://forms.gle/fnNGchSssi7usPyY7",
    about: [
      {
        heading: "About the Event",
        description: [
          "🎬 Participants present creative reels or short films.",
          "",
          "💡 Focus Areas:",
          "- Storytelling",
          "- Cinematography",
          "- Editing",
          "- Creativity",
        ],
      },
    ],
    highlights: [
      "Creative Storytelling",
      "Short Film Presentation",
      "Video Editing Skills",
      "Judges Evaluation",
    ],
    contacts: [
      { name: "Ram Dhote",         phone: "+91 8208268304" },
      { name: "Piyush Ambildhuke", phone: "+91 9923272412" },
      { name: "Sudhanshu Rambhad", phone: "+91 9322143157" },
      { name: "Yash Bhakre",       phone: "+91 7972930332" },
      
    ],
  },
  {
    id: 6,
    title: "Ciphertext Treasure Hunt",
    subtitle: "Solve Encrypted Clues to Find the Treasure",
    date: "25 March, 2026",
    accentFrom: "#facc15", accentTo: "#f97316",
    registration: "https://forms.gle/WY2MdvM2Suqx3Lxp9",
    about: [
      {
        heading: "About the Event",
        description: [
          "🧩 Ciphertext Treasure Hunt is a puzzle-based event.",
          "",
          "Participants solve encrypted clues and riddles to reach the final treasure.",
        ],
      },
    ],
    highlights: [
      "Cryptography Challenges",
      "Puzzle Solving",
      "Team Adventure",
      "Exciting Rewards",
    ],
    contacts: [
      { name: "Anandi Sonune",  phone: "+91 9588446815" },
      { name: "Anupam Sarkar",  phone: "+91 7588933314" },
      { name: "Durvesh Buradkar",phone: "+91 9420476188" },
      { name: "Divya Atram",    phone: "+91 8010883231" },
    ],
  },
];

/* ── Parse description lines ─────────────────────────────────── */
const renderLine = (line, i) => {
  if (line === "") return <div key={i} style={{ height: 12 }} />;
  const isBullet = line.startsWith("- ");
  const isHeader = line.match(/^[🚀💡🎯🔥🎮💻🎤🎬🧩]/u);
  return (
    <p
      key={i}
      style={{
        fontSize: "clamp(13px, 2.4vw, 15px)",
        color: isHeader
          ? "rgba(255,255,255,0.75)"
          : isBullet
          ? "rgba(255,255,255,0.45)"
          : "rgba(255,255,255,0.5)",
        fontWeight: isHeader ? 700 : 400,
        letterSpacing: isHeader ? "0.08em" : "0.03em",
        lineHeight: 1.75,
        paddingLeft: isBullet ? 16 : 0,
        fontFamily: "'Rajdhani', sans-serif",
        marginBottom: 2,
      }}
    >
      {isBullet ? `→ ${line.slice(2)}` : line}
    </p>
  );
};

/* ── Main Component ──────────────────────────────────────────── */
const EventInfo = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <div
        style={{
          minHeight: "100svh",
          background: "#050508",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Rajdhani', sans-serif",
          color: "rgba(255,255,255,0.3)",
          fontSize: "clamp(1rem, 4vw, 1.5rem)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          gap: 20,
        }}
      >
        Event Not Found
        <Link
          to="/"
          style={{
            fontSize: 13,
            letterSpacing: "0.3em",
            color: "#f97316",
            textDecoration: "none",
          }}
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  const { accentFrom, accentTo } = event;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .ev-root {
          position: relative;
          min-height: 100svh;
          background: #050508;
          overflow: hidden;
          font-family: 'Rajdhani', sans-serif;
          color: #fff;
          isolation: isolate;
        }

        /* Noise */
        .ev-root::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.022;
          pointer-events: none;
          z-index: 0;
        }

        /* Scanlines */
        .ev-root::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            to bottom,
            transparent, transparent 3px,
            rgba(255,255,255,0.01) 3px, rgba(255,255,255,0.01) 4px
          );
          pointer-events: none;
          z-index: 0;
        }

        /* Orbs */
        .ev-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }
        .ev-orb1 {
          width: clamp(300px, 55vw, 700px);
          height: clamp(300px, 55vw, 700px);
          top: -15%; left: -10%;
          opacity: 0.13;
          animation: orbDrift1 20s ease-in-out infinite;
        }
        .ev-orb2 {
          width: clamp(200px, 40vw, 550px);
          height: clamp(200px, 40vw, 550px);
          bottom: -10%; right: -8%;
          opacity: 0.12;
          animation: orbDrift2 24s ease-in-out infinite;
        }

        @keyframes orbDrift1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(3%,5%) scale(1.06); }
        }
        @keyframes orbDrift2 {
          0%,100% { transform: translate(0,0); }
          50%      { transform: translate(-4%,-3%); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Inner */
        .ev-inner {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          padding: clamp(80px, 12vw, 120px) clamp(20px, 5vw, 48px) clamp(60px, 8vw, 100px);
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 6vw, 64px);
        }

        /* Back link */
        .ev-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          transition: color 0.25s;
          animation: fadeUp 0.6s ease both;
        }
        .ev-back:hover { color: rgba(255,255,255,0.65); }

        /* Hero */
        .ev-hero {
          text-align: center;
          animation: fadeUp 0.7s 0.05s ease both;
        }


        .ev-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: clamp(9px, 2vw, 11px);
          font-weight: 700;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          margin-bottom: 14px;
        }

        .ev-eyebrow-line {
          width: 30px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15));
        }
        .ev-eyebrow-line.r {
          background: linear-gradient(90deg, rgba(255,255,255,0.15), transparent);
        }

        .ev-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.4rem, 10vw, 5.5rem);
          letter-spacing: 0.05em;
          line-height: 0.92;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .ev-subtitle {
          font-size: clamp(13px, 2.5vw, 16px);
          color: rgba(255,255,255,0.38);
          letter-spacing: 0.06em;
          max-width: 560px;
          margin: 0 auto 14px;
          line-height: 1.65;
        }

        .ev-date-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          padding: 6px 18px;
          font-size: clamp(11px, 2vw, 13px);
          font-weight: 600;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
        }

        .date-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:0.4; transform:scale(0.7); }
        }

        /* Section card */
        .ev-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: clamp(24px, 5vw, 40px);
          backdrop-filter: blur(12px);
          animation: fadeUp 0.7s ease both;
          position: relative;
          overflow: hidden;
        }

        .ev-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
        }

        .ev-section-label {
          font-size: clamp(9px, 1.8vw, 10px);
          font-weight: 700;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .ev-section-label::after {
          content: "";
          flex: 1; height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.08), transparent);
        }

        /* Highlights grid */
        .ev-highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));
          gap: clamp(10px, 2.5vw, 16px);
        }

        .ev-highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: clamp(12px, 2.5vw, 16px);
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          font-size: clamp(12px, 2.2vw, 14px);
          font-weight: 600;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.55);
          transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        }

        .ev-highlight-item:hover {
          border-color: rgba(255,255,255,0.14);
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.05);
          transform: translateY(-2px);
        }

        .ev-highlight-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Contacts grid */
        .ev-contacts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
          gap: clamp(10px, 2.5vw, 16px);
        }

        .ev-contact-card {
          padding: clamp(14px, 3vw, 20px);
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          transition: border-color 0.25s, background 0.25s, transform 0.25s;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ev-contact-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          transform: translateY(-2px);
        }

        .ev-contact-name {
          font-size: clamp(12px, 2.2vw, 14px);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
        }

        .ev-contact-phone {
          font-size: clamp(12px, 2vw, 13px);
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }

        .ev-contact-phone:hover { color: rgba(255,255,255,0.7); }

        /* Register CTA */
        .ev-register-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          border-radius: 100px;
          font-family: 'Rajdhani', sans-serif;
          font-size: clamp(13px, 2.5vw, 15px);
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .ev-register-btn:hover {
          transform: translateY(-3px);
        }
      `}</style>

      <div className="ev-root">
        {/* Orbs */}
        <div
          className="ev-orb ev-orb1"
          style={{ background: `radial-gradient(circle, ${accentFrom}, transparent 70%)` }}
        />
        <div
          className="ev-orb ev-orb2"
          style={{ background: `radial-gradient(circle, ${accentTo}, transparent 70%)` }}
        />

        <div className="ev-inner">

          {/* Back */}
          <Link to="/" className="ev-back">
            ← Back to Home
          </Link>

          {/* Hero */}
          <div className="ev-hero">
            <div className="ev-emoji-badge">{event.emoji}</div>

            <div className="ev-eyebrow">
              <span className="ev-eyebrow-line" />
              TechKruti 2K26
              <span className="ev-eyebrow-line r" />
            </div>

            <h1
              className="ev-title"
              style={{ backgroundImage: `linear-gradient(135deg, #fff 20%, ${accentFrom} 60%, ${accentTo} 100%)` }}
            >
              {event.title}
            </h1>

            <p className="ev-subtitle">{event.subtitle}</p>

            <div className="ev-date-pill">
              <span
                className="date-dot"
                style={{ background: accentFrom, boxShadow: `0 0 8px ${accentFrom}` }}
              />
              {event.date}
            </div>
          </div>

          {/* Register */}
          {event.registration && (
            <div style={{ textAlign: "center", animation: "fadeUp 0.7s 0.1s ease both" }}>
              <a
                href={event.registration}
                target="_blank"
                rel="noopener noreferrer"
                className="ev-register-btn"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
                  boxShadow: `0 4px 24px ${accentFrom}44`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 8px 36px ${accentFrom}77`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 24px ${accentFrom}44`;
                }}
              >
                Register Now →
              </a>
            </div>
          )}

          {/* About */}
          <div
            className="ev-card"
            style={{ animationDelay: "0.12s" }}
          >
            <div
              className="ev-card"
              style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "1px",
                backgroundImage: `linear-gradient(90deg, transparent, ${accentFrom}88, ${accentTo}88, transparent)`,
                border: "none",
                borderRadius: 0,
                padding: 0,
                animation: "none",
              }}
            />
            <style>{`
              .ev-card-about::before {
                background: linear-gradient(90deg, transparent, ${accentFrom}66, ${accentTo}66, transparent) !important;
              }
            `}</style>
            <div className="ev-card ev-card-about" style={{ border: "none", paddingTop: "20px",
    paddingLeft: "20px", background: "transparent", animation: "none" }}>
              <div className="ev-section-label">About the Event</div>
              {event.about.map((section, si) =>
                section.description.map((line, i) => renderLine(line, `${si}-${i}`))
              )}
            </div>
          </div>

          {/* Highlights */}
          <div className="ev-card" style={{ animationDelay: "0.18s" }}>
            <div className="ev-section-label">Key Highlights</div>
            <div className="ev-highlights-grid">
              {event.highlights.map((h, i) => (
                <div key={i} className="ev-highlight-item">
                  <span
                    className="ev-highlight-dot"
                    style={{
                      background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
                      boxShadow: `0 0 6px ${accentFrom}88`,
                    }}
                  />
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div className="ev-card" style={{ animationDelay: "0.24s" }}>
            <div className="ev-section-label">Contact Coordinators</div>
            <div className="ev-contacts-grid">
              {event.contacts.map((c, i) => (
                <div key={i} className="ev-contact-card">
                  <span
                    className="ev-contact-name"
                    style={{
                      background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {c.name}
                  </span>
                  {c.phone ? (
                    <a href={`tel:${c.phone}`} className="ev-contact-phone">
                      {c.phone}
                    </a>
                  ) : (
                    <span className="ev-contact-phone" style={{ opacity: 0.3 }}>—</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default EventInfo;