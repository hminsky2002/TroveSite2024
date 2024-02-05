import { getTreasure } from "../../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
export default async function IndexPage() {
  const data = await getTreasure();
  const components = {
    block: {
      normal: ({ children }) => <p className="text-lg">{children}</p>,
    },
  };
  return (
    <main className="flex flex-col mx-auto	items-center text-center" style={{ maxWidth: "800px" }}>
      <div className="flex flex-col items-center" >
        <h1 className="text-3xl">TREASURES</h1>
        <div className="text-xl mx-auto	items-center" style={{ maxWidth: "800px" }}>
          <PortableText value={data.blurb} components={components} />
        </div>{" "}
        {/* Center items and stack them vertically */}
        {data.cards.map((card) => (
          <div
            className="sm:flex-row md:flex items-center space-x-4 p-4 max-w-5xl w-full transition-all"
            key={card.id}
            style={{ maxWidth: "1100px" }}
          >
            <img
              className="mx-auto sm:w-1/4 w-3/4 h-auto object-cover"
              src={card.image}
              alt="card image"
            />{" "}
            <div className="flex-1 md:order-first md:text-left">
              {" "}
              <h1 className="text-2xl font-bold">{card.title}</h1>
              <h3 className="text-md text-gray-500	">{card.authors}</h3>
              <PortableText
                value={card.info}
                components={components}
                className="max-w-xs"
              />{" "}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
