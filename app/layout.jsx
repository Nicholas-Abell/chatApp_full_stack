'use client'
import "./globals.css";
import { SessionProvider, session } from "next-auth/react";
import ToasterContext from './context/ToasterContext';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children, session
}) {
  return (
    <html lang="en">
      <body>      
        <SessionProvider session={session}>
          <ToasterContext />
          {children}      
        </ SessionProvider>
      </body>
    </html>
  );
}
