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
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <>
      <div className="centered-container">
        <div className="flex justify-between py-6">
          <div className="text-4xl">Yext Search Result Card Showcase</div>
          <div className="flex gap-x-6 text-lg font-semibold items-center">
            {linkDoms}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
