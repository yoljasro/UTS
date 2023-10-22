declare module 'react-reveal' {
    import React from 'react';

    interface FadeProps {
        duration?: 1000;
        delay?: 0;
        fraction?: 0.5;
        fadeStyle?: React.CSSProperties;
        children?: React.ReactNode;
        left? : true;
        cascade: true;
    }

    interface ZoomProps {
        duration?: 1000; // Default: 1000
        delay?: 0; // Default: 0
        fraction?: 0.5; // Default: 0.5
        zoomStyle?: {}
        children?: null
    }


    export const Fade: React.FC<FadeProps>;
    export const Zoom: React.FC<ZoomProps>;
}