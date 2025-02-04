import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from 'sonner'
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ModalsProvider } from '@/components/modals/ModalsProvider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPIA - Sistema de Pesquisa e Inteligência Artificial",
  description: "Sistema de monitoramento de concorrentes e análise de mercado",
};

function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          try {
            const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
          } catch (e) {}
        `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ModalsProvider>
            <DashboardLayout>{children}</DashboardLayout>
          </ModalsProvider>
        </ThemeProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
