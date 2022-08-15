import * as React from "react";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Reference",
    url: "https://hitchhikers.yext.com/docs/search/",
  },
  {
    label: "Guide",
    url: "https://hitchhikers.yext.com/docs/search/",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div
      className="text-primary hover:text-primary-focus hover:border-b-2 border-transparent hover:border-primary"
      key={link.label}
    >
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <>
      <div className="centered-container">
        <div className="flex flex-col md:flex-row justify-between pt-6">
          <div className="text-4xl text-primary">
            Yext Search Result Card Showcase
          </div>
          <div className="flex gap-x-6 text-lg font-semibold items-center py-2 md:py-0">
            {linkDoms}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
