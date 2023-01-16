import Image from "next/image";
import * as React from "react";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src={"../vuesaxlinearactivity.svg"}
        alt="vausax_image"
        width={16}
        height={16}
      />
      <span className="text-white text-xl font-tomorrow font-semibold">
        Trending Assets
      </span>
    </div>
  );
}
