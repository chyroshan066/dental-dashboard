import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

export const ArrowUp = memo(() => (
    <p className="text-sm leading-normal">
        <FontAwesomeIcon
            icon={faArrowUp}
            className="text-lime-500"
        />
        <span className="font-semibold">4% more</span> in 2021
    </p>
));

ArrowUp.displayName = "ArrowUp";