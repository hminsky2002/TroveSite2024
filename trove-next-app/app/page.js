import { getHome } from "../sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Logo from "./_componets/logo";
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
      <div
        className="flex mx-auto items-center text-center "
        style={{ maxWidth: "200px" }}
      >
        <Logo />
      </div>
      <h1 className="text-3xl md:text-9xl font-extrabold">Trove</h1>
      <PortableText value={data.bio} components={components} />
      <p id="message" className="text-xl md:text-2xl">
        Trove forver!
      </p>
      <Image src={data.image} width={200} height={200} alt="just a fun image" />
      <PortableText value={data.transmissions} components={components} />

      <Image
        src={data.emailImage}
        width={200}
        height={200}
        alt="just a fun image"
      />
      <a
        href={data.email}
        className="pt-4 pb-4 text-6xl hover:text-green-400 transition-colors"
      >
        Join email list
      </a>
    </main>
  );
}
