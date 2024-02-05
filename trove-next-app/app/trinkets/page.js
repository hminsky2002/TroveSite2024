import { getTrinkets } from "../../sanity/sanity-utils";
import Carousel from "../_componets/carousel";
import { PortableText } from "@portabletext/react";
export default async function IndexPage() {
  const data = await getTrinkets();
  const components = {
    block: {
      normal: ({ children }) => <p className="text-2xl">{children}</p>,
    },
  };
  console.log(data);
  return (
    <main className="flex flex-col mx-auto	items-center text-center" style={{ maxWidth: "800px" }}>
      <h1 className="text-8xl">TRINKETS</h1>

      <PortableText value={data.top_bio} components={components} />
      
      <Carousel props={data.cards} />
      <h3 className="mx-auto flex items-center justify-center">swipe here</h3>
      <PortableText value={data.bottom_bio} components={components} />
      <img className="h-1/12 w-1/12 items-center justify-center mx-auto" src={data.button_image} alt="card image" />
    </main>
  );
}
