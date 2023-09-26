import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import { Billboard } from '@/components/billboard'
import { ContentNotFound } from '@/components/content-not-found'
import { ProductList } from '@/components/product-list'
import { Container } from '@/components/ui/container'

export const revalidate = 0

export default async function HomePage() {
  const products = await getProducts({
    isFeatured: true,
  })

  const billboard = await getBillboard('928431e4-9782-44d5-a72e-58d3daf73b3d')

  if (billboard == null) {
    return <ContentNotFound />
  }

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}
