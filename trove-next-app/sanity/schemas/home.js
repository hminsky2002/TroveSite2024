import { ComposeIcon } from "@sanity/icons";

const home = {
  name: "home",
  title: "Home",
  icon: ComposeIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      title: "Bio",
      name: "bio",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name: "funImage",
      title: "Fun Image",
      type: "image",
    },
    {
      name: "transmissions",
      title: "Transmissions",
      type: "array",
      of: [{ type: "block" }]
    },
    {
      name:'email',
      title:'Email',
      type:'url'
    }
  ],
};

export default home