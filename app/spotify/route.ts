import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  // Check if there is code in the request
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  return NextResponse.json(code)
}
