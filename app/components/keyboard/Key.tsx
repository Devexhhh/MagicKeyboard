"use client";

import { keyWidths, baseKey, keyAlignment } from "./keyVariants";
import { fnIcons } from "@/lib/fnIcons";
import { arrowIcons } from "@/lib/arrowIcons";
import { NormalKey } from "@/types/keyboard";

export function Key({
    label,
    top,
    bottom,
    width = "md",
    align = "center",
    fn = false,
    arrow,
    arrowSize = "full",
}: NormalKey) {


    const heightClass = arrow
        ? arrowSize === "half"
            ? "h-7"
            : "h-15.5"
        : "h-15.5";

    return (
        <div
            className={`
        ${baseKey}
        ${keyWidths[width]}
        ${keyAlignment[align]}
        ${heightClass}
        flex flex-col gap-1.5
        shadow-[inset_0_0_0_1px_rgba(255,255,255,0.50),0_0_10px_rgba(255,255,255,0.45)]
        hover:scale-[1.04]
        hover:-translate-y-0.5
       active:bg-zinc-800
         active:shadow-[inset_0_0_0_1px_rgba(48,82,255,0.9),0_0_20px_rgba(48,82,255,1)]
         active:scale-[0.97]
      `}
        >
            {/* Arrow key */}
            {arrow && (
                <span className="flex row-span-2 col-span-3 items-center justify-center text-zinc-300">
                    {arrowIcons[arrow]}
                </span>
            )}

            {/* Function key */}
            {!arrow && fn && label && (
                <>
                    <span className="flex justify-center text-zinc-300">
                        {fnIcons[label]}
                    </span>
                    <span className="text-[14px] text-center tracking-wide">
                        {label}
                    </span>
                </>
            )}

            {/* Normal key */}
            {!arrow && !fn && (
                <>
                    {top && (
                        <span className="text-sm text-zinc-400">
                            {top}
                        </span>
                    )}
                    <span className="text-sm">
                        {bottom ?? label}
                    </span>
                </>
            )}

        </div>
    );
}
