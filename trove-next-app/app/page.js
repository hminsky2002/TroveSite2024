
import { getHome } from "../sanity/sanity-utils";
import { cache } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default async function IndexPage() {
  const data = await getHome();
  const components = {
    block: {
      normal: ({ children }) => <p>{children}</p>,
    },
  };
  return (
    <main>
      <PortableText value={data.bio} components={components}/>
      <img src={data.image} alt="just a fun image"/>
      <PortableText value={data.transmissions} components={components}/>
      <a href={data.email}>join email list</a>
    </main>
  );
}
