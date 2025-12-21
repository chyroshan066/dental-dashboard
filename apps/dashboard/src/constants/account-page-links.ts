import { Link } from "@/types";
import {
  faFileLines,
  faRocket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const ACCOUNT_PAGES: Link[] = [
  {
    id: 1,
    name: "Profile",
    href: "/",
    icon: faUser,
  },
  {
    id: 2,
    name: "Sign In",
    href: "/",
    icon: faFileLines,
  },
  {
    id: 3,
    name: "Sign Up",
    href: "/",
    icon: faRocket,
  },
];
