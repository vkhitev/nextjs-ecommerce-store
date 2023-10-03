import Link from 'next/link'

import { MainNav } from '@/components/main-nav'
import getCategories from '@/actions/get-categories'
import { NavbarActions } from '@/components/navbar-actions'
import Search from './search'

export const Navbar = async () => {
  const categories = await getCategories()

  return (
    <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
      <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
        <p className="text-xl font-bold">STORE</p>
      </Link>
      <MainNav data={categories} />
      <div className="hidden justify-center md:flex md:w-1/3">
        <Search />
      </div>
      <NavbarActions />
    </div>
  )
}
