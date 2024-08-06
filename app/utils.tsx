export const components = {
  block: {
    normal: ({ children }: any) => {
      if (children.length === 1 && children[0] === '') {
        return <br />;
      }
      return <p className="text-l md:text-xl">{children}</p>;
    },
  },
};
