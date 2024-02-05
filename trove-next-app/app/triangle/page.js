import { getTriangle } from "../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
export default async function TrianglePage() {
  const data = await getTriangle();
  const components = {
    block: {
      normal: ({ children }) => <p className="text-3xl">{children}</p>,
    },
  };
  return (
    <main className="flex flex-col mx-auto	items-center text-center" style={{ maxWidth: "800px" }}>
      <h1 className="text-8xl">TRIANGLE</h1>
      <img src="./triangle.png" alt="trove triangle"/>
      <PortableText value={data.blurb} components={components} />
    </main>
  );
}
