import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Geo Bricks - Concrete Interlocking Bricks",
  description:
    "Geo Bricks is a trusted concrete interlocking brick manufacturing company in Kerala.",
  icons: {
    icon: "/logo.jpg", // your logo in the public folder
  },
  openGraph: {
    title: "Geo Bricks - Concrete Interlocking Bricks",
    description:
      "Trusted concrete interlocking brick & steel windows/doors in Kerala.",
    url: "https://yourwebsite.com",
    siteName: "Geo Products",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 600,
        alt: "Geo Products Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geo Bricks - Concrete Interlocking Bricks",
    description:
      "Trusted concrete interlocking brick & steel windows/doors in Kerala.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17576087140"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17576087140');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
