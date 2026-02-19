"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./feed.module.css";

type Tier = "Tier 1" | "Tier 2" | "Tier 3";
type Region = "Luzon" | "Visayas" | "Mindanao";
type Vehicle = "Cadillac" | "Fortuner" | "Pickup";

const PACKAGES = [
  {
    tier: "Tier 1" as Tier,
    title: "Affordable Executive Escort",
    price: "₱29,900 / day",
    details: [
      "Barong attire",
      "Sidearm: handgun (standard)",
      "Vehicle: Fortuner",
      "1–2 protection agents",
      "Route planning + basic venue sweep",
    ],
    tag: "Best value",
  },
  {
    tier: "Tier 2" as Tier,
    title: "Premium Corporate Detail",
    price: "₱79,900 / day",
    details: [
      "Barong attire",
      "Sidearm: semi-automatic",
      "Vehicle: Cadillac",
      "2–3 protection agents",
      "Advanced route planning + comms",
    ],
    tag: "Most popular",
  },
  {
    tier: "Tier 3" as Tier,
    title: "High-Profile Convoy Package",
    price: "₱149,900 / day",
    details: [
      "Barong attire",
      "Sidearm: handgun + semi-automatic",
      "Vehicles: Cadillac + Pickup",
      "4–6 protection agents",
      "Convoy protocol + layered coverage",
    ],
    tag: "Maximum coverage",
  },
];

const VEHICLES: { name: Vehicle; desc: string }[] = [
  { name: "Cadillac", desc: "Executive transport with premium comfort & presence." },
  { name: "Fortuner", desc: "Reliable SUV coverage for city + mixed terrain routes." },
  { name: "Pickup", desc: "Support vehicle for convoy & reinforcement mobility." },
];

const TEAMS: { region: Region; desc: string }[] = [
  { region: "Luzon", desc: "Metro-ready protection teams for corporate and VIP routes." },
  { region: "Visayas", desc: "Regional teams with port & resort corridor familiarity." },
  { region: "Mindanao", desc: "Experienced teams for long routes and multi-stop itineraries." },
];

