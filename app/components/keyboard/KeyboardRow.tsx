import { Key } from "./Key";
import { ArrowCluster } from "./ArrowCluster";
import { KeyConfig } from "@/types/keyboard";

export function KeyboardRow({ row }: { row: KeyConfig[] }) {
    return (
        <div className="flex gap-1.5">
            {row.map((item, idx) => {
                if ("type" in item && item.type === "arrowCluster") {
                    return (
                        <div key={idx} className="flex justify-center">
                            <ArrowCluster />
                        </div>
                    );
                }
                return <Key key={idx} {...item} />;
            })}
        </div>
    );
}
