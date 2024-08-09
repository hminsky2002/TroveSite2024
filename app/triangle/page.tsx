import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { TRIANGLE_QUERY } from '@/sanity/lib/queries';
import { TRIANGLE_QUERYResult } from '@/sanity.types';
import { sanityFetch } from '@/sanity/lib/client';
import { components } from '../utils';

export default async function TrianglePage() {
  const data = await sanityFetch<TRIANGLE_QUERYResult>({
    query: TRIANGLE_QUERY,
    tags: ['triangle'],
  });

  return (
    <main
      className="mx-10 flex flex-col items-center text-center sm:mx-auto"
      style={{ maxWidth: '800px' }}
    >
      <h1 className="text-3xl md:text-6xl">TRIANGLE</h1>
      <Image
        src={'/triangle.png'}
        width={600}
        height={600}
        alt="trove triangle"
        className="mt-2"
      />
      {data?.blurb && (
        <div className="mt-2 text-left">
          <PortableText value={data.blurb} components={components} />
        </div>
      )}
    </main>
  );
}
