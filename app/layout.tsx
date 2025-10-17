import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import BootstrapClient from '@/components/BootstrapClient';

export const metadata: Metadata = {
  title: 'EQUITEQ - Elite Global Investment Bank',
  description: 'Equiteq is the Elite Global Investment Bank for the Technology Services & Consulting Sector.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
