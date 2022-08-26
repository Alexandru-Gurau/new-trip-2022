import { createContext, useState } from 'react';

export const LinkContext = createContext({
  linkPage: 0,
  setLinkPage: () => {},
});

export const LinkProvider = ({ children }) => {
  const [linkPage, setLinkPage] = useState(5);
  const value = { linkPage, setLinkPage };

  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
};
