import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Assistant from "./components/assistant";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site metadata
export const metadata = {
  title: "dacitos - Your Trusted IT Partner for Innovative Solutions",
  description: "dacitos delivers cutting-edge IT solutions and software development services that drive growth, enhance efficiency, and transform your business for the digital age.",
  keywords: "IT solutions, software development, web development, mobile apps, cloud services, cybersecurity, custom software, IT consulting, technology partner",
  authors: [{ name: "dacitos", url: "https://dacitos.com" }],
  openGraph: {
    siteName: "dacitos",
    locale: "en_US",
    type: "website",
    title: "dacitos - Your Trusted IT Partner for Innovative Solutions",
    description: "dacitos delivers cutting-edge IT solutions and software development services that drive growth, enhance efficiency, and transform your business for the digital age.",
    url: "https://dacitos.com",
    images: [{
      url: "https://dacitos.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "dacitos IT Solutions"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@dacitos",
    creator: "@dacitos",
    title: "dacitos - Your Trusted IT Partner for Innovative Solutions",
    description: "Innovative IT solutions and software development services",
    images: ["https://dacitos.com/og-image.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

// Export viewport via generateViewport per Next.js recommended API
export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

// 🔹 Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Assistant className="fixed bottom-20 right-6 z-50" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}