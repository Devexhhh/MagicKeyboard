import type { ReactNode } from "react";
import {
    ArrowBigUp,
    ArrowBigDown,
    ArrowBigLeft,
    ArrowBigRight,
} from "lucide-react";

export const arrowIcons: Record<string, ReactNode> = {
    up: <ArrowBigUp size={14} />,
    down: <ArrowBigDown size={14} />,
    left: <ArrowBigLeft size={14} />,
    right: <ArrowBigRight size={14} />,
};
