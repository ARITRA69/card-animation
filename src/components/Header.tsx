import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="p-6 top-0 z-10 sticky">
      <div className="flex justify-between items-center ">
        <Link
          href="https://aritra.design"
          target="_blank"
          className="hover:text-red-600 transition-all duration-500"
        >
          aritra.design
        </Link>
        <Link href="https://github.com/ARITRA69/card-animation" target="_blank">
          <FaGithub className="h-8 w-8 hover:text-red-600 transition-all duration-500" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
