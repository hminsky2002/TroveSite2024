import { HOME_QUERY } from "@/sanity/lib/queries";
import { getClient } from "../sanity/lib/client";
import { token } from "../sanity/lib/token";
import { cache } from 'react'

import Home from './_components/Home'

export default async function IndexPage() {
  const data = await getHome()
  return (
    <Home props={data}/>
  );
}

export const getHome = cache(async () => {
  const client = getClient(token);
  const data = await client.fetch(HOME_QUERY);
  return {
    data
  };
})

