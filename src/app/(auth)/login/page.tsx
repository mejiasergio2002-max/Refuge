"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../auth.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // basic front-end validation (no backend yet)
    if (!identity.trim() || !password.trim()) {
      alert("Please enter your email/username and password.");
      return;
    }

    // Navigate to feed
    router.push("/feed");
  };

  return (
    <main className="matrix-bg">
      <div className={styles.shell}>
        <section className={styles.panel}>
          <div className={styles.topbar}>
            <div>SECURE NODE · LOGIN</div>
            <div className={styles.version}>V1.0.0</div>
          </div>

          <div className={styles.content}>
            <h1 className={styles.h1}>authenticate</h1>
            <p className={styles.sub}>
              verify your identity in the grid. keep credentials secure.
            </p>

            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.row}>
                <input
                  className={styles.input}
                  placeholder="email or username"
                  value={identity}
                  onChange={(e) => setIdentity(e.target.value)}
                  autoComplete="username"
                />
              </div>

              <div className={styles.row}>
                <div className={styles.passWrap}>
                  <input
                    className={styles.input}
                    placeholder="password"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className={styles.showBtn}
                    onClick={() => setShow((s) => !s)}
                  >
                    SHOW
                  </button>
                </div>
              </div>

              <div className={styles.metaRow}>
                <label className={styles.checkbox}>
                  <input type="checkbox" defaultChecked />
                  remember me&lt;/&gt;
                </label>

                <span style={{ color: "rgba(220,255,236,0.72)" }}>
                  forgot? <Link href="/support">system support&lt;/&gt;</Link>
                </span>
              </div>

              <button className={styles.cta} type="submit">
                INITIATE ACCESS
              </button>

              <div className={styles.footer}>
                <div>
                  new here? <Link href="/register">Register&lt;/&gt;</Link>
                </div>
                <div className={styles.smallLine}>
                  back to <Link href="/">Home&lt;/&gt;</Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}