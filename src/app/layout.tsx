import { Poppins as Font } from "next/font/google";
import { cn } from "~/lib/utils";
import "./globals.css";

const font = Font({
  subsets: ["latin"],
  weight: ["500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          font.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
