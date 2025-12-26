import { Href, Icon, Name } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface NavItemProps extends Href, Name, Icon {
  isActive: boolean;
}

export const NavItem = ({ isActive, href, name, icon }: NavItemProps) => (
  <li className="mt-0.5 w-full">
    <Link
      className={`py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors ${
        isActive &&
        "shadow-soft-xl rounded-lg bg-white font-semibold text-slate-700"
      }`}
      href={href}
    >
      <div
        className={`shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5 ${
          isActive && "bg-gradient-soft-purple700-pink500"
        }`}
      >
        <FontAwesomeIcon icon={icon} className={isActive ? "text-white" : ""} />
      </div>
      <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">
        {name}
      </span>
    </Link>
  </li>
);
