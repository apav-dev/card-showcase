import { VerticalResultsProps } from "../components/search/VerticalResults";

type VerticalConfig = Record<string, Omit<VerticalResultsProps, "verticalKey">>;

const searchConfigs: VerticalConfig = {
  movies: {
    label: "Movies",
  },
  actors: {
    label: "Actors",
  },
};

export default searchConfigs;
