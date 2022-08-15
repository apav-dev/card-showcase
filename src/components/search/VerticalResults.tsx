import * as React from "react";
import {
  VerticalResults as VR,
  CardComponent,
  StandardCard,
  VerticalResultsCssClasses,
} from "@yext/search-ui-react";
import SearchExperience from "./SearchExperience";

export interface VerticalResultsProps {
  verticalKey: string;
  label?: string;
  CardComponent?: CardComponent;
  customCssClasses?: VerticalResultsCssClasses;
}

export const VerticalResults = ({
  verticalKey,
  label,
  CardComponent,
  customCssClasses,
}: VerticalResultsProps): JSX.Element => {
  return (
    <SearchExperience
      verticalKey={verticalKey}
      headlessId={`${verticalKey}_searcher`}
    >
      <VR customCssClasses={customCssClasses} CardComponent={StandardCard} />
    </SearchExperience>
  );
};
