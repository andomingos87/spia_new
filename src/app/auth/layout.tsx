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
    <div className="min-h-screen flex">
      {/* Lado esquerdo - Banner */}
      <div className="flex-1 hidden lg:flex bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8">
        <div className="w-full max-w-lg mx-auto flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Monitore seus concorrentes e esteja sempre à frente no mercado
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Acompanhe em tempo real as estratégias da concorrência e tome decisões mais inteligentes para o seu negócio
          </p>

          {/* Cards de benefícios */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">
                Análise de Mercado em Tempo Real
              </h3>
              <p className="text-blue-50">
                Receba insights valiosos sobre o posicionamento dos seus concorrentes nas redes sociais
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">
                Inteligência Competitiva
              </h3>
              <p className="text-blue-50">
                Descubra oportunidades de mercado e antecipe tendências antes da concorrência
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">
                Tomada de Decisão Estratégica
              </h3>
              <p className="text-blue-50">
                Use dados e insights para tomar decisões mais assertivas e aumentar sua vantagem competitiva
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lado direito - Formulário */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8">
          {children}
        </div>
      </div>
    </div>
  );
} 