import React, { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps{
    element?: HTMLElement
    children: ReactNode
}

export const Portal: FC<PortalProps> = ({ element = document.body, children }) => {
    return createPortal(children, element);
};
