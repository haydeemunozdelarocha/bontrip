import { SyntheticEvent } from 'react';

export const ItemTypes = {
    CARD: 'card',
};

export interface INewDraggableCardProps {
    key: string;
    id: any;
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
}
