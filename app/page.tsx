import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { HOME_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/client';
import { components } from './utils';
import type { HOME_QUERYResult } from '@/sanity.types';

export default async function IndexPage() {
  const data = await sanityFetch<HOME_QUERYResult>({ query: HOME_QUERY });

  return (
    <main
      className="mx-auto flex flex-col items-center text-center"
      style={{ maxWidth: '800px' }}
    >
      <h1 className="text-3xl md:text-6xl">TROVE</h1>
      {data?.bio && <PortableText value={data.bio} components={components} />}

      {data?.image && (
        <Image
          src={data.image}
          width={200}
          height={200}
          alt="just a fun image"
          className="mt-2 w-2/3 md:w-1/2"
        />
      )}
      {data?.donationBlock && (
        <PortableText value={data.donationBlock} components={components} />
      )}
      {data?.donationButton && (
        <Link href="https://www.classy.org/give/592001/#!/donation/checkout">
          <Image
            src={data.donationButton}
            width={200}
            height={200}
            alt="button for donations"
            className='mt-2'
          />
        </Link>
      )}
      {data?.lowerImage && (
        <Image
          src={data.lowerImage}
          width={200}
          height={200}
          alt="lower image for site"
          className="mt-8 w-2/3 md:w-1/2 mb-8"
        />
      )}
      {data?.transmissions && (
        <PortableText value={data.transmissions} components={components} />
      )}
      {data?.emailImage && (
        <Image
          src={data.emailImage}
          width={200}
          height={200}
          alt="just a fun image"
          className='mt-2'
        />
      )}
    </main>
  );
}
