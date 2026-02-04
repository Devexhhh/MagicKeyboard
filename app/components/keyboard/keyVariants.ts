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


export const baseKey = `
bg-gradient-to-b from-zinc-800/80 to-zinc-900
relative
rounded-lg
bg-zinc-900
text-zinc-100
cursor-pointer

shadow-[
  0_0_18px_rgba(255,255,255,0.28),
  0_0_36px_rgba(255,255,255,0.18),
  0_0_64px_rgba(255,255,255,0.08),
  inset_0_0_0_1px_rgba(255,255,255,0.08)
]

transition-all
duration-200
ease-out
`;

export const keyAlignment: Record<string, string> = {
    center: "items-center justify-center text-center",
    start: "items-start justify-start text-left",
    end: "items-end justify-end text-right",
    "baseline-start":
        "items-baseline justify-end items-start pb-2 pl-2.5",

    "baseline-end":
        "items-baseline justify-end items-end text-right pr-2.5 pb-2",
};