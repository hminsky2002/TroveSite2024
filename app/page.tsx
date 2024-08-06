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
          className="mt-2"
        />
      )}
      {data?.transmissions && (
        <PortableText value={data.transmissions} components={components} />
      )}
      {data?.email && (
        <Link
          href={data.email}
          className="pb-4 pt-4 text-6xl transition-colors hover:text-green-400"
        >
          join email list
        </Link>
      )}
      {data?.emailImage && (
        <Image
          src={data.emailImage}
          width={200}
          height={200}
          alt="just a fun image"
        />
      )}
    </main>
  );
}
