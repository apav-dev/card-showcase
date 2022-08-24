import * as React from "react";
import { CardProps } from "@yext/search-ui-react";
import { HealthcareProfessional } from "../../../types/healthcare_professionals";
import { AiFillStar } from "react-icons/ai";
import { getDateFromNow } from "../../../util";
import SchedulingCalander from "../../SchedulingCalander";
import TimeSlots from "../../TimeSlots";

const DoctorCard = ({ result }: CardProps<HealthcareProfessional>) => {
  const doctor = result.rawData;
  const headshotUrl =  doctor.headshot?.url;
  const specialty = doctor.c_speciality?.[0].name;

  return (
    <div className="card flex flex-col lg:flex-row justify-between border-t rounded-sm border-0.5 py-6">
      <div className="flex">
      {headshotUrl &&
      <div className="rounded-2xl pl-4">
        {/* TODO: replace with image */}
        <img className="rounded-2xl aspect-square w-24" src={headshotUrl} />
      </div>}
      <div className="flex flex-col pl-4">
        <span className="text-xl font-semibold">{doctor.name}</span>
        <span>{specialty}</span>
        <div className="flex items-center">
          {/* TODO: add info to KG and pull from entities */}
          <AiFillStar className="pr-1 text-primary" size={24}/>
          <div>4.90</div>
          <div className="pl-1">{"(190}"}</div>
        </div>
      </div>
      </div>
      <div>
        <div className="hidden lg:block">{`${getDateFromNow(0)} - ${getDateFromNow(6)}`}</div>
        <div className="hidden lg:block"><SchedulingCalander /></div>
        <div className="lg:hidden pl-4 pt-2"><TimeSlots /></div>
      </div>
    </div>
  );
};

export default DoctorCard;