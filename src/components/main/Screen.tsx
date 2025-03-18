import React, { ReactNode } from "react";

interface ScreenTypes {
    children: ReactNode
}

const Screen: React.FC<ScreenTypes> = ({children}) => {
    return(
        <div className="w-screen h-screen overflow-x-hidden text-black bg-slate-100 dark:bg-black/90 dark:text-slate-100">
            {children}
        </div>
    );
}

export default Screen;