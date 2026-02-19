"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../auth.module.css";

export default function LoginPage() {
  const [show, setShow] = useState(false);

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

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.row}>
                <input className={styles.input} placeholder="email or username" />
              </div>

              <div className={styles.row}>
                <div className={styles.passWrap}>
                  <input
                    className={styles.input}
                    placeholder="password"
                    type={show ? "text" : "password"}
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
