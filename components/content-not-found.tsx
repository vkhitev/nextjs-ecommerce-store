import Link from 'next/link'

export const ContentNotFound = () => {
  return (
    <div className="p-8 text-center">
      <p className="text-2xl">Content not found</p>
      <p className="mt-2 underline">
        <Link href="/">Back to main page</Link>
      </p>
    </div>
  )
}
