import { NoResults } from '@/components/ui/no-results'
import getProducts from '@/actions/get-products'

import { ProductCard } from './ui/product-card'

interface ProductListInterface {
  title: string
}

export async function ProductList({ title }: ProductListInterface) {
  const products = await getProducts({
    isFeatured: true,
  })

  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {products.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}
