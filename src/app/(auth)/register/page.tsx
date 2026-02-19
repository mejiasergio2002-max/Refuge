"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "../auth.module.css";

export default function RegisterPage() {
  const [show, setShow] = useState(false);

  return (
    <main className="matrix-bg">
      <div className={styles.shell}>
        <section className={styles.panel}>
          <div className={styles.topbar}>
            <div>SECURE NODE · REGISTER</div>
            <div className={styles.version}>V1.0.0</div>
          </div>

          <div className={styles.content}>
            <h1 className={styles.h1}>create access</h1>
            <p className={styles.sub}>
              initialize your identity in the grid. choose strong credentials.
              <br />
              no one escapes weak passwords.
            </p>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.row}>
                <input className={styles.input} placeholder="first name" />
              </div>
              <div className={styles.row}>
                <input className={styles.input} placeholder="last name" />
              </div>
              <div className={styles.row}>
                <input className={styles.input} placeholder="email" type="email" />
              </div>
              <div className={styles.row}>
                <input className={styles.input} placeholder="username" />
              </div>

              <div className={styles.row}>
                <input
                  className={styles.input}
                  placeholder="password"
                  type={show ? "text" : "password"}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.passWrap}>
                  <input
                    className={styles.input}
                    placeholder="confirm password"
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
                  <input type="checkbox" />
                  i agree to the terms &amp; conditions&lt;/&gt;
                </label>
              </div>

              <button className={styles.cta} type="submit">
                INITIATE ACCESS
              </button>

              <div className={styles.footer}>
                <div>
                  already connected? <Link href="/login">Login&lt;/&gt;</Link>
                </div>
                <div className={styles.smallLine}>
                  need help? <Link href="/support">system support&lt;/&gt;</Link>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
