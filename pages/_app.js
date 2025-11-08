import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

// © 2025 Aryabhatt Narasimha Rao Kankipati | GitHub: @aryabhatt00 | LinkedIn: aryabhatt-narasimha-rao-kankipati

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics /> {/* ✅ Enables Vercel Analytics tracking */}
    </>
  );
}
