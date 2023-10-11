import { AecProduct } from '@/lib/aec'

interface CartStore {
  items: Array<AecProduct>
  addItem: (data: AecProduct) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

export const useServerCart = (): CartStore => {
  const items: Array<AecProduct> = []

  const addItem = async (_data: AecProduct) => {}

  const removeItem = async (_id: string) => {}

  const removeAll = async () => {}

  return {
    items,
    addItem,
    removeItem,
    removeAll,
  }
}
