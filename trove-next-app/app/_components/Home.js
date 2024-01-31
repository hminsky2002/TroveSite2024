import {PortableText} from '@portabletext/react'
import Image from "next/image";
import Link from "next/link";

export default async function Home({props}) {
  const components = {
    block: {
      normal: ({children}) => <p>{children}</p>,
    },
  }
  console.log(props)
  return (
    <main>
      <p>pooooo</p>
        <PortableText value={props.bio} components={components}/>
        <Image src={props.image_url} alt="just a fun image"/>
        <PortableText value={props.transmissions} components={components}/>
        <Link src={props.email}>Join the email list</Link>
    </main>
  );
}

