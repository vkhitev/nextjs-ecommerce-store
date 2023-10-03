import { Billboard } from '@/components/billboard'
import Footer from '@/components/layout/footer'
import { ProductList } from '@/components/product-list'
import { Container } from '@/components/ui/container'
import { Suspense } from 'react'

export const revalidate = 0

export default async function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-10 pb-10">
          <Suspense>
            <Billboard />
          </Suspense>
          <Suspense>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
              <ProductList title="Featured Products" />
            </div>
          </Suspense>
        </div>
      </Container>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}
