import { getTrinkets } from "../../sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
export default async function IndexPage() {
  const data = await getTrinkets();
  const components = {
    block: {
      normal: ({ children }) => <p>{children}</p>,
    },
  };
  return (
    <main>
      <PortableText value={data.top_bio} components={components} />
      <div>
        {data.trinkets.map((trinket) => (
          <div className="container" key={trinket.id}>
            <img className="h-3/12 w-3/12" src={trinket.url} alt="card image" />
          </div>
        ))}
      </div>
      <PortableText value={data.bottom_bio} components={components} />
      <img className="h-1/12 w-1/12" src={data.button_image} alt="card image" />
    </main>
  );
}
