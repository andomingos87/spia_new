import { createBrowserClient } from '@supabase/ssr'
import { AuthError } from '@/types/auth'

export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export const handleAuthError = (error: unknown): AuthError => {
  if (error instanceof Error) {
    return {
      message: error.message,
    }
  }

  return {
    message: 'Ocorreu um erro inesperado',
  }
}

export const formatAuthErrorMessage = (error: AuthError): string => {
  switch (error.message.toLowerCase()) {
    case 'invalid login credentials':
      return 'Email ou senha inválidos'
    case 'email not confirmed':
      return 'Email não confirmado. Verifique sua caixa de entrada'
    case 'user not found':
      return 'Usuário não encontrado'
    case 'email already in use':
      return 'Este email já está em uso'
    default:
      return error.message
  }
} 