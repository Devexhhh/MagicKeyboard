import { keyboardLayout } from "./keyboard.layout";
import { KeyboardRow } from "./KeyboardRow";
import { ArrowCluster } from "./ArrowCluster";

export function Keyboard() {
    return (
        <div className="bg-black p-2 rounded-xl shadow-2xl">
            <div className="grid grid-cols-[auto_auto] gap-x-1.5">
                <div className="flex flex-col gap-1.5 mb-[2px]">
                    {keyboardLayout.map((row, idx) => (
                        <KeyboardRow key={idx} row={row} />
                    ))}
                </div>
                <div className="flex flex-col gap-1.5 justify-end -ml-53">
                    <ArrowCluster />
                </div>
            </div>
        </div>
    );
}
