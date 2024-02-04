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

export async function getTrinkets() {
  return client.fetch(
    groq`*[_type == "trinkets"][0]{
        top_bio,
        trinkets[]{
          "url":asset->url
        },
        "bottom_bio":Bottom_bio,
        "button_image": button_image.asset->url
    }`
  );
}

export async function getTeam() {
    return client.fetch(
      groq`*[_type == "team"][0]{
          blurb,
          "cards": team_cards[]->{
              id,
              name,
              role,
              bio,
              "image": image.asset->url
          }
      }`
    )
};
export async function getTriangle() {
    return client.fetch(
      groq`*[_type == "triangle"][0]{
          "blurb":triangle_blurb
      }`
    )
};