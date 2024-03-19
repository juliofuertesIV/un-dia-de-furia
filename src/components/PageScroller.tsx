import { ReactNode } from "react";

export default function PageScroller({ children } : { children: ReactNode }) {

    return (
        <div className="h-screen w-full py-8 overflow-hidden relative">
            <div 
                className={ `mx-auto w-fit max-w-4xl transition-transform absolute inset-0` } 
                id="scroller"
            >
                { children }
            </div>
        </div>
    )
}
