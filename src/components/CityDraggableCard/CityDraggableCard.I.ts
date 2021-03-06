import { SyntheticEvent } from 'react';

export const ItemTypes = {
    CARD: 'card',
};

export interface ICityDraggableCardProps {
    key: string;
    id: string;
    index: number;
    text: string;
    footerText?: string;
    clickCard: (event: SyntheticEvent) => void;
    indicatorColor: string;
    subtitle?: string;
    classNames: string;
    moveCard: (dragIndex: number, hoverIndex: number) => void;
    isDragging: boolean;
    connectDragSource: any;
    connectDropTarget: any;
    onRemove: (id: string) => void;
}
