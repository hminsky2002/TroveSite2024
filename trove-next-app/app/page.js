
import { getHome } from "../sanity/sanity-utils";
import Image from "next/image"
import { PortableText } from "@portabletext/react";

export default async function IndexPage() {
  const data = await getHome();
  const components = {
    block: {
      normal: ({ children }) => <p className="text-3xl">{children}</p>,
    },
  };
  return (
    <main className="flex flex-col mx-auto	items-center text-center" style={{ maxWidth: "800px" }}>
      <div className="flex">
      <img src="/logo.png" alt="trove logo" className="w-40 h-40"/>
        <p className="text-9xl font-extrabold">Trove</p>
      </div>
      <PortableText value={data.bio} components={components}/>
      <img src={data.image} alt="just a fun image"/>
      <PortableText value={data.transmissions} components={components}/>
      <a href={data.email} className="pt-4 pb-4 text-6xl hover:text-green-400 transition-colors">join email list</a>
    </main>
  );
}
