import * as React from 'react';
import DraggableCard from '../DraggableCard/DraggableCard';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import flow from 'lodash/flow';
import moment from 'moment';
import {IDraggableCard, IDraggableCardsListProps} from "./DraggableCardsList.I";

class DraggableCardsList extends React.Component<IDraggableCardsListProps> {
  render() {
    const {cards, title, moveCard, clickCard} = this.props;

    return (
      <div className="draggable-cards-list">
        <p className="draggable-cards-list-title">{title}</p>
        {  cards.map((card: IDraggableCard, i) => (
          <div>
            {(i !== 0 ) &&
              <div className={"draggable-card-separator"}>
                <div className={"draggable-card-separator-vertical-line"}></div>
                <div className={"draggable-card-separator-text"}>{card.duration} / {card.distance}</div>
                <div className={"draggable-card-separator-vertical-line"}></div>
              </div>
            }
            <DraggableCard
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
          </div>
          )
        )}
      </div>
    );
  }
}

export default flow(
  DragDropContext(HTML5Backend)
)(DraggableCardsList);
