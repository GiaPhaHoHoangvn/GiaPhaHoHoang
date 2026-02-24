/**
 * @project AncestorTree
 * @file src/app/layout.tsx
 * @description Root layout with providers (Auth, Tooltip, Toaster)
 * @version 1.0.0
 * @updated 2026-02-24
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/auth-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gia Phả Điện Tử - Chi tộc Đặng Đình",
  description: "Phần mềm quản lý gia phả điện tử cho Chi tộc Đặng Đình, Thạch Lâm, Hà Tĩnh",
  keywords: ["gia phả", "gia phả điện tử", "Đặng Đình", "Thạch Lâm", "Hà Tĩnh", "dòng họ"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <QueryProvider>
          <AuthProvider>
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
