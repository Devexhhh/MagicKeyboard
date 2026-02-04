export const keyWidths = {
    sm: "w-12",
    md: "w-16",
    lg: "w-26",
    cm: "w-[80px]",
    xl: "w-[118.5px]",
    xll: "w-[153px]",
    space: "w-[350px]",
};

export const keyHeights = {
    normal: "h-15.5",
    arrowFull: "h-15.5",
    arrowHalf: "h-7.2",
};


export const baseKey =
    "rounded-[8px] w-16 bg-zinc-900 text-zinc-100 shadow-[inset_0_-2px_4px_rgba(255,255,255,0.12)]";


export const keyAlignment: Record<string, string> = {
    center: "items-center justify-center text-center",
    start: "items-start justify-start text-left",
    end: "items-end justify-end text-right",
    "baseline-start":
        "items-baseline justify-end items-start pb-2 pl-2.5",

    "baseline-end":
        "items-baseline justify-end items-end text-right pr-2.5 pb-2",
};