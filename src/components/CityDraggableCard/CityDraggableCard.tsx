import React, { useImperativeHandle, useRef } from 'react';
import { ConnectDropTarget, ConnectDragSource, DropTargetMonitor, DragSourceMonitor } from 'react-dnd';
import { DragSource, DropTarget, DropTargetConnector, DragSourceConnector } from 'react-dnd';
import { ICityDraggableCardProps, ItemTypes } from './CityDraggableCard.I';
import { XYCoord } from 'dnd-core';
import SVG from 'react-inlinesvg';

interface CardInstance {
    getNode(): HTMLDivElement | null;
}

const CityDraggableCard = React.forwardRef<HTMLDivElement, ICityDraggableCardProps>(({ id, text, subtitle, footerText, indicatorColor, classNames, isDragging, connectDragSource, connectDropTarget, onRemove }, ref) => {
    const elementRef = useRef(null);
    connectDragSource(elementRef);
    connectDropTarget(elementRef);

    const opacity = isDragging ? 0 : 1;
    useImperativeHandle<any, CardInstance>(ref, () => ({
        getNode: () => elementRef.current,
    }));
    return (
        <div ref={elementRef} className={`draggable-card ${classNames}`} style={{ opacity }}>
            <SVG key={`remove-icon-${id}`} width="14" height="14" onClick={() => onRemove(id)} className="draggable-card__remove-icon" src="/images/close.svg" />
            <span className="draggable-card__content"><div className="draggable-card__indicator" style={{ backgroundColor: indicatorColor }}></div><span>{text}</span></span>
            <span className="draggable-card__subtitle">{subtitle}</span>
            <span className="draggable-card__handle"></span>
        </div>
    );
});

export default DropTarget(
    ItemTypes.CARD,
    {
        hover(props: ICityDraggableCardProps, monitor: any, component: CardInstance) {
            if (!component) {
                return null;
            }
            // node = HTML Div element from imperative API
            const node = component.getNode();
            if (!node) {
                return null;
            }

            const dragIndex = monitor.getItem().index;
            const hoverIndex = props.index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }

            // Determine rectangle on screen
            const hoverBoundingRect = node.getBoundingClientRect();

            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            // Determine mouse position
            const clientOffset = monitor.getClientOffset();

            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            // Time to actually perform the action
            props.moveCard(dragIndex, hoverIndex);

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            monitor.getItem().index = hoverIndex;
        },
    },
    (connect: any) => ({
        connectDropTarget: connect.dropTarget(),
    }),
)(
    DragSource(
        ItemTypes.CARD,
        {
            beginDrag: (props: ICityDraggableCardProps) => ({
                id: props.id,
                index: props.index,
            }),
        },
        (connect: any, monitor: any) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    )(CityDraggableCard),
);
