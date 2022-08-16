import * as React from "react";
import { CardProps } from "@yext/search-ui-react";
import { Movie } from "../../../types/movies";

const MovieCard = ({ result }: CardProps<Movie>) => {
  const movie = result.rawData;
  const moviePosterUrl = movie.c_poster ? movie.c_poster.image.url : "";

  return (
    <div className="relative w-60  rounded-2xl shadow-xl">
      <figure className="h-full w-full rounded-2xl">
        {/* TODO: replace with image */}
        <img className="rounded-2xl" src={moviePosterUrl} />
      </figure>
      <div className="absolute bottom-0 left-0 right-0  h-24  bg-base-200 opacity-90">
        <div className="w-full">
          <div className="py-1.5 pl-2">
            <h2 className="text-base font-semibold text-base-content line-clamp-1">{movie.name.toUpperCase()}</h2>
            <div className="flex items-center py-2 text-xs">
              <figure className="h-4 w-8 ">
                {/* TODO: replace with image */}
                <img src={"https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"} />
              </figure>
              <div className="pl-1 pr-4">7.5/10</div>
              <figure className="h-4 w-6 pl-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/2019px-Rotten_Tomatoes.svg.png" />
              </figure>
              <div className="pl-1">91%</div>
            </div>
            <div>
              {movie.c_genres?.slice(0, 3).map((genre) => (
                <span key={genre} className="mr-1 rounded-full bg-neutral px-2 py-1 text-xs text-neutral-content">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
