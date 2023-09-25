import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { Product } from '@/types'
import toast from 'react-hot-toast'

interface CartStore {
  items: Array<Product>
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === data.id)
        if (existingItem) {
          return toast('Items already in cart.')
        }
        set({ items: [...get().items, data] })
        toast.success('Item added to cart.')
      },
      removeItem: (id) => {
        set({
          items: [...get().items.filter((item) => item.id !== id)],
        })
        toast.success('Item removed from the cart.')
      },
      removeAll: () => {
        set({ items: [] })
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
