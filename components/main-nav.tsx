'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { AecCategory } from '@/lib/aec'

interface MainNavProps {
  categories: Array<AecCategory>
}

export const MainNav = ({ categories }: MainNavProps) => {
  const pathname = usePathname()

  const routes = categories.map((category) => ({
    href: `/search/${category.categoryId}`,
    label: category.name,
    active: pathname === `/search/${category.categoryId}`,
  }))

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500',
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
