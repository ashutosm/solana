import * as React from 'react';

export interface ILabelProps {
    labelText:string
}

export function Label (props: ILabelProps) {
  return (
    <div className="h-[31px] text-center font-tomorrow text-base font-semibold opacity-90 flex items-center justify-center w-full">
        {props.labelText}
    </div>
  );
}
