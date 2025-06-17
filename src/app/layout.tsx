import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Chivo, Noto_Sans } from 'next/font/google';
import "@/../public/assets/css/style.css";
import "@/../public/assets/css/modal.css";
import "@/../public/assets/css/swiper-custom.css";
import Layout from "@/components/layout/Layout";

const chivo = Chivo({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: "--chivo",
  display: 'swap',
});

const noto = Noto_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: "--noto",
  display: 'swap',
});

export const metadata = {
  title: 'AGA26',
  description: 'AGA26',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} ${noto.variable}`} suppressHydrationWarning={true}>
        <Layout>
          {children}
        </Layout>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
