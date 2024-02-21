import { getTrinkets } from "../../sanity/sanity-utils";
import Carousel from "../_componets/carousel";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
export default async function IndexPage() {
  const data = await getTrinkets();
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
      <h1 className="text-3xl md:text-6xl">TRINKETS</h1>

      <PortableText value={data.top_bio} components={components} />

      <Carousel props={data.cards} />
      <p className="mx-auto flex items-center justify-center text-xl md:text-2xl">
        swipe here
      </p>
      <PortableText value={data.bottom_bio} components={components} />
      <Link href={data.email} passHref>
        <Image
          className="items-center justify-center mx-auto"
          width={200}
          height={200}
          src={data.button_image}
          alt="card image"
        />
      </Link>
    </main>
  );
}
