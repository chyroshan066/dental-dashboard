import { width } from './../../node_modules/@fortawesome/free-solid-svg-icons/fa0.d';
export const PROJECT_TABLE_HEADERS = [
    {
        header: "Companies",
        textAlign: "left",
    },
    {
        header: "Members",
        textAlign: "left",
        className: "pl-2"
    },
    {
        header: "Budget",
        textAlign: "center",
    },
    {
        header: "Completion",
        textAlign: "center",
    },
];

export const PROJECTS_DATA = [
    {
        logo: "/images/random/logo-xd.svg",
        name: "Soft UI XD Version",
        members: [
            { name: "Ryan Tompson", img: "/images/random/team-1.jpg" },
            { name: "Romina Hadid", img: "/images/random/team-2.jpg" },
            { name: "Alexander Smith", img: "/images/random/team-3.jpg" },
            { name: "Jessica Doe", img: "/images/random/team-4.jpg" },
        ],
        budget: "$14,000",
        completion: 60,
    },
    {
        logo: "/images/random/logo-atlassian.svg",
        name: "Add Progress Track",
        members: [
            { name: "Romina Hadid", img: "/images/random/team-2.jpg" },
            { name: "Jessica Doe", img: "/images/random/team-4.jpg" },
        ],
        budget: "$3,000",
        completion: 10,
    },
    {
        logo: "/images/random/logo-slack.svg",
        name: "Fix Platform Errors",
        members: [
            { name: "Romina Hadid", img: "/images/random/team-3.jpg" },
            { name: "Jessica Doe", img: "/images/random/team-1.jpg" },
        ],
        budget: "Not set",
        completion: 100,
    },
    {
        logo: "/images/random/logo-spotify.svg",
        name: "Launch our Mobile App",
        members: [
            { name: "Ryan Tompson", img: "/images/random/team-4.jpg" },
            { name: "Romina Hadid", img: "/images/random/team-3.jpg" },
            { name: "Alexander Smith", img: "/images/random/team-4.jpg" },
            { name: "Jessica Doe", img: "/images/random/team-1.jpg" },
        ],
        budget: "$20,500",
        completion: 100,
    },
    {
        logo: "/images/random/logo-jira.svg",
        name: "Add the New Pricing Page",
        members: [
            { name: "Ryan Tompson", img: "/images/random/team-4.jpg" },
        ],
        budget: "$500",
        completion: 25,
    },
    {
        logo: "/images/random/logo-invision.svg",
        name: "Redesign New Online Shop",
        members: [
            { name: "Ryan Tompson", img: "/images/random/team-1.jpg" },
            { name: "Jessica Doe", img: "/images/random/team-4.jpg" },
        ],
        budget: "$2,000",
        completion: 40,
    },
];