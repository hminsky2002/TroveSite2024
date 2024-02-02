import { getTreasure } from "../../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
export default async function IndexPage() {
  const data = await getTreasure();
  const components = {
    block: {
      normal: ({ children }) => <p>{children}</p>,
    },
  };
  return (
    <main>
      <PortableText value={data.blurb} components={components} />
      <div>
        {data.cards.map((card) => (
          <div className="container" key={card.id}>
            <h2>{card.title}</h2>
            <h3>{card.authors}</h3>
            <PortableText value={card.info} components={components} />
            <img className="h-3/12 w-3/12" src={card.image} alt="card image" />
          </div>
        ))}
      </div>
    </main>
  );
}
