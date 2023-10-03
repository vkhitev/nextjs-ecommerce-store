import type { Metadata } from 'next'

import Prose from '@/components/ui/prose'

export const runtime = 'edge'

export const revalidate = 43200 // 12 hours in seconds

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Terms & Conditions',
    description: 'Terms & Conditions',
    openGraph: {
      publishedTime: new Date(2023, 9, 3).toISOString(),
      modifiedTime: new Date(2023, 9, 3).toISOString(),
      type: 'article',
    },
  }
}

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit. Dictumst quisque sagittis purus sit amet volutpat consequat. Egestas diam in arcu cursus euismod. Sed faucibus turpis in eu mi bibendum. Consectetur libero id faucibus nisl. Quisque id diam vel quam elementum. Eros donec ac odio tempor orci dapibus ultrices. Turpis tincidunt id aliquet risus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.'

export default async function Page() {
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">Terms & Conditions</h1>
      <Prose className="mb-8" html={content} />
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(2023, 9, 3))}.`}
      </p>
    </>
  )
}
