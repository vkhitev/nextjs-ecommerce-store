// import { revalidate } from 'lib/shopify'
import { NextRequest, NextResponse } from 'next/server'

// Stub
const revalidate = async (req: any): Promise<any> => {
  console.log(req)
  return NextResponse.json({ not_implemented: true })
}

export const runtime = 'edge'

// This is a webhook to revalidate cached data when it's changed on the server.
export async function POST(req: NextRequest): Promise<NextResponse> {
  return revalidate(req)
}
