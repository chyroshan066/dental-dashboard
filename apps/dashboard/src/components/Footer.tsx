import { FOOTER_LINKS } from "@/constants";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Footer = () => (
  <footer className="pt-4">
    <div className="w-full px-6 mx-auto">
      <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
        <div className="w-full max-w-full px-3 mt-0 mb-6 shrink-0 lg:mb-0 lg:w-1/2 lg:flex-none">
          <div className="text-sm leading-normal text-center text-slate-500 lg:text-left">
            © {new Date().getFullYear()}, made with{" "}
            <FontAwesomeIcon icon={faHeart} /> by{" "}
            <a
              href="#"
              className="font-semibold text-slate-700"
              target="_blank"
            >
              Roshan
            </a>{" "}
            for a better web.
          </div>
        </div>
        <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
          <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
            {FOOTER_LINKS.map((link, index) => (
              <li key={index} className="nav-item">
                <Link
                  href={link.href}
                  className="block px-4 pt-0 pb-1 text-sm font-normal transition-colors ease-soft-in-out text-slate-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
