import * as React from "react";
import { Label } from "./label";

export interface IShowgroupProps {
  currentAmount:string;
  percentageIncrease?:number;
  coinName:string;
}

export function Showgroup(props: IShowgroupProps) {
  return (
    <div className="flex flex-col w-full cursor-pointer hover:opacity-50">
      <div className="border border-solid border-border-100  bg-gray-600  rounded-[17px] font-tomorrow h-[40px] w-full relative flex justify-center items-center">
        <div className="text-xl font-semibold text-secondary-blue-000">
          {props.currentAmount}
        </div>
        {props.percentageIncrease && <div className={`absolute right-5 text-xl font-semibold ${props.percentageIncrease>0 ? 'text-turquoise':'text-brown'}`}>
          {props.percentageIncrease>0?'+':''}{props.percentageIncrease}%
        </div>}
      </div>
      <Label labelText={props.coinName} />
    </div>
  );
}
