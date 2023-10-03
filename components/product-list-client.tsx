'use client'

import { NoResults } from '@/components/ui/no-results'

import { ProductCard } from './ui/product-card'
import { Product } from '@/types'

interface ProductListInterface {
  title?: string
  products: Product[]
}

export async function ProductListClient({ title, products }: ProductListInterface) {
  return (
    <div className="space-y-4">
      {title ? <h3 className="text-3xl font-bold">{title}</h3> : null}
      {products.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}
