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
    href: "/profile",
    icon: faUser,
  },
  {
    id: 2,
    name: "Sign In",
    href: "/signin",
    icon: faFileLines,
  },
  {
    id: 3,
    name: "Sign Up",
    href: "/signup",
    icon: faRocket,
  },
];
