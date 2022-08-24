import * as React from "react";
import { VerticalResults } from "@yext/search-ui-react";
import { HealthcareProfessional } from "../../../types/healthcare_professionals";
import DoctorCard from "../cards/DoctorCard";

const DoctorResults = (): JSX.Element => ( 
  <VerticalResults<HealthcareProfessional> CardComponent={DoctorCard}             
  />
);

export default DoctorResults;
