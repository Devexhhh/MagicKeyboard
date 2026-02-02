import { Key } from "./Key";
import { KeyConfig } from "@/types/keyboard";

export function KeyboardRow({ row }: { row: KeyConfig[] }) {
    return (
        <div className="flex gap-1.5">
            {row.map((key, idx) => (
                <Key key={idx} {...key} />
            ))}
        </div>
    );
}
