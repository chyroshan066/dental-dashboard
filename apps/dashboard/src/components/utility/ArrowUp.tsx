import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ArrowUpProps {
    percentage: string;
    timeframe: string;
}

export const ArrowUp = ({
    percentage, timeframe
}: ArrowUpProps) => (
    <p className="text-sm leading-normal">
        <FontAwesomeIcon
            icon={faArrowUp}
            className="text-lime-500"
        />
        <span className="font-semibold">{percentage}</span> {timeframe}
    </p>
);