export default function FeedPage() {
  const [activeTier, setActiveTier] = useState<Tier>("Tier 2");
  const [region, setRegion] = useState<Region>("Luzon");
  const [vehicle, setVehicle] = useState<Vehicle>("Cadillac");

  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("1");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const selectedPackage = useMemo(
    () => PACKAGES.find((p) => p.tier === activeTier)!,
    [activeTier]
  );

  const corporateEmail = useMemo(() => {
    const lines = [
      "Subject: Corporate Protection Inquiry — Refuge",
      "",
      "Hello Refuge Team,",
      "",
      "We would like to request a corporate protection quotation.",
      "",
      "Company Name:",
      "Point of Contact:",
      "Contact Number:",
      "Service Date(s):",
      "Location(s):",
      "Estimated Duration:",
      "Preferred Package/Tier:",
      "Preferred Vehicles:",
      "Special Notes:",
      "",
      "Please provide availability and pricing options.",
      "",
      "Thank you,",
      "—",
    ];
    return lines.join("\n");
  }, []);

  const copyCorporateEmail = async () => {
    try {
      await navigator.clipboard.writeText(corporateEmail);
      alert("Corporate inquiry email copied to clipboard.");
    } catch {
      alert("Copy failed. Please copy manually from the box.");
    }
  };

  const submitBooking = () => {
    // Placeholder: later we connect to DB / payments / scheduling
    alert(
      `Booking draft created:\n\n${activeTier} • ${region} • ${vehicle}\nDate: ${date || "—"}\nDays: ${duration}\nPickup: ${pickup || "—"}\nDestination: ${destination || "—"}`
    );
  };

  return (
    <main className={`matrix-bg ${styles.page}`}>
      <header className={styles.nav}>
        <div className={styles.navLeft}>
          <span className={styles.logo}>Refuge</span>
          <span className={styles.dot}>·</span>
          <span className={styles.navHint}>SECURE BOOKING INTERFACE</span>
        </div>

        <nav className={styles.navRight}>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#vehicles" className={styles.navLink}>Vehicles</a>
          <a href="#teams" className={styles.navLink}>Protection Teams</a>
          <a href="#book" className={styles.navLinkStrong}>Book Protection</a>
          <a href="#corporate" className={styles.navLink}>Corporate Inquiry</a>
          <Link href="/" className={styles.navLink}>Exit</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <div className={styles.kicker}>YOUR SAFETY · MY PRIORITY</div>
            <h1 className={styles.h1}>Book a protection detail in minutes.</h1>
            <p className={styles.sub}>
              Choose a tier, vehicle, and region. We’ll generate a booking draft you can confirm next.
            </p>

            <div className={styles.quickRow}>
              <div className={styles.quickField}>
                <label>Region</label>
                <select value={region} onChange={(e) => setRegion(e.target.value as Region)}>
                  <option>Luzon</option>
                  <option>Visayas</option>
                  <option>Mindanao</option>
                </select>
              </div>

              <div className={styles.quickField}>
                <label>Vehicle</label>
                <select value={vehicle} onChange={(e) => setVehicle(e.target.value as Vehicle)}>
                  <option>Cadillac</option>
                  <option>Fortuner</option>
                  <option>Pickup</option>
                </select>
              </div>

              <div className={styles.quickField}>
                <label>Date</label>
                <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
              </div>

              <button className={styles.primaryBtn} onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })}>
                Proceed to Booking
              </button>
            </div>

            <div className={styles.badges}>
              <span className={styles.badge}>Neon Matrix UI</span>
              <span className={styles.badge}>Packages / Vehicles / Regions</span>
              <span className={styles.badge}>Ready for payments + auth next</span>
            </div>
          </div>

          <aside className={styles.heroRight}>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardTitle}>Selected Package</div>
                <div className={styles.cardTag}>{selectedPackage.tag}</div>
              </div>

              <div className={styles.cardBig}>{selectedPackage.tier}</div>
              <div className={styles.cardSub}>{selectedPackage.title}</div>
              <div className={styles.price}>{selectedPackage.price}</div>

              <ul className={styles.list}>
                {selectedPackage.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              <div className={styles.tierRow}>
                {PACKAGES.map((p) => (
                  <button
                    key={p.tier}
                    className={p.tier === activeTier ? styles.tierBtnActive : styles.tierBtn}
                    onClick={() => setActiveTier(p.tier)}
                    type="button"
                  >
                    {p.tier}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="services" className={styles.section}>
        <div className={styles.sectionTitleRow}>
          <h2 className={styles.h2}>Services</h2>
          <div className={styles.mini}>Select a tier package designed for your risk profile.</div>
        </div>

        <div className={styles.grid3}>
          {PACKAGES.map((p) => (
            <div key={p.tier} className={styles.tile}>
              <div className={styles.tileTop}>
                <div className={styles.tileTier}>{p.tier}</div>
                <div className={styles.tileTag}>{p.tag}</div>
              </div>
              <div className={styles.tileTitle}>{p.title}</div>
              <div className={styles.tilePrice}>{p.price}</div>
              <ul className={styles.tileList}>
                {p.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <button className={styles.secondaryBtn} onClick={() => setActiveTier(p.tier)}>
                Choose {p.tier}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="vehicles" className={styles.section}>
        <div className={styles.sectionTitleRow}>
          <h2 className={styles.h2}>Vehicles</h2>
          <div className={styles.mini}>Pick your ride — presence, comfort, and coverage.</div>
        </div>

        <div className={styles.grid3}>
          {VEHICLES.map((v) => (
            <div key={v.name} className={styles.tile}>
              <div className={styles.tileTop}>
                <div className={styles.tileTier}>{v.name}</div>
                <div className={styles.tileTag}>Available</div>
              </div>
              <div className={styles.tileTitle}>{v.desc}</div>
              <button className={styles.secondaryBtn} onClick={() => setVehicle(v.name)}>
                Select {v.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="teams" className={styles.section}>
        <div className={styles.sectionTitleRow}>
          <h2 className={styles.h2}>Protection Teams</h2>
          <div className={styles.mini}>Choose a regional team based on your route.</div>
        </div>

        <div className={styles.grid3}>
          {TEAMS.map((t) => (
            <div key={t.region} className={styles.tile}>
              <div className={styles.tileTop}>
                <div className={styles.tileTier}>{t.region}</div>
                <div className={styles.tileTag}>Active</div>
              </div>
              <div className={styles.tileTitle}>{t.desc}</div>
              <button className={styles.secondaryBtn} onClick={() => setRegion(t.region)}>
                Select {t.region}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="book" className={styles.section}>
        <div className={styles.sectionTitleRow}>
          <h2 className={styles.h2}>Book Protection</h2>
          <div className={styles.mini}>Generate a booking draft (we’ll connect payments next).</div>
        </div>

        <div className={styles.bookGrid}>
          <div className={styles.bookCard}>
            <div className={styles.bookRow}>
              <div className={styles.bookField}>
                <label>Package</label>
                <select value={activeTier} onChange={(e) => setActiveTier(e.target.value as Tier)}>
                  <option>Tier 1</option>
                  <option>Tier 2</option>
                  <option>Tier 3</option>
                </select>
              </div>

              <div className={styles.bookField}>
                <label>Region</label>
                <select value={region} onChange={(e) => setRegion(e.target.value as Region)}>
                  <option>Luzon</option>
                  <option>Visayas</option>
                  <option>Mindanao</option>
                </select>
              </div>

              <div className={styles.bookField}>
                <label>Vehicle</label>
                <select value={vehicle} onChange={(e) => setVehicle(e.target.value as Vehicle)}>
                  <option>Cadillac</option>
                  <option>Fortuner</option>
                  <option>Pickup</option>
                </select>
              </div>
            </div>

            <div className={styles.bookRow}>
              <div className={styles.bookField}>
                <label>Date</label>
                <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
              </div>

              <div className={styles.bookField}>
                <label>Duration (days)</label>
                <input value={duration} onChange={(e) => setDuration(e.target.value)} inputMode="numeric" />
              </div>
            </div>

            <div className={styles.bookRow}>
              <div className={styles.bookFieldWide}>
                <label>Pickup Location</label>
                <input value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="e.g. Makati, Metro Manila" />
              </div>
            </div>

            <div className={styles.bookRow}>
              <div className={styles.bookFieldWide}>
                <label>Destination / Route Notes</label>
                <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="e.g. BGC → NAIA → Hotel (with stops)" />
              </div>
            </div>

            <button className={styles.primaryBtnWide} onClick={submitBooking}>
              Create Booking Draft
            </button>
          </div>

          <div className={styles.bookCard}>
            <div className={styles.cardTitle}>Summary</div>
            <div className={styles.summaryLine}><span>Package</span><span>{activeTier}</span></div>
            <div className={styles.summaryLine}><span>Region</span><span>{region}</span></div>
            <div className={styles.summaryLine}><span>Vehicle</span><span>{vehicle}</span></div>
            <div className={styles.summaryLine}><span>Date</span><span>{date || "—"}</span></div>
            <div className={styles.summaryLine}><span>Days</span><span>{duration}</span></div>

            <div className={styles.divider} />

            <div className={styles.mini}>
              Next: connect authentication, availability, and payment confirmation.
            </div>
          </div>
        </div>
      </section>

      <section id="corporate" className={styles.section}>
        <div className={styles.sectionTitleRow}>
          <h2 className={styles.h2}>Corporate Inquiry</h2>
          <div className={styles.mini}>Copy this email template and send to your preferred address.</div>
        </div>

        <div className={styles.corpCard}>
          <textarea className={styles.textarea} value={corporateEmail} readOnly />
          <div className={styles.corpRow}>
            <button className={styles.secondaryBtn} onClick={copyCorporateEmail}>
              Copy Email Template
            </button>
            <span className={styles.mini}>
              Tip: paste into Gmail and fill in the blanks.
            </span>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>Refuge · Secure booking interface</div>
        <div className={styles.footerRight}>V1.0.0</div>
      </footer>
    </main>
  );
}
