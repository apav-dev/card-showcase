import * as React from "react";
import { v4 as uuid } from "uuid";

const TimeSlots = (): JSX.Element => {
  const times = ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
  return(
  <div className="flex space-x-1.5 overflow-x-auto ">
    {times.map((time) => (
      <div key={uuid()} className="bg-primary text-primary-content border ">
        <span className=" px-8 font-semibold overflow-hidden whitespace-nowrap">{time}</span>
      </div>
    ))}
  </div>)
}

export default TimeSlots;