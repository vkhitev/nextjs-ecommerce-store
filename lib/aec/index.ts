// import { TAGS } from '../constants'
import { ensureStartsWith } from '../utils'
// import { Product, ShopifyProductsOperation } from './types'

const domain = process.env.NEXT_PUBLIC_API_URL
  ? ensureStartsWith(process.env.NEXT_PUBLIC_API_URL, 'https://')
  : ''

export async function aecFetch<T>({
  cache = 'force-cache',
  method,
  path,
  headers,
  body,
  tags, // variables,
}: {
  cache?: RequestCache
  method: string
  path: string
  headers?: HeadersInit
  body: any
  tags?: string[]
  // variables?: ExtractVariables<T>
}): Promise<{ status: number; body: T } | never> {
  try {
    const result = await fetch(`${domain}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        // 'X-Shopify-Storefront-Access-Token': key,
        ...headers,
      },
      body: JSON.stringify(body),
      cache,
      ...(tags && { next: { tags } }),
    })

    const json = await result.json()

    if (json.errors) {
      throw json.errors[0]
    }

    return {
      status: result.status,
      body: json,
    }
  } catch (e) {
    // if (isShopifyError(e)) {
    //   throw {
    //     cause: e.cause?.toString() || 'unknown',
    //     status: e.status || 500,
    //     message: e.message,
    //     query,
    //   }
    // }

    throw {
      error: e,
      // query,
    }
  }
}

// export async function getProducts({
//   query,
//   reverse,
//   sortKey,
// }: {
//   query?: string
//   reverse?: boolean
//   sortKey?: string
// }): Promise<Product[]> {
//   const res = await aecFetch<ShopifyProductsOperation>({
//     method: 'GET',
//     path: '/products',
//     body: {
//       query,
//       reverse,
//       sortKey,
//     },
//     tags: [TAGS.products],
//   })

//   // return reshapeProducts(removeEdgesAndNodes(res.body.data.products))
// }

export type AecCategory = {
  categoryId: string
  organizationId: string
  name: string
  active: boolean
  createdAt: string
  parentCategoryId: string | null
  subCategories: Array<AecCategory>
}

export async function getCategories(): Promise<AecCategory[]> {
  const res = await fetch('http://192.168.88.14:7081/core/storefront/categories')
  return res.json()
}

export type AecProduct = {
  productId: string
  organizationId: string
  createdAt: string
  name: string
  status: string
  unit: {
    unitId: string
    organizationId: string
    name: string
    createdAt: string
  }
  category: {
    categoryId: string
    organizationId: string
    name: string
    active: boolean
    createdAt: string
  }
  productVariants: Array<{
    productVariantId: string
    name: string
    price: string
    sku: string | null
    barcode: string | null
    description: string | null
    imageIds: Array<string>
    productCriteriaOption: Array<string>
    productCriteria: Array<string>
    inventories: Array<{
      inventoryId: string
      quantityInStock: string
      minimumQuantity: string | null
      reservedQuantity: string
      updatedAt: string
      warehouse: Array<{
        warehouseId: string
        organizationId: string
        name: string
        address: string
        country: string
        city: string
        phone: string
        active: boolean
        createdAt: string
      }>
    }>
  }>
}

export async function getProduct(productId: string): Promise<AecProduct | null> {
  const res = await fetch(`http://192.168.88.14:7081/core/storefront/products/${productId}`)
  if (res.status === 404) {
    return null
  }
  return res.json()
}
