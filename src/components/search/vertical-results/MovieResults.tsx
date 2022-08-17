import * as React from "react";
import { VerticalResults } from "@yext/search-ui-react";
import { Movie } from "../../../types/movies";
import MovieCard from "../cards/MovieCard";

const MovieResults = (): JSX.Element => ( 
  <VerticalResults<Movie> CardComponent={MovieCard}             
    customCssClasses={{
    verticalResultsContainer:
      "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 grid-cols-1",
    }}
  />
);

export default MovieResults;
