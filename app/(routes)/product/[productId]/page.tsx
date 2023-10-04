import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import { ContentNotFound } from '@/components/content-not-found'
import { Gallery } from '@/components/gallery'
import { Info } from '@/components/info'
import { ProductList } from '@/components/product-list'
import { ProductListClient } from '@/components/product-list-client'
import { Container } from '@/components/ui/container'

export const revalidate = 0

interface ProductPageProps {
  params: {
    productId: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId)

  if (product == null) {
    return <ContentNotFound />
  }

  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  })

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductListClient title="Related Items" products={suggestedProducts} />
        </div>
      </Container>
    </div>
  )
}
