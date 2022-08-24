import * as React from "react";
import { useEffect, useState } from "react";
import "../index.css";
import {
  Template,
  GetPath,
  TemplateConfig,
  GetHeadConfig,
  TemplateRenderProps,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import PageLayout from "../components/PageLayout";
import ThemeSwitch from "../components/ThemeSwitch";
import SearchExperience from "../components/search/SearchExperience";
import MovieResults from "../components/search/vertical-results/MovieResults";
import DoctorResults from "../components/search/vertical-results/DoctorResults";

export const config: TemplateConfig = {
  name: "card-showcase",
};

export const getPath: GetPath<TemplateProps> = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Yext Card Showcase",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const verticals: Record<string, { label: string; VerticalResults: () => JSX.Element }> = {
  movies: {
    label: "Movies",
    VerticalResults: MovieResults,
  },
  healthcare_professionals: {
    label: "Doctors",
    VerticalResults: DoctorResults
  },
}

const showcase: Template<TemplateRenderProps> = () => {
  const [activeVerticalKey, setActiveVerticalKey] = useState("");
  const [SearchResults, setSearchResults] = useState(() => <></>);

  // TODO: randomize 
  useEffect(() => {
    setActiveVerticalKey(Object.keys(verticals)[0]);
  }, []);

  useEffect(() => {
    setSearchResults(verticals[activeVerticalKey]?.VerticalResults);
  }, [activeVerticalKey])


  return (
    <>
      <PageLayout>
        <div className="centered-container">
          <div className="py-4 ">
            <p className="text-primary">
              Yext Search can be used to surface any type of entity from the
              Knowledge Graph. Each one of these entity types are represented in
              the UI by a unique result card. This site is designed to showcase
              some design ideas for different search result cards.
            </p>
          </div>
          <div className="flex py-4 justify-between">
            <ThemeSwitch />
            <div className="dropdown ">
              <label
                // TODO: look into tab index thing
                tabIndex={0}
                className="btn m-1 bg-base-100 text-primary hover:bg-base-300 border border-primary hover:border-primary"
              >
                {verticals[activeVerticalKey]?.label ?? activeVerticalKey}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {Object.keys(verticals)
                  .filter((vKey) => vKey !== activeVerticalKey)
                  .map((verticalKey) => (
                    <li key={verticalKey} className="">
                      <a
                        onClick={() => setActiveVerticalKey(verticalKey)}
                        className="btn bg-base-100 text-primary hover:bg-base-300 border border-primary hover:border-primary"
                      >
                        {verticals[verticalKey].label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <SearchExperience verticalKey={activeVerticalKey}>{SearchResults}</SearchExperience>
        </div>
      </PageLayout>
    </>
  );
};

export default showcase;
