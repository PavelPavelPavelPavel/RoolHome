export const customColors = {
    'red': '#ff0103',
    'white': '#ffffff',
    'aquamarin': '#3feee6',
    'dark-aquamarin': '#55bcc9',
    'gray': '#97caef',
    'white-aquamarin': '#cafafe',
    'black': '#020009'
};

export const pulseKeyFrames = {
    "0%, 100%": {
        opacity: "1",
    },
    "50%": {
        opacity: "0.5",
    }
}

export const caruselKeyFrames = {
    "0%": {
        opacity: "0",
        "animation-timing-function": "ease-in",
    },
    "8%": {
        opacity: "1",
        transform: "scale(1.05)",
        "animation-timing-function": "ease-out",
    },
    "17%": {
        opacity: "1",
        transform: "scale(1.1) rotate(3deg)",
    },
    "25%": {
        opacity: "1",
        transform: "scale(1.1) rotate(3deg)",
    },
    "100%": { opacity: "0" }
}