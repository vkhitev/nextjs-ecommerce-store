'use client'

import { useEffect, useState } from 'react'

import { Container } from '@/components/ui/container'
import { useCart } from '@/hooks/use-cart'
import { CartItem } from '../../cart/components/cart-item'
import { Summary } from '../../cart/components/summary'

export const CheckoutPageClient = () => {
  const [isMounted, setIsMounted] = useState(false)
  const cart = useCart()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Checkout</h1>

        <h1 className="text-3xl font-bold text-black">Contact information</h1>
        <label>Email</label>
        <input />

        <h1 className="text-3xl font-bold text-black">Shipping address</h1>
        <div>
          <label>First name</label>
          <input />

          <label>Last name</label>
          <input />
        </div>

        <h1 className="text-3xl font-bold text-black">Order list</h1>
        <div className="mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
            <ul>
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  )
}
