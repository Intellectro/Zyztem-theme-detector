import React from "react";

interface ContainerTypes {
    children: React.ReactNode
}

const Container: React.FC<ContainerTypes> = ({children}) => {
    return(
        <div className="container mx-auto">
            {children}
        </div>
    );
}

export default Container;