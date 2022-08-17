import { Card, Collection } from "@flash-cards/models";

export interface ICardsRepository {
  getCollections(): Promise<Array<Collection>>;
  getCards(collectionId: string): Promise<Array<Card>>;
  getPracticeSet(collectionId: string): Promise<Array<Card>>;
}
