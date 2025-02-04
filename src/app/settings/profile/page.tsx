'use client'

import { useState } from 'react'
import { User, Lock, Bell, CreditCard, Receipt, Package } from 'lucide-react'

type TabType = 'personal' | 'security' | 'notifications' | 'billing' | 'plan'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabType>('personal')

  const tabs = [
    { id: 'personal', label: 'Dados Pessoais', icon: User },
    { id: 'security', label: 'Segurança', icon: Lock },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'billing', label: 'Pagamentos', icon: CreditCard },
    { id: 'plan', label: 'Plano', icon: Package },
  ] as const

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Configurações do Perfil
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar com tabs */}
        <aside className="w-full md:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          {activeTab === 'personal' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Dados Pessoais
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Cargo
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Salvar Alterações
              </button>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Segurança
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Senha Atual
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Nova Senha
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Confirmar Nova Senha
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Alterar Senha
              </button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Notificações
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      Notificações por Email
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receba atualizações importantes por email
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                      Notificações Push
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receba notificações em tempo real
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>

              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                Salvar Preferências
              </button>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Pagamentos
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                    Forma de Pagamento
                  </h3>
                  <div className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <CreditCard className="w-6 h-6 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        Cartão de Crédito
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Terminado em •••• 4242
                      </p>
                    </div>
                    <button className="ml-auto text-sm text-blue-600 dark:text-blue-400 hover:underline">
                      Alterar
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                    Histórico de Cobranças
                  </h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            Fatura #{i}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            01/0{i}/2024
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            R$ 99,00
                          </p>
                          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                            Ver fatura
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'plan' && (
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Plano Atual
              </h2>
              
              <div className="p-6 border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      Plano Pro
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Faturamento mensal
                    </p>
                  </div>
                  <span className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full">
                    Ativo
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      Todas as funcionalidades incluídas
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      Até 10 usuários
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Receipt className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      Relatórios avançados
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors">
                    Alterar Plano
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
} 