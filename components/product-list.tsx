import getProducts from '@/actions/get-products'

import { ProductListClient } from './product-list-client'

interface ProductListInterface {
  title: string
}

export async function ProductList({ title }: ProductListInterface) {
  const products = await getProducts({
    isFeatured: true,
  })

  return <ProductListClient title={title} products={products} />
}
