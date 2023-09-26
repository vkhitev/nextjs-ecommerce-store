import Link from 'next/link'

export const ContentNotFound = () => {
  return (
    <div className="p-8 text-center">
      <p className="text-2xl">Content not found</p>
      <p className="underline mt-2">
        <Link href="/">Back to main page</Link>
      </p>
    </div>
  )
}
