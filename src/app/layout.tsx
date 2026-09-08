/**
 * @name layout.tsx
 * @description Root layout configuring fonts (Epilogue & Plus Jakarta Sans) and brand metadata
 */

import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ViNar (VinaGreen) | Nền Tảng Nông Nghiệp Tuần Hoàn & Trợ Lý Sinh Học",
  description:
    "Giải pháp công nghệ sinh học tuần hoàn từ phế phẩm nông nghiệp. Viên nén giữ nước sinh học AgriGel, BioBandage và Trợ lý AI nông vụ thông minh hướng tới Net Zero 2050.",
  keywords: [
    "ViNar",
    "VinaGreen",
    "AgriGel",
    "BioBandage",
    "Nông nghiệp tuần hoàn",
    "Net Zero 2050",
    "AI Farmer Agent",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${epilogue.variable} ${plusJakartaSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-surface text-deep-ink antialiased font-sans"
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
