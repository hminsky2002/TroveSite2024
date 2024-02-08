import { getTeam } from "../../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
export default async function TeamPage() {
  const data = await getTeam();
  const components = {
    block: {
      normal: ({ children }) => {
        if (children.length === 1 && children[0] === "") {
          return <br />;
        } else return <p className="text-l md:text-xl">{children}</p>;
      },
    },
  };
  return (
    <main
      className="flex flex-col mx-auto	items-center text-center"
      style={{ maxWidth: "800px" }}
    >
      <PortableText value={data.blurb} components={components} />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">TEAM</h1>
        <div
          className="text-xl mx-auto	items-center"
          style={{ maxWidth: "800px" }}
        >
          <PortableText value={data.blurb} components={components} />
        </div>{" "}
        {/* Center items and stack them vertically */}
        {data.cards.map((card) => (
          <div
            className="sm:flex-row md:flex items-center space-x-4 p-4 max-w-5xl w-full transition-all"
            key={card.id}
            style={{ maxWidth: "1100px" }}
          >
            <Image
              className="mx-auto sm:w-1/4 w-3/4 h-auto object-cover"
              height={400}
              width={400}
              src={card.image}
              alt="card image"
            />{" "}
            <div className="flex-1 md:order-first  md:text-left">
              {" "}
              <h1 className="text-2xl font-bold">{card.name}</h1>
              <h3 className="text-md text-gray-500	">{card.role}</h3>
              <PortableText
                value={card.bio}
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
