"use client";

import { keyWidths, baseKey, keyAlignment } from "./keyVariants";
import { KeyConfig } from "@/types/keyboard";

export function Key({
    label,
    top,
    bottom,
    width = "md",
    align = "center",
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
            {top && (
                <span className="text-sm text-zinc-400">
                    {top}
                </span>
            )}

            <span className="text-sm">
                {bottom ?? label}
            </span>
        </div>
    );
}
