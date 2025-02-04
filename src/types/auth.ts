export interface AuthUser {
  id: string
  email?: string
  user_metadata: {
    name?: string
  }
}

export interface AuthSession {
  user: AuthUser
  access_token: string
  refresh_token: string
}

export interface AuthError {
  message: string
  status?: number
} 