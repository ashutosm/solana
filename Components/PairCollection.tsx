import Image from 'next/image';
import * as React from 'react';
export interface coin{
   name:string;
   imageName:string;
}
export interface IPairCollectionProps {
    pairs:coin[],
}

export function PairCollection (props: IPairCollectionProps) {
  return (
    <div className='px-[15px] py-[9px] rounded-[29px] bg-gray-600 flex gap-3'>
         {props.pairs.map((e)=>{
            return (<Image 
              className='cursor-pointer hover:opacity-50'
            src={`../${e.imageName}.svg`}
            alt={e.name}
            height={22}
            width={22}
            />
            );
         })}
    </div>
  );
}
