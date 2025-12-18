import { faCreditCard, faFileLines, faRocket, faWrench } from "@fortawesome/free-solid-svg-icons";

export const CHART_METRICS = [
    {
        label: "Users",
        value: "36K",
        progress: 60,
        icon: faFileLines,
        color: "bg-gradient-soft-purple-pink",
        width: "w-3/5",
    },
    {
        label: "Clicks",
        value: "2m",
        progress: 90,
        icon: faRocket,
        color: "bg-gradient-soft-blue600-cyan400",
        width: "w-9/10",
    },
    {
        label: "Sales",
        value: "435$",
        progress: 30,
        icon: faCreditCard,
        color: "bg-gradient-soft-red500-yellow400",
        width: "w-3/10",
    },
    {
        label: "Items",
        value: "43",
        progress: 50,
        icon: faWrench,
        color: "bg-gradient-soft-red600-rose400",
        width: "w-1/2",
    },
];