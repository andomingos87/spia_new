'use client'

import { usePathname } from 'next/navigation'
import { useNavigation } from '@/hooks/useNavigation'

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string | ((props: { isActive: boolean }) => string)
}

export function Link({ href, children, className = '' }: LinkProps) {
  const pathname = usePathname()
  const navigate = useNavigation()
  const isActive = pathname === href

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate.push(href)
  }

  const classNameValue = typeof className === 'function' ? className({ isActive }) : className

  return (
    <a href={href} onClick={handleClick} className={classNameValue}>
      {children}
    </a>
  )
} 