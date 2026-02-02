import { keyboardLayout } from "./keyboard.layout";
import { KeyboardRow } from "./KeyboardRow";

export function Keyboard() {
    return (
        <div className="bg-black p-2 rounded-2xl shadow-2xl">
            <div className="flex flex-col gap-1.5">
                {keyboardLayout.map((row, idx) => (
                    <KeyboardRow key={idx} row={row} />
                ))}
            </div>
        </div>
    );
}
