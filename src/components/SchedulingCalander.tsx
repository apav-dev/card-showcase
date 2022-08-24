import * as React from "react";
import { v4 as uuid } from "uuid";
import { getDateFromNow } from "../util";


interface CalanderDateProps {
  date: string[];
  numAppts: number;
}
const CalanderDate = ({date, numAppts}: CalanderDateProps): JSX.Element => {
  return (
    <div className="card px-2 pt-2 border text-sm hover:bg-primary hover:text-primary-content">
      <div>{date[0]}</div>
      <div>{date[1]}</div>
      <div className="py-2">{numAppts} appts</div>
    </div>
  )
}

const SchedulingCalander = () => {
  return (
    <div className="flex space-x-1.5 mt-1">
      {[...Array(7)].map((_,i) => {
        return (
          <div key={uuid()}>
            <CalanderDate date={getDateFromNow(i)}  
            numAppts={Math.floor(Math.random() * Math.floor(10))}/>
          </div> 
        )
      })}
    </div>
  )
}

export default SchedulingCalander;