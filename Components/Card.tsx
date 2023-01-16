import Image from "next/image";
import * as React from "react";
import { Label } from "./label";
import { coin, PairCollection } from "./PairCollection";
import { Showgroup } from "./Showgroup";

export interface ICardProps {
  imageName: string;
  label: string;
  currencyPrice:string;
  currencyPercentageIncrease:number;
  tvlPrice:string;
  coinPairs:coin[]
}

export function Card(props: ICardProps) {
  return (
    <div className="relative w-[290px] h-[350px] mt-[60px]">
      <div className="absolute left-1/2 -translate-x-1/2 -top-[50px] bg-gradient-to-r from-linearGradient-100/10 to-linearGradient-200/6 border border-solid border-border-100/10 shadow-md backdrop-filter  rounded-full">
        <div className="h-[100px] w-[100px] rounded-full flex items-center justify-center ">
          <Image
            src={`../${props.imageName}.svg`}
            width={49.83}
            height={49.83}
            alt="card-header"
          />
        </div>
      </div>
      <div className="clip-your-needful-style  relative cardbg w-[290px] min-h-[350px]">
        <div className="pt-[60px] pb-[10px] px-[26px] flex items-center text-gray-300 flex-col gap-2">
          <Label labelText={props.label} />
          <Showgroup currentAmount={props.currencyPrice} percentageIncrease={props.currencyPercentageIncrease} coinName={'price'} />
          <Showgroup currentAmount={props.tvlPrice}  coinName={'TVL'} />
          <PairCollection
             pairs={props.coinPairs}
          />
        </div>
      </div>
    </div>
  );
}
