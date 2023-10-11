import { ContentNotFound } from '@/components/content-not-found'
import { Container } from '@/components/ui/container'
import { getProduct } from '@/lib/aec'
// import { ProductDetails } from './components/product-details'
import Footer from '@/components/layout/footer'

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

  return (
    <>
      <div className="min-h-screen bg-white">
        <Container>
          <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              {/* <Gallery images={product.images} /> */}
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                {/* <ProductDetails product={product} /> */}
              </div>
            </div>
            {/* <hr className="my-10" /> */}
            {/* <ProductList title="Related Items" items={suggestedProducts} /> */}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}
