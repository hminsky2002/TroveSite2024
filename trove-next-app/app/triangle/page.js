import { getTriangle } from "../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
export default async function TrianglePage() {
  const data = await getTriangle();
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
      className="flex flex-col sm:mx-auto	items-center text-center mx-10"
      style={{ maxWidth: "800px" }}
    >
      <h1 className="text-3xl md:text-9xl font-extrabold">TRIANGLE</h1>
      <Image
        src={"/triangle.png"}
        width={600}
        height={600}
        alt="trove triangle"
      />
      <PortableText value={data.blurb} components={components} />
    </main>
  );
}
