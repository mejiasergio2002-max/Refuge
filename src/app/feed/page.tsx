import Link from "next/link";

export default function FeedPage() {
  return (
    <main
      className="matrix-bg"
      style={{ display: "grid", placeItems: "center", padding: 24 }}
    >
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>Feed</h1>
        <p style={{ opacity: 0.8 }}>
          Coming next: bodyguard booking home page.
        </p>
        <Link href="/" style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
          Back Home&lt;/&gt;
        </Link>
      </div>
    </main>
  );
}
