import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPIA - Autenticação",
  description: "Acesse sua conta no SPIA",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  );
} 