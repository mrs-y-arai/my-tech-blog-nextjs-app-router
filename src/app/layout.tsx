import { Inter } from "next/font/google";
import "./globals.css";
import Header from "~/components/layouts/Header";
import Footer from "~/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-white`}>
        <Header />
        <main className="min-h-[100vh] pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
