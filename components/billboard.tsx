import getBillboard from '@/actions/get-billboard'

export async function Billboard() {
  const billboard = await getBillboard('928431e4-9782-44d5-a72e-58d3daf73b3d')

  if (billboard == null) {
    return null
  }

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
