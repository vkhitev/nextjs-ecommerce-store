import getCategory from '@/actions/get-category'
import getColors from '@/actions/get-colors'
import getProducts from '@/actions/get-products'
import getSizes from '@/actions/get-sizes'
import { Billboard } from '@/components/billboard'

import { Filter } from './components/filter'
import { NoResults } from '@/components/ui/no-results'
import { ProductCard } from '@/components/ui/product-card'
import { MobileFilters } from './components/mobile-filters'
import { ContentNotFound } from '@/components/content-not-found'

export const revalidate = 0

interface CategoryPageProps {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const [products, sizes, colors, category] = await Promise.all([
    getProducts({
      categoryId: params.categoryId,
      colorId: searchParams.colorId,
      sizeId: searchParams.sizeId,
    }),
    getSizes(),
    getColors(),
    getCategory(params.categoryId),
  ])

  if (category == null) {
    return <ContentNotFound />
  }

  return (
    <div className="bg-white">
      <Billboard data={category.billboard} />
      <div className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          {/* Add mobile filters */}
          <MobileFilters sizes={sizes} colors={colors} />
          <div className="hidden lg:block">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
