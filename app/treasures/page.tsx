import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { sanityFetch } from '@/sanity/lib/client';
import { TREASURE_QUERYResult } from '@/sanity.types';
import { TREASURE_QUERY } from '@/sanity/lib/queries';
import { components } from '../utils';

export default async function TreasuresPage() {
  const data = await sanityFetch<TREASURE_QUERYResult>({
    query: TREASURE_QUERY,
  });

  return (
    <main
      className="mx-auto flex flex-col items-center text-center"
      style={{ maxWidth: '800px' }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-6xl">TREASURES</h1>
        <div
          className="text-l items-center sm:text-xl"
          style={{ maxWidth: '800px' }}
        >
          {data?.blurb && (
            <PortableText value={data.blurb} components={components} />
          )}
        </div>{' '}
        {data?.cards &&
          data.cards.map((card) => (
            <div
              className="w-full max-w-5xl items-center space-x-4 p-4 transition-all sm:flex-row md:flex"
              key={card.id}
              style={{ maxWidth: '1100px' }}
            >
              {card?.image && (
                <Image
                  className="mx-auto h-auto w-3/4 object-cover p-10 sm:w-2/4"
                  width={400}
                  height={400}
                  src={card.image}
                  alt="card image"
                />
              )}{' '}
              <div className="flex-1 md:order-first md:text-left">
                {' '}
                <h1 className="text-2xl font-bold">{card.title}</h1>
                <h3 className="text-md text-gray-500">{card.authors}</h3>
                {card?.info && (
                  <PortableText value={card.info} components={components} />
                )}{' '}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
