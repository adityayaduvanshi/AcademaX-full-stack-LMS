import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/components/ui/toaster';
import { ConfettiProvider } from '@/components/providers/confetti-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Academa X | Online Learning Platform',
  description:
    'Your Premier Destination for Online Learning and Skill Development. Explore a diverse range of courses, expert instructors, and a dynamic learning platform. Start your educational journey today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
