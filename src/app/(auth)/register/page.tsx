"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../auth.module.css";

export default function RegisterPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // basic front-end validation (no backend yet)
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !username.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please complete all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!agree) {
      alert("Please agree to the terms & conditions.");
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

            <form className={styles.form} onSubmit={onSubmit}>
              <div className={styles.row}>
                <input
                  className={styles.input}
                  placeholder="first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                />
              </div>

              <div className={styles.row}>
                <input
                  className={styles.input}
                  placeholder="last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="family-name"
                />
              </div>

              <div className={styles.row}>
                <input
                  className={styles.input}
                  placeholder="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>

              <div className={styles.row}>
                <input
                  className={styles.input}
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                />
              </div>

              <div className={styles.row}>
                <input
                  className={styles.input}
                  placeholder="password"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>

              <div className={styles.row}>
                <div className={styles.passWrap}>
                  <input
                    className={styles.input}
                    placeholder="confirm password"
                    type={show ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
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
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
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