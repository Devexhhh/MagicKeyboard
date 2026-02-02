import { Key } from "./Key";

export function ArrowCluster() {
    return (
        <div className="flex gap-1.5">
            <Key arrow="left" arrowSize="full" />

            <div className="flex flex-col gap-2">
                <Key arrow="up" arrowSize="half" />
                <Key arrow="down" arrowSize="half" />
            </div>

            <Key arrow="right" arrowSize="full" />
        </div>
    );
}


