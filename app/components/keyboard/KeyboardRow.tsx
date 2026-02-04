import { Key } from "./Key";
import { KeyConfig } from "@/types/keyboard";

export function KeyboardRow({ row }: { row: KeyConfig[] }) {
    const arrowKeys = row.filter((k) => k.arrow);
    const normalKeys = row.filter((k) => !k.arrow);

    return (
        <div className="flex gap-1.5">
            {normalKeys.map((key, idx) => (
                <Key key={idx} {...key} />
            ))}
            {arrowKeys.length > 0 && (
                <div className="grid grid-cols-3 gap-1.5">
                    <div />
                    <Key arrow="up" />
                    <div />

                    <Key arrow="left" />
                    <Key arrow="down" />
                    <Key arrow="right" />
                </div>
            )}
        </div>
    );
}
