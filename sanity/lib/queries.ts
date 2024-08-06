import { groq } from 'next-sanity';

const HOME_QUERY = groq`*[_type == "home"][0]{
            bio,
            "image": funImage.asset->url,
            transmissions,
            "emailImage": emailImage.asset->url,
            donationBlock,
            "donationButton": donationButton.asset->url,
            "lowerImage": lowerImage.asset->url
        }`;

const TREASURE_QUERY = groq`*[_type == "treasures"][0]{
        "blurb" : treasures_blurb,
        "donationButton": donationButton.asset->url,
        "upperImage": upperImage.asset->url,
        "cards": treasure_cards[]->{
          "id":_id,
            title,
            authors,
            info,
            "image": image.asset->url
        }
    }`;

const TRINKETS_QUERY = groq`*[_type == "trinkets"][0]{
        top_bio,
        "cards": trinket_cards[]->{
          "id":_id,
          title,
          "image": image.asset->url,
          info
        },
        email,
        "bottom_bio":Bottom_bio,
        "button_image": button_image.asset->url
    }`;

const TEAM_QUERY = groq`*[_type == "team"][0]{
          blurb,
          "cards": team_cards[]->{
              "id":_id,
              name,
              role,
              bio,
              "image": image.asset->url
          },
          affiliatesBlurb,
          "affiliatesList": affiliatesList[]->{
            name,
            link
          }
      }`;

const TRIANGLE_QUERY = groq`*[_type == "triangle"][0]{
          "blurb":triangle_blurb
      }`;

export {
  HOME_QUERY,
  TREASURE_QUERY,
  TRINKETS_QUERY,
  TEAM_QUERY,
  TRIANGLE_QUERY,
};
