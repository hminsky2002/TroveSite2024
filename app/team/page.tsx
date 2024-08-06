import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { sanityFetch } from '@/sanity/lib/client';
import { TEAM_QUERYResult } from '@/sanity.types';
import { TEAM_QUERY } from '@/sanity/lib/queries';
import { components } from '../utils';

export default async function TeamPage() {
  const data = await sanityFetch<TEAM_QUERYResult>({ query: TEAM_QUERY });

  return (
    <main
      className="mx-auto flex flex-col items-center text-center"
      style={{ maxWidth: '800px' }}
    >
      <div className="flex flex-col items-center mb-10">
        <h1 className="mb-4 text-3xl md:text-6xl">TEAM</h1>
        <div
          className="mx-auto items-center text-xl"
          style={{ maxWidth: '800px' }}
        ></div>{' '}
        {/* Center items and stack them vertically */}
        {data?.cards &&
          data.cards.map((card) => (
            <div
              className="w-full max-w-5xl items-center space-x-4 p-4 transition-all sm:flex-row md:flex"
              key={card.id}
              style={{ maxWidth: '1100px' }}
            >
              {card?.image && (
                <Image
                  className="mx-auto h-auto w-3/4 object-cover sm:w-1/4 sm:pl-10"
                  height={400}
                  width={400}
                  src={card.image}
                  alt="card image"
                />
              )}{' '}
              <div className="flex-1 md:order-first md:text-left">
                {' '}
                <h1 className="text-2xl font-bold">{card.name}</h1>
                <h3 className="text-md text-gray-500">{card.role}</h3>
                {card?.bio && (
                  <PortableText value={card.bio} components={components} />
                )}{' '}
              </div>
            </div>
          ))}
      </div>
      <div className='border-t-4 border-black'>
      {data?.affiliatesBlurb && (
        <PortableText value={data.affiliatesBlurb} components={components} />
      )}
      </div>
      <div className='text-left'>
      {data?.affiliatesList && (
        <div>
          <ul className='list-disc text-xl inconsolata'>
            {data.affiliatesList.map((affiliate) => (
              <li key={affiliate.link}>
                <a href={affiliate?.link ?? ''}>{affiliate?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </main>
  );
}
