import React from 'react';
import Card from '../NewDraggableCard/NewDraggableCard';
import moment from 'moment';
import { INewDraggableCard, INewDraggableCardsListProps } from './NewDraggableCardsList.I';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import flow from 'lodash/flow';

const NewDraggableCardsList: React.FC<INewDraggableCardsListProps> = (props) => {
    const { cards, moveCard, clickCard } = props;

    return (
        <div>
            {cards.map((card: INewDraggableCard, i: number) => (
                <Card
                    key={card.name}
                    indicatorColor={card.color}
                    index={i}
                    id={card.name}
                    text={card.name}
                    subtitle={card.startDate && card.endDate ? `${moment(card.endDate).diff(moment(card.startDate), 'days') + 1} day(s)` : '0 days'}
                    moveCard={moveCard}
                    clickCard={() => clickCard(card.id)}
                    class={'draggable-card'}
                />
            ))}
        </div>
    );
};

export default NewDraggableCardsList;
