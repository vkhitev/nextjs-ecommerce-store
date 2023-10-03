'use client'

import { Billboard as BillboardType } from '@/types'

export interface BillboardProps {
  billboard: BillboardType
}

export function BillboardClient({ billboard }: BillboardProps) {
  return (
    <div className="overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
      <div
        className="relative aspect-square overflow-hidden rounded-xl bg-cover md:aspect-[2.4/1]"
        style={{ backgroundImage: `url(${billboard.imageUrl})` }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
          <div className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl">
            {billboard.label}
          </div>
        </div>
      </div>
    </div>
  )
}
