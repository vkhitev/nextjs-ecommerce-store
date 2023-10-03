import getBillboard from '@/actions/get-billboard'
import { BillboardClient } from './billboard-client'

export async function Billboard() {
  const billboard = await getBillboard('928431e4-9782-44d5-a72e-58d3daf73b3d')

  if (billboard == null) {
    return null
  }

  return <BillboardClient billboard={billboard} />
}
