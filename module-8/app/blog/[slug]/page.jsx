import React from 'react'

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return {
    title: `Blog ${slug}`,
    description: `Profile page for user ${slug}`,
    openGraph: {
      images: [
        {
          url: `/blog/${slug}/opengraph-image`,
        },
      ],
    },
  }
}

const SlugPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <div>SlugPage</div>
  )
}

export default SlugPage