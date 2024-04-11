import React, { ReactNode, useState } from "react";

import { NavBar } from "../../components/NavBar";
import { ContainerFluid } from './style'

type Props = {
    children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
    
    return (
        <ContainerFluid>
            <NavBar />
            { children }
        </ContainerFluid>
    )
}

export { Container }