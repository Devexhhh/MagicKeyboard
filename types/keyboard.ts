export type KeyWidth = "sm" | "md" | "lg" | "xl" | "xll" | "space" | "cm";
export type ArrowType = "up" | "down" | "left" | "right";
export type ArrowSize = "half" | "full";


export type KeyAlign =
    | "center"
    | "start"
    | "end"
    | "baseline-start"
    | "baseline-end";


export type NormalKey = {
    label?: string;
    top?: string;
    bottom?: string;
    width?: KeyWidth;
    align?: KeyAlign;
    fn?: boolean;
    arrow?: "up" | "down" | "left" | "right";
    arrowSize?: "full" | "half";
};

export type ArrowClusterKey = {
    type: "arrowCluster";
};

export type KeyConfig = NormalKey | ArrowClusterKey;




