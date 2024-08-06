import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import Carousel from '@/components/Carousel';
import { TRINKETS_QUERYResult } from '@/sanity.types';
import { TRINKETS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/client';
import { components } from '../utils';

export default async function IndexPage() {
  const data = await sanityFetch<TRINKETS_QUERYResult>({
    query: TRINKETS_QUERY,
  });

  return (
    <main
      className="mx-auto flex flex-col items-center text-center"
      style={{ maxWidth: '800px' }}
    >
      <h1 className="text-3xl md:text-6xl">TRINKETS</h1>

      {data?.top_bio && (
        <PortableText value={data.top_bio} components={components} />
      )}

      {data?.cards && <Carousel props={data.cards} />}
      <p className="mx-auto flex items-center justify-center text-xl md:text-2xl">
        swipe here
      </p>
      {data?.bottom_bio && (
        <PortableText value={data.bottom_bio} components={components} />
      )}
      {data?.email && data?.button_image && (
        <Link href={data.email} passHref>
          <Image
            className="mx-auto items-center justify-center"
            width={200}
            height={200}
            src={data.button_image}
            alt="card image"
          />
        </Link>
      )}
    </main>
  );
}
