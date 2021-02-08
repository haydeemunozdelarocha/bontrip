import React from 'react';
import CityDraggableCard from '../CityDraggableCard/CityDraggableCard';
import moment from 'moment';
import { ICityDraggableCard, ICityDraggableCardsListProps } from './CityDraggableCardsList.I';
import { DragDropContext } from 'react-dnd';

const CityDraggableCardsList: React.FC<ICityDraggableCardsListProps> = (props) => {
    const { cards, moveCard, clickCard, removeCard } = props;

    return (
        <div>
            {cards.map((card: ICityDraggableCard, i: number) => (
                <CityDraggableCard
                    key={card.name}
                    indicatorColor={card.color}
                    index={i}
                    id={card.id}
                    text={card.name}
                    subtitle={card.startDate && card.endDate ? `${moment(card.endDate).diff(moment(card.startDate), 'days') + 1} day(s)` : '0 days'}
                    moveCard={moveCard}
                    clickCard={() => clickCard(card.id)}
                    class={'draggable-card'}
                    onRemove={removeCard}
                />
            ))}
        </div>
    );
};

export default CityDraggableCardsList;
