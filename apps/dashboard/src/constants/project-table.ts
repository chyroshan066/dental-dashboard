import { ProjectData, TableHeader } from "@/types";

export const PROJECT_TABLE_HEADERS: TableHeader[] = [
  {
    id: 1,
    header: "Companies",
    textAlign: "left",
  },
  {
    id: 2,
    header: "Members",
    textAlign: "left",
    className: "pl-2",
  },
  {
    id: 3,
    header: "Budget",
    textAlign: "left",
    className: "ps-2",
  },
  {
    id: 4,
    header: "Completion",
    textAlign: "center",
  },
];

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    logo: "/images/random/logo-xd.svg",
    name: "Soft UI XD Version",
    members: [
      { id: 1, name: "Ryan Tompson", img: "/images/random/team-1.jpg" },
      { id: 2, name: "Romina Hadid", img: "/images/random/team-2.jpg" },
      { id: 3, name: "Alexander Smith", img: "/images/random/team-3.jpg" },
      { id: 4, name: "Jessica Doe", img: "/images/random/team-4.jpg" },
    ],
    budget: "$14,000",
    completion: 60,
  },
  {
    id: 2,
    logo: "/images/random/logo-atlassian.svg",
    name: "Add Progress Track",
    members: [
      { id: 1, name: "Romina Hadid", img: "/images/random/team-2.jpg" },
      { id: 2, name: "Jessica Doe", img: "/images/random/team-4.jpg" },
    ],
    budget: "$3,000",
    completion: 10,
  },
  {
    id: 3,
    logo: "/images/random/logo-slack.svg",
    name: "Fix Platform Errors",
    members: [
      { id: 1, name: "Romina Hadid", img: "/images/random/team-3.jpg" },
      { id: 2, name: "Jessica Doe", img: "/images/random/team-1.jpg" },
    ],
    budget: "Not set",
    completion: 100,
  },
  {
    id: 4,
    logo: "/images/random/logo-spotify.svg",
    name: "Launch our Mobile App",
    members: [
      { id: 1, name: "Ryan Tompson", img: "/images/random/team-4.jpg" },
      { id: 2, name: "Romina Hadid", img: "/images/random/team-3.jpg" },
      { id: 3, name: "Alexander Smith", img: "/images/random/team-4.jpg" },
      { id: 4, name: "Jessica Doe", img: "/images/random/team-1.jpg" },
    ],
    budget: "$20,500",
    completion: 100,
  },
  {
    id: 5,
    logo: "/images/random/logo-jira.svg",
    name: "Add the New Pricing Page",
    members: [
      { id: 1, name: "Ryan Tompson", img: "/images/random/team-4.jpg" },
    ],
    budget: "$500",
    completion: 25,
  },
  {
    id: 6,
    logo: "/images/random/logo-invision.svg",
    name: "Redesign New Online Shop",
    members: [
      { id: 1, name: "Ryan Tompson", img: "/images/random/team-1.jpg" },
      { id: 2, name: "Jessica Doe", img: "/images/random/team-4.jpg" },
    ],
    budget: "$2,000",
    completion: 40,
  },
];
