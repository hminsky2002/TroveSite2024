import { getTriangle } from "../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
export default async function TrianglePage() {
  const data = await getTriangle();
  const components = {
    block: {
      normal: ({ children }) => <p>{children}</p>,
    },
  };
  return (
    <main>
      <PortableText value={data.blurb} components={components} />
    </main>
  );
}
