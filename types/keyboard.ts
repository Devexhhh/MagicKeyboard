export type KeyWidth = "sm" | "md" | "lg" | "xl" | "xll" | "space" | "cm";
export type ArrowType = "up" | "down" | "left" | "right";
export type ArrowSize = "half" | "full";

export type KeyAlign =
    | "center"
    | "start"
    | "end"
    | "baseline-start"
    | "baseline-end";


export type KeyConfig = {
    label?: string;
    top?: string;
    bottom?: string;
    width?: KeyWidth;
    align?: KeyAlign;

    fn?: boolean;
    arrow?: ArrowType;
    arrowSize?: ArrowSize;
};




