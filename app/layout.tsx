import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
export const metadata: Metadata = { title: "SAPBridge Technologies | Enterprise Technology, Connected", description: "Practical enterprise technology services, integration concepts, and digital solutions.", metadataBase: new URL("https://example.com"), openGraph: { title: "SAPBridge Technologies", description: "Enterprise technology, connected.", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Header />{children}<Footer /></body></html>; }