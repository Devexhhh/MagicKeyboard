"use client";

import { keyWidths, baseKey, keyAlignment } from "./keyVariants";
import { KeyConfig } from "@/types/keyboard";
import { fnIcons } from "@/lib/fnIcons";
import { arrowIcons } from "@/lib/arrowIcons";

export function Key({
    label,
    top,
    bottom,
    width = "md",
    align = "center",
    fn = false,
    arrow,
    arrowSize = "full",
}: KeyConfig) {

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
        hover:bg-zinc-800 active:scale-95 transition
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
                    <span className="text-[10px] text-zinc-500 text-center tracking-wide">
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
