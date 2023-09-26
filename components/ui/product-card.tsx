'use client'

import Image from 'next/image'
import { ExpandIcon, ShoppingCartIcon } from 'lucide-react'
import { MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'

import { Product } from '@/types'
import { IconButton } from '@/components/ui/icon-button'
import { Currency } from '@/components/ui/currency'
import { usePreviewModal } from '@/hooks/use-preview-modal'
import { useCart } from '@/hooks/use-cart'

interface ProductCardProps {
  data: Product
}

export const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter()
  const previewModal = usePreviewModal()
  const cart = useCart()

  const handleClick = () => {
    router.push(`/product/${data.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    previewModal.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    cart.addItem(data)
  }

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
    >
      {/* Images anc Actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data.images[0]!.url}
          fill
          alt="Image"
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<ExpandIcon size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCartIcon size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  )
}
