import { getHome } from "../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
export default async function IndexPage() {
  const data = await getHome();
  const components = {
    block: {
      normal: ({ children }) => {
        if (children.length === 1 && children[0] === "") {
          return <br />;
        } else return <p className="text-l md:text-2xl">{children}</p>;
      },
    },
  };

  return (
    <main
      className="flex flex-col mx-auto	items-center text-center"
      style={{ maxWidth: "800px" }}
    >
      <h1 className="text-3xl md:text-6xl">TROVE</h1>
      <PortableText value={data.bio} components={components} />

      <Image
        src={data.image}
        width={200}
        height={200}
        alt="just a fun image"
        className="mt-2"
      />
      <PortableText value={data.transmissions} components={components} />

      <Link
        href={data.email}
        className="pt-4 pb-4 text-6xl hover:text-green-400 transition-colors"
      >
        join email list
      </Link>
      <Image
        src={data.emailImage}
        width={200}
        height={200}
        alt="just a fun image"
      />
    </main>
  );
}
