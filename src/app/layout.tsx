import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ยาไม่พร่อง (YaMaiPhong)',
  description: 'ระบบตรวจสอบคลังยาสำหรับความโปร่งใสและการป้องกันทุจริตในสังคม',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
