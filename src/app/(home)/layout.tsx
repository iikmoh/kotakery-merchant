import '../globals.css';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kotakery Merchant',
  description: 'Kotakery Dashboard for Merchant',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#f75728" />
        {children}
      </body>
    </html>
  );
}
