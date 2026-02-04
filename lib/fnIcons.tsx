import type { ReactNode } from "react";
import {
    SunDim,
    Sun,
    LayoutGrid,
    Search,
    Mic,
    Moon,
    SkipBack,
    Play,
    SkipForward,
    VolumeX,
    Volume1,
    Volume2,
    Circle,
    Dot,
    Globe,
} from "lucide-react";

export const fnIcons: Record<string, ReactNode> = {
    F1: <SunDim size={16} />,
    F2: <Sun size={16} />,
    F3: <LayoutGrid size={16} />,
    F4: <Search size={16} />,
    F5: <Mic size={16} />,
    F6: <Moon size={16} />,
    F7: <SkipBack size={16} />,
    F8: <Play size={16} />,
    F9: <SkipForward size={16} />,
    F10: <VolumeX size={16} />,
    F11: <Volume1 size={16} />,
    F12: <Volume2 size={16} />,
    " ": <Circle size={40} strokeWidth={0.4} className="text-gray-500" />,
    capslock: <Dot size={20} className="text-red-500" />,
    fn: <Globe size={16} strokeWidth={1} />
};
