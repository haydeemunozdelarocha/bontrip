export interface INewDraggableCardsListProps {
    cards: INewDraggableCard[];
    clickCard: (id: string) => void;
    moveCard?: () => void;
    title: string;
}

export interface INewDraggableCard {
    id: string;
    color: string;
    startDate: string;
    endDate: string;
    name: string;
    duration: string;
    distance: string;
}
