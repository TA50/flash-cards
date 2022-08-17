import { Collection, Card } from "@flash-cards/models";
import { ICardsRepository } from "@flash-cards/repositories";
import { injectable } from "inversify";

@injectable()
export class CardsRepositoryMock implements ICardsRepository {
  getCollections(): Promise<Collection[]> {
    return Promise.resolve<Collection[]>([
      {
        id: "1",
        name: "italian",
      },
      {
        id: "2",
        name: "spanish",
      },
      {
        id: "3",
        name: "english",
      },
      {
        id: "4",
        name: "terminology",
      },
    ]);
  }
  getCards(collectionId: string): Promise<Card[]> {
    throw new Error("Method not implemented.");
  }
  getPracticeSet(collectionId: string): Promise<Card[]> {
    throw new Error("Method not implemented.");
  }
}
