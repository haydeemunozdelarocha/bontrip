export interface ICityDraggableCardsListProps {
    cards: ICityDraggableCard[];
    clickCard: (id: string) => void;
    moveCard?: () => void;
    removeCard?: (id: string) => void;
    title: string;
}

export interface ICityDraggableCard {
    id: string;
    color: string;
    startDate: string;
    endDate: string;
    name: string;
    duration: string;
    distance: string;
}
