import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://gdgtsecoffical.dpdns.org"),
  title: { default: "GDG TSEC", template: "%s | GDG TSEC" },
  description:
    "Google Developer Groups – TSEC. Learn, build, grow with GDG TSEC.",
  keywords: ["GDG", "Google Developer Groups", "TSEC", "Hackathon", "Hacksync"],
  authors: [{ name: "GDG TSEC" }],
  creator: "GDG TSEC",
  alternates: { canonical: "/" },
  icons: { icon: "/Logo.png" },
  robots: {
    index: true,
    follow: true,
    googleBot:
      "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "GDG TSEC",
    title: "GDG TSEC",
    description: "Official GDG TSEC website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "GDG TSEC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GDG TSEC",
    description: "Official GDG TSEC website",
    images: ["/og.png"],
  },
  manifest: "/site.webmanifest",
  verification: {
    // google: "TtCVRJScD-UOsCl5zgJf3NL2maM07UtsS2-WAKXzDao",
    google: "9dFsFtyxM5pE4VhCArkTIF27OM8tfHFG8SjUm-ENilo",
  },
};

// Add this new export
export const viewport = {
  themeColor: "#0b1220",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>

        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GDG TSEC",
              url: "https://gdgtsecoffical.dpdns.org/",
              logo: "https://gdgtsecoffical.dpdns.org/Logo.png",
              sameAs: [
                "https://www.linkedin.com/company/gdg-tsec/",
                "https://chat.whatsapp.com/BsLBWWGIAcz379C9BSRuIM",
              ],
            }),
          }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GDG TSEC",
              url: "https://gdgtsecoffical.dpdns.org/",
            }),
          }}
        />
      </body>
    </html>
  );
}
