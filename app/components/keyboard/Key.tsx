"use client";

import { keyWidths, baseKey, keyAlignment } from "./keyVariants";
import { KeyConfig } from "@/types/keyboard";
import { fnIcons } from "@/lib/fnIcons";

export function Key({
    label,
    top,
    bottom,
    width = "md",
    align = "center",
    fn = false,
}: KeyConfig) {
    return (
        <div
            className={`
        ${baseKey}
        ${keyWidths[width]}
        ${keyAlignment[align]}
        flex flex-col gap-2
        hover:bg-zinc-800 active:scale-95 transition
      `}
        >
            {/* Function key (icon on top, label bottom) */}
            {fn && label && (
                <>
                    <span className="flex justify-center text-zinc-300">
                        {fnIcons[label]}
                    </span>
                    <span className="text-xs">
                        {label}
                    </span>
                </>
            )}
            {!fn && (
                <>
                    {top && (
                        <span className="text-sx text-zinc-400">
                            {top}
                        </span>
                    )}

                    <span className="text-xs">
                        {bottom ?? label}
                    </span>
                </>
            )}
        </div>
    );
}
