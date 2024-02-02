import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getHome() {
  return client.fetch(
    groq`*[_type == "home"][0]{
            bio,
            "image": funImage.asset->url,
            transmissions,
            email
        }`
  );
}

export async function getTreasure() {
  return client.fetch(
    groq`*[_type == "treasures"][0]{
        "blurb" : treasures_blurb,
        "cards": treasure_cards[]->{
            id,
            title,
            authors,
            info,
            "image": image.asset->url
        }
    }`
  );
}
