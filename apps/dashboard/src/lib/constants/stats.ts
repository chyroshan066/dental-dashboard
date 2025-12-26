import { Stat } from "@/types";
import {
  faCartShopping,
  faCoins,
  faGlobe,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";

export const STATS: Stat[] = [
  {
    id: 1,
    title: "Today's Money",
    value: "$53,000",
    change: "+55%",
    icon: faCoins,
  },
  {
    id: 2,
    title: "Today's Users",
    value: "2,300",
    change: "+3%",
    icon: faGlobe,
  },
  {
    id: 3,
    title: "New Clients",
    value: "+3,462",
    change: "-2%",
    icon: faScroll,
    color: "red-600",
  },
  {
    id: 4,
    title: "Sales",
    value: "$103,430",
    change: "+5%",
    icon: faCartShopping,
  },
];
